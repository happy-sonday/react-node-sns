import produce from "immer";

import faker from "faker";
import shortid from "shortid";
export const initialState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePosts: true,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
};

export const generateDummyPost = (number) =>
  Array(number)
    .fill()
    .map((v, i) => ({
      id: shortid.generate(),

      User: {
        id: shortid.generate(),
        nickname: faker.name.findName(),
      },
      content: faker.lorem.paragraph(),

      Images: [
        {
          id: shortid.generate(),
          src: faker.image.image(),
        },
      ],
      Comments: [
        {
          User: {
            id: shortid.generate(),
            nickname: faker.name.findName(),
          },
          content: faker.lorem.sentence(),
        },
      ],
    }));

// initialState.mainPosts = initialState.mainPosts.concat(
//   Array(40)
//     .fill()
//     .map((v, i) => ({
//       id: shortid.generate(),

//       User: {
//         id: shortid.generate(),
//         nickname: faker.name.findName(),
//       },
//       content: faker.lorem.paragraph(),

//       Images: [
//         {
//           id: shortid.generate(),
//           src: faker.image.image(),
//         },
//       ],
//       Comments: [
//         {
//           User: {
//             id: shortid.generate(),
//             nickname: faker.name.findName(),
//           },
//           content: faker.lorem.sentence(),
//         },
//       ],
//     }))
// );

export const LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
export const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
export const LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});
export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

// const dummyComment = (data) => ({
//   id: shortid.generate(),
//   content: data,
//   User: {
//     id: 1,
//     nickname: "손데이",
//   },
// });

//NOTE: reducer이전 상태를액셩 통해 다음 상태로 만들어내는 함수 (불변성을 지키면서)
const reducer = (state = initialState, action) => {
  //immer 기본 꼴
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = action.data.concat(draft.mainPosts);
        draft.hasMorePosts = draft.mainPosts.length < 50;
        break;
      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;

      case ADD_POST_SUCCESS:
        //draft.mainPosts.unshift(dummyPost(action.data));
        draft.mainPosts.unshift(action.data);
        draft.addPostLoading = false;
        draft.addPostDone = true;
        break;
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;
      case ADD_COMMENT_SUCCESS:
        // const postIndex = state.mainPosts.findIndex(
        //   (v) => v.id === action.data.postId
        // );
        // const post = { ...state.mainPosts[postIndex] };
        // post.Comments = [dummyComment(action.data.content), ...post.Comments];
        // //const Comments = [dummyComment(action.data.content), ...post.Comments];
        // const mainPosts = [...state.mainPosts];
        // mainPosts[postIndex] = post;
        // return {
        //   ...state,
        //   mainPosts,
        //   addCommentLoading: false,
        //   addCommentDone: true,
        // };

        const post = draft.mainPosts.find((v) => v.id === action.data.PostId); //Comment.create()안에 객체의 key명으로 가져온다
        //post.Comments.unshift(dummyComment(action.data.content));
        post.Comments.unshift(action.data);
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.removePostError = action.error;

      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;

      case REMOVE_POST_SUCCESS:
        draft.mainPosts = state.mainPosts.filter((v) => v.id !== action.data);
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;
      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;
      default:
        break;
    }
  });
};

export default reducer;
