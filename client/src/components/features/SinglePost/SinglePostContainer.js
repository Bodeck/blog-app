import React from 'react';
import { connect } from 'react-redux';
import { getPostRequest, getRequest, getSinglePost, resetRequest } from '../../../redux/postsRedux';
import SinglePost from './SinglePost';

export const SinglePostContainer = ({ postId }) => (
  <SinglePost postId={postId} />
)

const mapStateToProps = state => ({
  request: getRequest(state),
  post: getSinglePost(state),
});

const mapDispatchToProps = dispatch => ({
  getPost: (postId) => dispatch(getPostRequest(postId)),
  resetRequest: () => dispatch(resetRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePost);