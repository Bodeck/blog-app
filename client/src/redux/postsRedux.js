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

/* ACTIONS */
export const LOAD_POSTS = createActionName('LOAD_POSTS');
export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const GET_POST = createActionName('GET_POST');

export const loadPosts = payload => ({ payload, type: LOAD_POSTS });
export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });
export const getPost = post => ({ post, type: GET_POST });

/* INITIAL STATE */
const initialState = {
  data: [],
  request: {
    pending: false,
    error: null,
    success: null,
  },
  singlePost: {},
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
      return { ...statePart, request: { pending: false, error: action.error, success: false } }
    case GET_POST:
      return { ...statePart, singlePost: action.post }
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
      console.log(error.message);
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
      let res = await axios.post(`${API_URL}/posts`, post);
      await new Promise((resolve, reject) => setTimeout(resolve, 2000));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};
