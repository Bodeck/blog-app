import React from 'react';
import { connect } from 'react-redux';
import { getRequest, addPostRequest, resetRequest, updatePostRequest, getSinglePost, getPostRequest } from '../../../redux/postsRedux';
import PostForm from './PostForm';

export const PostForContainer = ({mode, postId}) => (
  <PostForm mode={mode} postId={postId} />
);

const mapStateToProps = state => ({
  request: getRequest(state),
  post: getSinglePost(state),
});

const mapDispatchToProps = dispatch => ({
  addPost: (post) => dispatch(addPostRequest(post)),
  resetRequest: () => dispatch(resetRequest),
  updatePost: (post) => dispatch(updatePostRequest(post)),
  getPost: (postId) => dispatch(getPostRequest(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
