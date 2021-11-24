import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  addPost,
  REMOVE_IMAGE,
  UPLOAD_IMAGES_REQUEST,
  ADD_POST_REQUEST,
} from "../reducers/post";
import { backUrl } from "../config/config";

const PostFrom = () => {
  const { imagePaths, addPostDone } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const imageInput = useRef();
  const [text, setText] = useState("");

  useEffect(() => {
    if (addPostDone) {
      setText("");
    }
  }, [addPostDone]);

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const onSubmit = useCallback(() => {
    //dispatch(addPost(text));
    if (!text || !text.trim) {
      return alert("게시글을 작성하세요.");
    }
    const formData = new FormData();
    imagePaths.forEach((pic) => {
      formData.append("image", pic);
    });
    formData.append("content", text);
    return dispatch({
      type: ADD_POST_REQUEST,
      data: formData,
    });
  }, [text, imagePaths]);

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onChangeImages = useCallback((e) => {
    console.log("images", e.target.files);
    // prototype에 foreach 메서드를 쓸 수가 없다.
    const imageFormData = new FormData();
    // 따라서 빈 배열에 append 메서드를 사용하여 유사배열 만듦
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append("image", f);
    });
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    });
  });

  const onRemoveImage = useCallback((idx) => () => {
    dispatch({
      type: REMOVE_IMAGE,
      data: idx,
    });
  });
  return (
    <Form
      style={{ margin: "10px 0 20px" }}
      encType="multipart/form-data"
      onFinish={onSubmit}
    >
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder={"경험을 적어보세요?"}
      />
      <div>
        <input
          type="file"
          name="image"
          multiple
          hidden
          ref={imageInput}
          onChange={onChangeImages}
        />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" style={{ float: "right" }} htmlType="submit">
          제출
        </Button>
      </div>
      <div>
        {imagePaths.map((v, idx) => (
          <div key={v} style={{ display: "inline-block" }}>
            <img src={`${backUrl}/${v}`} style={{ width: "200px" }} />
            <div>
              <Button onClick={onRemoveImage(idx)}>제거</Button>
            </div>
          </div>
        ))}
      </div>
    </Form>
  );
};

export default PostFrom;
