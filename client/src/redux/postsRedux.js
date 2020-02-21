import axios from 'axios';
import { API_URL } from '../config';
// action name creator
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* SELECTORS */
export const getPosts = ({ posts }) => posts.data;
export const getPostsCount = ({ posts }) => posts.data.length;
export const getRequest = ({ posts }) => posts.request;
export const getSinglePost = ({ posts }) => posts.singlePost;
export const getPages = ({ posts }) => Math.ceil(posts.amount / posts.postsPerPage);
export const getPresentPage = ({ posts }) => posts.presentPage;

/* ACTIONS */
export const LOAD_POSTS = createActionName('LOAD_POSTS');
export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const GET_POST = createActionName('GET_POST');
export const RESET_REQUEST = createActionName('RESET_REQUEST');
export const LOAD_POSTS_PAGE = createActionName('LOAD_POSTS_PAGE');

export const loadPosts = payload => ({ payload, type: LOAD_POSTS });
export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });
export const getPost = post => ({ post, type: GET_POST });
export const resetRequest = () => ({ type: RESET_REQUEST });
export const loadPostsByPage = payload => ({ payload, type: LOAD_POSTS_PAGE });

/* INITIAL STATE */
const initialState = {
  data: [],
  request: {
    pending: false,
    error: null,
    success: null,
  },
  singlePost: {},
  amount: 0,
  presentPage: 1
};

/* REDUCERS */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_POSTS:
      return { ...statePart, data: action.payload };
    case START_REQUEST:
      return { ...statePart, request: { pending: true, error: null, success: null } };
    case END_REQUEST:
      return { ...statePart, request: { pending: false, error: null, success: true } };
    case ERROR_REQUEST:
      return { ...statePart, request: { pending: false, error: action.error, success: false } };
    case GET_POST:
      return { ...statePart, singlePost: action.post };
    case RESET_REQUEST:
      return { ...statePart, request: { pending: false, error: null, success: null } };
    case LOAD_POSTS_PAGE:
      return {
        ...statePart,
        postsPerPage: action.payload.postsPerPage,
        presentPage: action.payload.presentPage,
        amount: action.payload.amount,
        data: [...action.payload.posts],
      };
    default:
      return statePart;
  }
};

/* THUNKS */

export const loadPostsRequest = () => {
  return async dispatch => {

    dispatch(startRequest());
    try {

      let res = await axios.get(`${API_URL}/posts`);
      await new Promise((resolve, reject) => setTimeout(resolve, 2000));
      dispatch(loadPosts(res.data));
      dispatch(endRequest());

    } catch (error) {
      dispatch(errorRequest(error.message));
    }
  };
};

export const getPostRequest = (postId) => {
  return async dispatch => {

    dispatch(startRequest());
    try {

      let res = await axios.get(`${API_URL}/posts/${postId}`);
      dispatch(getPost(res.data));
      dispatch(endRequest());
    } catch (error) {

      dispatch(errorRequest(error.message));
    }
  };
};

export const addPostRequest = (post) => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      await axios.post(`${API_URL}/posts`, post);
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const loadPostsByPageRequest = (page, postsPerPage) => {
  return async dispatch => {
    dispatch(startRequest());

    try {
      const startAt = (page - 1) * postsPerPage;
      const limit = postsPerPage;

      let res = await axios.get(`${API_URL}/posts/range/${startAt}/${limit}`);

      const payload = {
        posts: res.data.posts,
        amount: res.data.amount,
        postsPerPage,
        presentPage: page,
      };
      dispatch(loadPostsByPage(payload));
      dispatch(endRequest());

    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  }
};

export const updatePostRequest = (post, postId) => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      await axios.put(`${API_URL}/posts/${postId}`, post)
    } catch (err) {
      dispatch(errorRequest(err.message));
    }
  }
}

export const deletePostByIdRequest = (postId) => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      await axios.delete(`${API_URL}/posts/${postId}`);
      dispatch(endRequest());
    } catch (err) {
      dispatch(errorRequest(err.message));
    }
  }
}