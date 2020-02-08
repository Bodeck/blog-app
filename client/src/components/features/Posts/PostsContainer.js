import { connect } from 'react-redux';
import { getPosts, getRequest ,loadPostsByPageRequest, getPostsCount, resetRequest, getPages, getPresentPage } from '../../../redux/postsRedux';
import Posts from './Posts';

const mapStateToProps = state => ({
  posts: getPosts(state),
  request: getRequest(state),
  postsCount: getPostsCount(state),
  pages: getPages(state),
  presentPage: getPresentPage(state),
});

const mapDispatchToProps = dispatch => ({
  loadPostsByPage : (page) => dispatch(loadPostsByPageRequest(page)),
  resetRequest: () => dispatch(resetRequest()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);