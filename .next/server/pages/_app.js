module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "E:\\happy-sonday_react\\node-sns\\pages\\_app.js";
//NOTE: 공통으로 적용되는 설정 작성




 //NOTE: props 자리인데 구조분해로 Component를 가져옴 props.Component




const App = ({
  Component
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("meata", {
        charSet: "UTF-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("title", {
        children: "node-sns"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Component, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

App.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__["default"].withRedux(App));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // const changeNickname = {
//   type: "CHANGE_NICKNAME",
//   data: "wooseop",
// };
//같은 액션 데이터만 동적으로 바꾸는 함수 , action creator
// const changeNickname = (data) => {
//   return {
//     type: "CHANGE_NICKNAME",
//     data,
//   };
// };
//NOTE:(이전상태, 액션) => return 다음상태

const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_3__["combineReducers"])({
  //SSR 및 HYDRATE를 위해서 추가
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
        console.log("HYDRATE", action);
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["default"],
  post: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, generateDummyPost, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDummyPost", function() { return generateDummyPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);



const initialState = {
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
  addCommentError: null
};
const generateDummyPost = number => Array(number).fill().map((v, i) => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
  User: {
    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
    nickname: faker__WEBPACK_IMPORTED_MODULE_1___default.a.name.findName()
  },
  content: faker__WEBPACK_IMPORTED_MODULE_1___default.a.lorem.paragraph(),
  Images: [{
    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
    src: faker__WEBPACK_IMPORTED_MODULE_1___default.a.image.image()
  }],
  Comments: [{
    User: {
      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
      nickname: faker__WEBPACK_IMPORTED_MODULE_1___default.a.name.findName()
    },
    content: faker__WEBPACK_IMPORTED_MODULE_1___default.a.lorem.sentence()
  }]
})); // initialState.mainPosts = initialState.mainPosts.concat(
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

const LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
const LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";
const ADD_POST_REQUEST = "ADD_POST_REQUEST";
const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
const ADD_POST_FAILURE = "ADD_POST_FAILURE";
const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";
const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";
const addPost = data => ({
  type: ADD_POST_REQUEST,
  data
});
const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data
}); // const dummyComment = (data) => ({
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
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
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
        const post = draft.mainPosts.find(v => v.id === action.data.PostId); //Comment.create()안에 객체의 key명으로 가져온다
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
        draft.mainPosts = state.mainPosts.filter(v => v.id !== action.data);
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

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  loadUserLoading: false,
  loadUserDone: false,
  loadUserError: null,
  logInLoading: false,
  logInDone: false,
  logInError: null,
  followLoading: false,
  followDone: false,
  followError: null,
  unfollowLoading: false,
  unfollowDone: false,
  unfollowError: null,
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: null,
  self: null,
  signUpData: {},
  loginData: {}
};
const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";
const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
const CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
const CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
const CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";
const FOLLOW_REQUEST = "FOLLOW_REQUEST";
const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
const FOLLOW_FAILURE = "FOLLOW_FAILURE";
const UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
const UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE";
const ADD_POST_TO_ME = "ADD_POST_TO_ME";
const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";

const dummyUser = data => _objectSpread(_objectSpread({}, data), {}, {
  nickname: "손데이",
  id: 1,
  Posts: [{
    id: 1
  }],
  Followings: [{
    nickname: "해피"
  }, {
    nickname: "손샤인"
  }],
  Followers: [{
    nickname: "해피"
  }, {
    nickname: "손샤인"
  }]
});

const loginRequestAction = data => {
  return {
    type: LOG_IN_REQUEST,
    data
  };
};
const logoutRequestAction = () => {
  return {
    type: LOG_OUT_REQUEST
  };
};

const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case LOAD_USER_REQUEST:
        draft.loadUserLoading = true;
        draft.loadUserError = null;
        draft.loadUserDone = false;
        break;

      case LOAD_USER_SUCCESS:
        draft.loadUserLoading = false;
        draft.loadUserDone = true;
        draft.self = action.data;
        break;

      case LOAD_USER_FAILURE:
        draft.loadLoading = false;
        draft.loadError = action.error;
        break;

      case FOLLOW_REQUEST:
        draft.followLoading = true;
        draft.followError = null;
        draft.followDone = false;
        break;

      case FOLLOW_SUCCESS:
        draft.followLoading = false;
        draft.followDone = true;
        draft.self.Followings.push({
          id: action.data
        });
        break;

      case FOLLOW_FAILURE:
        draft.followLoading = false;
        draft.followError = action.error;
        break;

      case UNFOLLOW_REQUEST:
        draft.unfollowLoading = true;
        draft.unfollowError = null;
        draft.unfollowDone = false;
        break;

      case UNFOLLOW_SUCCESS:
        draft.unfollowLoading = false;
        draft.unfollowDone = true;
        draft.self.Followings = draft.self.Followings.filter(v => v.id !== action.data);
        break;

      case UNFOLLOW_FAILURE:
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
        break;

      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInError = null;
        draft.logInDone = false;
        break;

      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.self = action.data;
        break;

      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;

      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;

      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.self = null;
        break;

      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;

      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;

      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;

      case CHANGE_NICKNAME_SUCCESS:
        draft.hangeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;

      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = true;
        draft.changeNicknameDone = false;
        draft.changeNicknameError = null;
        break;

      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;

      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;

      case ADD_POST_TO_ME:
        draft.self.Posts.unshift({
          id: action.data
        });
        break;
      // return {
      //   ...state,
      //   self: {
      //     ...state.self,
      //     Posts: [{ id: action.data }, ...state.self.Posts],
      //   },
      // };

      case REMOVE_POST_OF_ME:
        draft.self.Posts = draft.self.Posts.filter(v => v.id !== action.data);
        break;
      // return {
      //   ...state,
      //   self: {
      //     ...state.self,
      //     Posts: state.self.Posts.filter((v) => v.id !== action.data),
      //   },
      // };

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./sagas/user.js");




axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = "http://localhost:3065"; //NOTE: 요청 API에 요청자의 쿠키를 전달 설정

axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_3__["default"])]);
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");






function loadPostsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/post", data);
}

function* loadPosts(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000); // const result = yield call(addPostAPI);

    const id = shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate();
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_SUCCESS"],
      data: Object(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["generateDummyPost"])(10)
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_FAILURE"],
      data: err.response.data
    });
  }
}

function addPostAPI(data) {
  //back에서 req.body.content
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/post", {
    content: data
  }, {
    withCredentials: true
  });
}

function* addPost(action) {
  try {
    //yield delay(1000);
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addPostAPI, action.data); //const id = shortid.generate();

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_SUCCESS"],
      // data: {
      //   id,
      //   content: action.data,
      // },
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_TO_ME"],
      //data: id,
      data: result.data.id
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete("/api/post", data, {
    withCredentials: true
  });
}

function* removePost(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000); // const result = yield call(addPostAPI);
    //const id = shortid.generate();

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_SUCCESS"],
      data: action.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/post/${data.postId}/comment`, data, {
    withCredentials: true
  });
}

function* addComment(action) {
  try {
    //yield delay(1000);
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_SUCCESS"],
      // data: {
      //   content: action.data,
      // },
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_FAILURE"],
      data: err.response.data
    });
  }
}

function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(2000, _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_REQUEST"], loadPosts);
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"], addPost);
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_REQUEST"], removePost);
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"], addComment);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");




function loadUserAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/user");
}

function* loadUser(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadUserAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_SUCCESS"],
      data: result.data
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_FAILURE"],
      error: error.response.data
    });
  }
}

function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/user/login", data);
}

function* logIn(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logInAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: result.data
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: error.response.data
    });
  }
}

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/user/logout");
}

function* logOut(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logOutAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }
}

function signUpAPI(data) {
  console.log("회원가입 서버요청");
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/user", data);
}

function* signUp(action) {
  try {
    //yield delay(1000);
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(signUpAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}

function followAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/follow");
}

function* follow(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000); // const result = yield call(logOutAPI);

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function unfollowAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/unfollow");
}

function* unfollow(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000); // const result = yield call(logOutAPI);

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchLoadUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_REQUEST"], loadUser);
}

function* watchLogIn() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
}

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);
}

function* watchUnfollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unfollow);
}

function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnfollow)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/index */ "./reducers/index.js");





 // const loggerMiddleware =
//   ({ dispatch, getState }) =>
//   (next) =>
//   (action) => {
//     console.log(action);
//     return next(action);
//   };

const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
  const middleware = [sagaMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middleware));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_5__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_4__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmFrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNob3J0aWRcIiJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Iiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJpbmRleCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsInVzZXIiLCJwb3N0IiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaW1hZ2VQYXRocyIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJnZW5lcmF0ZUR1bW15UG9zdCIsIm51bWJlciIsIkFycmF5IiwiZmlsbCIsIm1hcCIsInYiLCJpIiwiaWQiLCJzaG9ydGlkIiwiZ2VuZXJhdGUiLCJVc2VyIiwibmlja25hbWUiLCJmYWtlciIsIm5hbWUiLCJmaW5kTmFtZSIsImNvbnRlbnQiLCJsb3JlbSIsInBhcmFncmFwaCIsIkltYWdlcyIsInNyYyIsImltYWdlIiwiQ29tbWVudHMiLCJzZW50ZW5jZSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImFkZFBvc3QiLCJkYXRhIiwiYWRkQ29tbWVudCIsInJlZHVjZXIiLCJwcm9kdWNlIiwiZHJhZnQiLCJjb25jYXQiLCJsZW5ndGgiLCJlcnJvciIsInVuc2hpZnQiLCJmaW5kIiwiUG9zdElkIiwiZmlsdGVyIiwibG9hZFVzZXJMb2FkaW5nIiwibG9hZFVzZXJEb25lIiwibG9hZFVzZXJFcnJvciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwidW5mb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsInNlbGYiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJMT0FEX1VTRVJfU1VDQ0VTUyIsIkxPQURfVVNFUl9GQUlMVVJFIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImR1bW15VXNlciIsIlBvc3RzIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJsb2FkTG9hZGluZyIsImxvYWRFcnJvciIsInB1c2giLCJoYW5nZU5pY2tuYW1lTG9hZGluZyIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwid2l0aENyZWRlbnRpYWxzIiwicm9vdFNhZ2EiLCJhbGwiLCJmb3JrIiwicG9zdFNhZ2EiLCJ1c2VyU2FnYSIsImxvYWRQb3N0c0FQSSIsImdldCIsImxvYWRQb3N0cyIsImRlbGF5IiwicHV0IiwiZXJyIiwicmVzcG9uc2UiLCJhZGRQb3N0QVBJIiwicmVzdWx0IiwiY2FsbCIsInJlbW92ZVBvc3RBUEkiLCJkZWxldGUiLCJyZW1vdmVQb3N0IiwiYWRkQ29tbWVudEFQSSIsInBvc3RJZCIsIndhdGNoTG9hZFBvc3RzIiwidGhyb3R0bGUiLCJ3YXRjaEFkZFBvc3QiLCJ0YWtlTGF0ZXN0Iiwid2F0Y2hSZW1vdmVQb3N0Iiwid2F0Y2hBZGRDb21tZW50IiwibG9hZFVzZXJBUEkiLCJsb2FkVXNlciIsImxvZ0luQVBJIiwibG9nSW4iLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJzaWduVXBBUEkiLCJzaWduVXAiLCJmb2xsb3dBUEkiLCJmb2xsb3ciLCJ1bmZvbGxvd0FQSSIsInVuZm9sbG93Iiwid2F0Y2hMb2FkVXNlciIsIndhdGNoTG9nSW4iLCJ3YXRjaEZvbGxvdyIsIndhdGNoVW5mb2xsb3ciLCJ3YXRjaExvZ091dCIsIndhdGNoU2lnblVwIiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwic2FnYVRhc2siLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVB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Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxvQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy9OT1RFOiDqs7XthrXsnLzroZwg7KCB7Jqp65CY64qUIOyEpOyglSDsnpHshLFcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBcImFudGQvZGlzdC9hbnRkLmNzc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi9zdG9yZS9jb25maWd1cmVTdG9yZVwiO1xyXG5cclxuLy9OT1RFOiBwcm9wcyDsnpDrpqzsnbjrjbAg6rWs7KGw67aE7ZW066GcIENvbXBvbmVudOulvCDqsIDsoLjsmLQgcHJvcHMuQ29tcG9uZW50XHJcbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZWF0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxyXG4gICAgICAgIDx0aXRsZT5ub2RlLXNuczwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPENvbXBvbmVudCAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbkFwcC5wcm9wVHlwZXMgPSB7XHJcbiAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEFwcCk7XHJcbiIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB1c2VyIGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcbmltcG9ydCBwb3N0IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5cclxuLy8gY29uc3QgY2hhbmdlTmlja25hbWUgPSB7XHJcbi8vICAgdHlwZTogXCJDSEFOR0VfTklDS05BTUVcIixcclxuLy8gICBkYXRhOiBcIndvb3Nlb3BcIixcclxuLy8gfTtcclxuXHJcbi8v6rCZ7J2AIOyVoeyFmCDrjbDsnbTthLDrp4wg64+Z7KCB7Jy866GcIOuwlOq+uOuKlCDtlajsiJggLCBhY3Rpb24gY3JlYXRvclxyXG4vLyBjb25zdCBjaGFuZ2VOaWNrbmFtZSA9IChkYXRhKSA9PiB7XHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHR5cGU6IFwiQ0hBTkdFX05JQ0tOQU1FXCIsXHJcbi8vICAgICBkYXRhLFxyXG4vLyAgIH07XHJcbi8vIH07XHJcblxyXG4vL05PVEU6KOydtOyghOyDge2DnCwg7JWh7IWYKSA9PiByZXR1cm4g64uk7J2M7IOB7YOcXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAvL1NTUiDrsI8gSFlEUkFUReulvCDsnITtlbTshJwg7LaU6rCAXHJcbiAgaW5kZXg6IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSFlEUkFURVwiLCBhY3Rpb24pO1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgfSxcclxuICB1c2VyLFxyXG4gIHBvc3QsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xyXG5cclxuaW1wb3J0IGZha2VyIGZyb20gXCJmYWtlclwiO1xyXG5pbXBvcnQgc2hvcnRpZCBmcm9tIFwic2hvcnRpZFwiO1xyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW10sXHJcbiAgaW1hZ2VQYXRoczogW10sXHJcbiAgaGFzTW9yZVBvc3RzOiB0cnVlLFxyXG4gIGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG4gIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlRHVtbXlQb3N0ID0gKG51bWJlcikgPT5cclxuICBBcnJheShudW1iZXIpXHJcbiAgICAuZmlsbCgpXHJcbiAgICAubWFwKCh2LCBpKSA9PiAoe1xyXG4gICAgICBpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxyXG5cclxuICAgICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICAgICAgfSxcclxuICAgICAgY29udGVudDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcblxyXG4gICAgICBJbWFnZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIENvbW1lbnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0pKTtcclxuXHJcbi8vIGluaXRpYWxTdGF0ZS5tYWluUG9zdHMgPSBpbml0aWFsU3RhdGUubWFpblBvc3RzLmNvbmNhdChcclxuLy8gICBBcnJheSg0MClcclxuLy8gICAgIC5maWxsKClcclxuLy8gICAgIC5tYXAoKHYsIGkpID0+ICh7XHJcbi8vICAgICAgIGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcblxyXG4vLyAgICAgICBVc2VyOiB7XHJcbi8vICAgICAgICAgaWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcclxuLy8gICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuXHJcbi8vICAgICAgIEltYWdlczogW1xyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgIGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcbi8vICAgICAgICAgICBzcmM6IGZha2VyLmltYWdlLmltYWdlKCksXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgXSxcclxuLy8gICAgICAgQ29tbWVudHM6IFtcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICBVc2VyOiB7XHJcbi8vICAgICAgICAgICAgIGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcbi8vICAgICAgICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbi8vICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgY29udGVudDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICBdLFxyXG4vLyAgICAgfSkpXHJcbi8vICk7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gXCJMT0FEX1BPU1RTX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9IFwiTE9BRF9QT1NUU19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfUE9TVFNfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSBcIkFERF9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSBcIkFERF9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSBcIkFERF9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gXCJSRU1PVkVfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gXCJSRU1PVkVfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gXCJSRU1PVkVfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9IFwiQUREX0NPTU1FTlRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9IFwiQUREX0NPTU1FTlRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9IFwiQUREX0NPTU1FTlRfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG4vLyBjb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuLy8gICBpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxyXG4vLyAgIGNvbnRlbnQ6IGRhdGEsXHJcbi8vICAgVXNlcjoge1xyXG4vLyAgICAgaWQ6IDEsXHJcbi8vICAgICBuaWNrbmFtZTogXCLshpDrjbDsnbRcIixcclxuLy8gICB9LFxyXG4vLyB9KTtcclxuXHJcbi8vTk9URTogcmVkdWNlcuydtOyghCDsg4Htg5zrpbzslaHshakg7Ya17ZW0IOuLpOydjCDsg4Htg5zroZwg66eM65Ok7Ja064K064qUIO2VqOyImCAo67aI67OA7ISx7J2EIOyngO2CpOuptOyEnClcclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgLy9pbW1lciDquLDrs7gg6ry0XHJcbiAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGFjdGlvbi5kYXRhLmNvbmNhdChkcmFmdC5tYWluUG9zdHMpO1xyXG4gICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGggPCA1MDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAvL2RyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGR1bW15UG9zdChhY3Rpb24uZGF0YSkpO1xyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzpcclxuICAgICAgICAvLyBjb25zdCBwb3N0SW5kZXggPSBzdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KFxyXG4gICAgICAgIC8vICAgKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZFxyXG4gICAgICAgIC8vICk7XHJcbiAgICAgICAgLy8gY29uc3QgcG9zdCA9IHsgLi4uc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF0gfTtcclxuICAgICAgICAvLyBwb3N0LkNvbW1lbnRzID0gW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSwgLi4ucG9zdC5Db21tZW50c107XHJcbiAgICAgICAgLy8gLy9jb25zdCBDb21tZW50cyA9IFtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCksIC4uLnBvc3QuQ29tbWVudHNdO1xyXG4gICAgICAgIC8vIGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdO1xyXG4gICAgICAgIC8vIG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDtcclxuICAgICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAgIC8vICAgLi4uc3RhdGUsXHJcbiAgICAgICAgLy8gICBtYWluUG9zdHMsXHJcbiAgICAgICAgLy8gICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgLy8gICBhZGRDb21tZW50RG9uZTogdHJ1ZSxcclxuICAgICAgICAvLyB9O1xyXG5cclxuICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7IC8vQ29tbWVudC5jcmVhdGUoKeyViOyXkCDqsJ3ssrTsnZgga2V566qF7Jy866GcIOqwgOyguOyYqOuLpFxyXG4gICAgICAgIC8vcG9zdC5Db21tZW50cy51bnNoaWZ0KGR1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSk7XHJcbiAgICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG5cclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gc3RhdGUubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9hZFVzZXJMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkVXNlckRvbmU6IGZhbHNlLFxyXG4gIGxvYWRVc2VyRXJyb3I6IG51bGwsXHJcbiAgbG9nSW5Mb2FkaW5nOiBmYWxzZSxcclxuICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gIGxvZ0luRXJyb3I6IG51bGwsXHJcbiAgZm9sbG93TG9hZGluZzogZmFsc2UsXHJcbiAgZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgZm9sbG93RXJyb3I6IG51bGwsXHJcbiAgdW5mb2xsb3dMb2FkaW5nOiBmYWxzZSxcclxuICB1bmZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gIHVuZm9sbG93RXJyb3I6IG51bGwsXHJcbiAgbG9nT3V0TG9hZGluZzogZmFsc2UsXHJcbiAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgbG9nT3V0RXJyb3I6IG51bGwsXHJcbiAgc2lnblVwTG9hZGluZzogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICBzaWduVXBEb25lOiBmYWxzZSxcclxuICBzaWduVXBFcnJvcjogbnVsbCxcclxuICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLFxyXG4gIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXHJcbiAgY2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcclxuICBzZWxmOiBudWxsLFxyXG4gIHNpZ25VcERhdGE6IHt9LFxyXG4gIGxvZ2luRGF0YToge30sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1JFUVVFU1QgPSBcIkxPQURfVVNFUl9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfU1VDQ0VTUyA9IFwiTE9BRF9VU0VSX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9GQUlMVVJFID0gXCJMT0FEX1VTRVJfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gXCJMT0dfSU5fUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSBcIkxPR19JTl9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9IFwiTE9HX0lOX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSBcIkxPR19PVVRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gXCJMT0dfT1VUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9IFwiTE9HX09VVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gXCJTSUdOX1VQX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9IFwiU0lHTl9VUF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSBcIlNJR05fVVBfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUID0gXCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSBcIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9IFwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9IFwiRk9MTE9XX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gXCJGT0xMT1dfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSBcIkZPTExPV19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9IFwiVU5GT0xMT1dfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9IFwiVU5GT0xMT1dfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9IFwiVU5GT0xMT1dfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gXCJBRERfUE9TVF9UT19NRVwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSBcIlJFTU9WRV9QT1NUX09GX01FXCI7XHJcblxyXG5jb25zdCBkdW1teVVzZXIgPSAoZGF0YSkgPT4gKHtcclxuICAuLi5kYXRhLFxyXG4gIG5pY2tuYW1lOiBcIuyGkOuNsOydtFwiLFxyXG4gIGlkOiAxLFxyXG4gIFBvc3RzOiBbeyBpZDogMSB9XSxcclxuICBGb2xsb3dpbmdzOiBbeyBuaWNrbmFtZTogXCLtlbTtlLxcIiB9LCB7IG5pY2tuYW1lOiBcIuyGkOyDpOyduFwiIH1dLFxyXG4gIEZvbGxvd2VyczogW3sgbmlja25hbWU6IFwi7ZW07ZS8XCIgfSwgeyBuaWNrbmFtZTogXCLshpDsg6TsnbhcIiB9XSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG4gIH07XHJcbn07XHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBMT0FEX1VTRVJfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfVVNFUl9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuc2VsZiA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfVVNFUl9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnNlbGYuRm9sbG93aW5ncy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnNlbGYuRm9sbG93aW5ncyA9IGRyYWZ0LnNlbGYuRm9sbG93aW5ncy5maWx0ZXIoXHJcbiAgICAgICAgICAodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGFcclxuICAgICAgICApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuc2VsZiA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5zZWxmID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmhhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgICBkcmFmdC5zZWxmLlBvc3RzLnVuc2hpZnQoeyBpZDogYWN0aW9uLmRhdGEgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgIC8vICAgLi4uc3RhdGUsXHJcbiAgICAgIC8vICAgc2VsZjoge1xyXG4gICAgICAvLyAgICAgLi4uc3RhdGUuc2VsZixcclxuICAgICAgLy8gICAgIFBvc3RzOiBbeyBpZDogYWN0aW9uLmRhdGEgfSwgLi4uc3RhdGUuc2VsZi5Qb3N0c10sXHJcbiAgICAgIC8vICAgfSxcclxuICAgICAgLy8gfTtcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgICBkcmFmdC5zZWxmLlBvc3RzID0gZHJhZnQuc2VsZi5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgLy8gICBzZWxmOiB7XHJcbiAgICAgIC8vICAgICAuLi5zdGF0ZS5zZWxmLFxyXG4gICAgICAvLyAgICAgUG9zdHM6IHN0YXRlLnNlbGYuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSksXHJcbiAgICAgIC8vICAgfSxcclxuICAgICAgLy8gfTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGFsbCwgZm9yayB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuaW1wb3J0IHBvc3RTYWdhIGZyb20gXCIuL3Bvc3RcIjtcclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gXCIuL3VzZXJcIjtcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzA2NVwiO1xyXG5cclxuLy9OT1RFOiDsmpTssq0gQVBJ7JeQIOyalOyyreyekOydmCDsv6DtgqTrpbwg7KCE64usIOyEpOyglVxyXG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbZm9yayhwb3N0U2FnYSksIGZvcmsodXNlclNhZ2EpXSk7XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge1xyXG4gIGFsbCxcclxuICBkZWxheSxcclxuICBmb3JrLFxyXG4gIHB1dCxcclxuICB0YWtlTGF0ZXN0LFxyXG4gIHRocm90dGxlLFxyXG4gIGNhbGwsXHJcbn0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgc2hvcnRpZCBmcm9tIFwic2hvcnRpZFwiO1xyXG5pbXBvcnQge1xyXG4gIEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gIEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgQUREX1BPU1RfUkVRVUVTVCxcclxuICBBRERfUE9TVF9TVUNDRVNTLFxyXG4gIGdlbmVyYXRlRHVtbXlQb3N0LFxyXG4gIExPQURfUE9TVFNfRkFJTFVSRSxcclxuICBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gIFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FLCBSRU1PVkVfUE9TVF9PRl9NRSB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdHNBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoXCIvYXBpL3Bvc3RcIiwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkUG9zdHMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJKTtcclxuICAgIGNvbnN0IGlkID0gc2hvcnRpZC5nZW5lcmF0ZSgpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBnZW5lcmF0ZUR1bW15UG9zdCgxMCksXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XHJcbiAgLy9iYWNr7JeQ7IScIHJlcS5ib2R5LmNvbnRlbnRcclxuICByZXR1cm4gYXhpb3MucG9zdChcclxuICAgIFwiL3Bvc3RcIixcclxuICAgIHsgY29udGVudDogZGF0YSB9LFxyXG4gICAge1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICB9XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8veWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIC8vY29uc3QgaWQgPSBzaG9ydGlkLmdlbmVyYXRlKCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAvLyBkYXRhOiB7XHJcbiAgICAgIC8vICAgaWQsXHJcbiAgICAgIC8vICAgY29udGVudDogYWN0aW9uLmRhdGEsXHJcbiAgICAgIC8vIH0sXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9UT19NRSxcclxuICAgICAgLy9kYXRhOiBpZCxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuaWQsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKFwiL2FwaS9wb3N0XCIsIGRhdGEsIHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJKTtcclxuICAgIC8vY29uc3QgaWQgPSBzaG9ydGlkLmdlbmVyYXRlKCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfT0ZfTUUsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnRgLCBkYXRhLCB7XHJcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAvL3lpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICAvLyBkYXRhOiB7XHJcbiAgICAgIC8vICAgY29udGVudDogYWN0aW9uLmRhdGEsXHJcbiAgICAgIC8vIH0sXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3RzKCkge1xyXG4gIHlpZWxkIHRocm90dGxlKDIwMDAsIExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayh3YXRjaExvYWRQb3N0cyksXHJcbiAgICBmb3JrKHdhdGNoQWRkUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoQWRkQ29tbWVudCksXHJcbiAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBhbGwsIGRlbGF5LCBmb3JrLCBwdXQsIHRha2VMYXRlc3QsIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCB7XHJcbiAgTE9BRF9VU0VSX0ZBSUxVUkUsXHJcbiAgTE9BRF9VU0VSX1JFUVVFU1QsXHJcbiAgTE9BRF9VU0VSX1NVQ0NFU1MsXHJcbiAgRk9MTE9XX0ZBSUxVUkUsXHJcbiAgRk9MTE9XX1JFUVVFU1QsXHJcbiAgRk9MTE9XX1NVQ0NFU1MsXHJcbiAgTE9HX0lOX0ZBSUxVUkUsXHJcbiAgTE9HX0lOX1JFUVVFU1QsXHJcbiAgTE9HX0lOX1NVQ0NFU1MsXHJcbiAgTE9HX09VVF9GQUlMVVJFLFxyXG4gIExPR19PVVRfUkVRVUVTVCxcclxuICBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgU0lHTl9VUF9GQUlMVVJFLFxyXG4gIFNJR05fVVBfUkVRVUVTVCxcclxuICBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgVU5GT0xMT1dfRkFJTFVSRSxcclxuICBVTkZPTExPV19SRVFVRVNULFxyXG4gIFVORk9MTE9XX1NVQ0NFU1MsXHJcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuXHJcbmZ1bmN0aW9uIGxvYWRVc2VyQVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoXCIvdXNlclwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRVc2VyKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRVc2VyQVBJLCBhY3Rpb24uZGF0YSk7XHJcblxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9VU0VSX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfVVNFUl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyb3IucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvdXNlci9sb2dpblwiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7XHJcblxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyb3IucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBsb2dPdXRBUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvdXNlci9sb2dvdXRcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dPdXQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nT3V0QVBJKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKSB7XHJcbiAgY29uc29sZS5sb2coXCLtmozsm5DqsIDsnoUg7ISc67KE7JqU7LKtXCIpO1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3VzZXJcIiwgZGF0YSk7XHJcbn1cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy95aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSk7XHJcblxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBmb2xsb3dBUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL2ZvbGxvd1wiKTtcclxufVxyXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nT3V0QVBJKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEZPTExPV19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiB1bmZvbGxvd0FQSSgpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvdW5mb2xsb3dcIik7XHJcbn1cclxuZnVuY3Rpb24qIHVuZm9sbG93KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nT3V0QVBJKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2VyKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9VU0VSX1JFUVVFU1QsIGxvYWRVc2VyKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbik7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoRm9sbG93KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoVW5mb2xsb3coKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkZPTExPV19SRVFVRVNULCB1bmZvbGxvdyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHdhdGNoTG9hZFVzZXIpLFxyXG4gICAgZm9yayh3YXRjaExvZ0luKSxcclxuICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxyXG4gICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICAgIGZvcmsod2F0Y2hVbmZvbGxvdyksXHJcbiAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gXCIuLi9zYWdhc1wiO1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiLi4vcmVkdWNlcnMvaW5kZXhcIjtcclxuLy8gY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9XHJcbi8vICAgKHsgZGlzcGF0Y2gsIGdldFN0YXRlIH0pID0+XHJcbi8vICAgKG5leHQpID0+XHJcbi8vICAgKGFjdGlvbikgPT4ge1xyXG4vLyAgICAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuLy8gICAgIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbi8vICAgfTtcclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gIGNvbnN0IG1pZGRsZXdhcmUgPSBbc2FnYU1pZGRsZXdhcmVdO1xyXG4gIGNvbnN0IGVuaGFuY2VyID1cclxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxyXG4gICAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpKVxyXG4gICAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpKTtcclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcclxuICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIixcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYWtlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9ydGlkXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=