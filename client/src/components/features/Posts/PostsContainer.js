import { connect } from 'react-redux';
import { getPosts, getRequest ,loadPostsRequest, getPostsCount } from '../../../redux/postsRedux';
import Posts from './Posts';

const mapStateToProps = state => ({
  posts: getPosts(state),
  request: getRequest(state),
  postsCount: getPostsCount(state),
});

const mapDispatchToProps = dispatch => ({
  loadPosts: () => dispatch(loadPostsRequest()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);