const express = require("express");
const { Post, Image, Comment, User, Hashtag } = require("../models");
const { isLoggedIn } = require("./middlewares");
const path = require("path");
const multer = require("multer");
const fs = require("fs");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");

const router = express.Router();

// 이미지 업로드를 위한 폴더 생성
try {
  fs.accessSync("uploads");
} catch (error) {
  console.log("uploads 폴더가 없으므로 생성");
  fs.mkdirSync("uploads");
}

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: "ap-northeast-2",
});
const upload = multer({
  // storage: multer.diskStorage({
  //   // 임시로 파일시스템 스토리지에 저장, 배포시 AWS로 변경 예정
  //   destination(req, file, done) {
  //     done(null, "uploads");
  //   },
  //   filename(req, file, done) {
  //     // 업로드시 중복파일명은 덮어버리기때문에 ms단위로 파일명 뒤에 붙임
  //     const ext = path.extname(file.originalname); // 확장자 추출(png)
  //     const basename = path.basename(file.originalname, ext); // 파일명
  //     done(null, basename + "_" + new Date().getTime() + ext); // 파일명2110812.png
  //   },
  // }),
  //NOTE: S3로 변경
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: "happy-sns-s3",
    key(req, file, cb) {
      cb(null, `original/${Date.now()}_${path.basename(file.originalname)}`);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 }, // 용량 제한 20MB
});

router.post("/", isLoggedIn, upload.none(), async (req, res, next) => {
  try {
    const hashtags = req.body.content.match(/#[^\s#]+/g);
    const post = await Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });
    if (hashtags) {
      const result = await Promise.all(
        hashtags.map((tag) =>
          Hashtag.findOrCreate({ where: { name: tag.slice(1).toLowerCase() } })
        )
      );
      await post.addHashtags(result.map((v) => v[0]));
    }

    // NOTE: front에서 key명은 반드시 일치해야한다.
    if (req.body.image) {
      if (Array.isArray(req.body.image)) {
        // 이미지를 여러개 올리면 image : { 1.png, 2.png}
        const images = await Promise.all(
          req.body.image.map((image) => Image.create({ src: image }))
        );
        await post.addImages(images);
      } else {
        // 이미지 단수
        const image = await Image.create({ src: req.body.image });
        await post.addImages(image);
      }
    }
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [
        {
          model: Image,
        },
        {
          model: Comment,
          include: [
            {
              model: User, // 댓글 작성자
              attributes: ["id", "nickname"],
            },
          ],
        },
        {
          model: User, // 게시글 작성자
          attributes: ["id", "nickname"],
        },
        {
          model: User, // 좋아요 누른 사람
          as: "Likers",
          attributes: ["id"],
        },
      ],
    });
    res.status(201).json(fullPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
});
router.get("/:postId", async (req, res, next) => {
  // GET /post/1
  // POST /post/1/retweet
  try {
    //게시물 존재 여부
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });
    if (!post) {
      return res.status(403).send("존재하지 않는 게시글입니다.");
    }

    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [
        {
          model: Post,
          as: "Retweet",
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
            },
            {
              model: Image,
            },
          ],
        },
        {
          model: User,
          attributes: ["id", "nickname"],
        },
        {
          model: Image,
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
            },
          ],
        },
        {
          model: User, // 좋아요 누른 사람
          as: "Likers",
          attributes: ["id"],
        },
        {
          model: Post,
          as: "Retweet",
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
            },
            {
              model: Image,
            },
          ],
        },
      ],
    });
    res.status(201).json(fullPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/:postId/comment", isLoggedIn, async (req, res, next) => {
  // POST /post/1/comment
  try {
    //게시물 존재 여부
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });
    if (!post) {
      return res.status(403).send("존재하지 않는 게시글입니다.");
    }
    //댓글 작성
    const comment = await Comment.create({
      content: req.body.content,
      //params로 응답받을 때 string으로 바뀌기 때문에 변환 필요
      PostId: parseInt(req.params.postId, 10),
      UserId: req.user.id,
    });
    const fullComment = await Comment.findOne({
      where: { id: comment.id },
      include: [
        {
          model: User,
          attributes: ["id", "nickname"],
        },
      ],
    });

    res.status(201).json(fullComment);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/:postId/retweet", isLoggedIn, async (req, res, next) => {
  // POST /post/1/retweet
  try {
    //게시물 존재 여부
    const post = await Post.findOne({
      where: { id: req.params.postId },
      include: [
        {
          model: Post,
          as: "Retweet",
        },
      ],
    });
    if (!post) {
      return res.status(403).send("존재하지 않는 게시글입니다.");
    }

    if (
      req.user.id === post.UserId ||
      (post.Retweet && post.Retweet.UserId === req.user.id)
    ) {
      return res.status(403).send("자신의 글은 리트윗할 수 없습니다.");
    }

    const retweetTargetId = post.Retweet || post.id;
    const exPost = await Post.findOne({
      where: {
        UserId: req.user.id,
        RetweetId: retweetTargetId,
      },
    });
    if (exPost) {
      return res.status(403).send("이미 리트윗했습니다.");
    }
    const retweet = await Post.create({
      UserId: req.user.id,
      RetweetId: retweetTargetId,
      content: "retweet",
    });
    const retweetWithPrevPost = await Post.findOne({
      where: { id: retweet.id },
      include: [
        {
          model: Post,
          as: "Retweet",
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
            },
            {
              model: Image,
            },
          ],
        },
        {
          model: User,
          attributes: ["id", "nickname"],
        },
        {
          model: Image,
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
            },
          ],
        },
        {
          model: User, // 좋아요 누른 사람
          as: "Likers",
          attributes: ["id"],
        },
        {
          model: Post,
          as: "Retweet",
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
            },
            {
              model: Image,
            },
          ],
        },
      ],
    });
    res.status(201).json(retweetWithPrevPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.patch(
  "/:postId/like",
  isLoggedIn,
  upload.none(),
  async (req, res, next) => {
    // PATCH /post/1/like
    try {
      const post = await Post.findOne({ where: { id: req.params.postId } });
      if (!post) {
        return res.status(403).send("게시글이 존재하지 않습니다.");
      }
      // 자동 생성된 시퀄라이저 관계 메서드 작성
      await post.addLikers(req.user.id);
      res.status(200).json({ PostId: post.id, UserId: req.user.id });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
);

router.delete("/:postId/like", isLoggedIn, async (req, res, next) => {
  // DELETE /post/1/like
  try {
    const post = await Post.findOne({ where: { id: req.params.postId } });
    if (!post) {
      return res.status(403).send("게시글이 존재하지 않습니다.");
    }
    // 자동 생성된 시퀄라이저 관계 메서드 작성
    await post.removeLikers(req.user.id);
    res.status(200).json({ PostId: post.id, UserId: req.user.id });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete("/:postId", isLoggedIn, async (req, res, next) => {
  //DELETE /post/10
  try {
    await Post.destroy({
      where: {
        id: req.params.postId,
        // 로그인은 하더라도 해당 게시글 작성자와 일치해야 삭제 가능함
        UserId: req.user.id,
      },
    });
    res.status(200).json({ PostId: parseInt(req.params.postId) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post(
  "/images",
  isLoggedIn,
  // multipart의 하위 요소의 input name 속성 값을 찾아 가져온다.
  // 하나의 input요소에서 단일 이미지가 올릴 경우 single, 복수의 경우 array를 쓰면 된다.
  // 중복된 name에서 여러개의 input 이미지 업로드가 있을경우 fields를 쓴다
  // 텍스트만 업로드할경우 none
  upload.array("image"),
  async (req, res, next) => {
    // upload 변수에 이미 이미지값이 할당된 후에 하위 코드 실행
    console.log(req.files);
    // res.json(req.files.map((v) => v.filename));
    res.json(
      req.files.map((v) => v.location.replace(/\/original\//, "/thumb/"))
    );
  }
);

module.exports = router;
