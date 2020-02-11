import { connect } from 'react-redux';
import { getPosts, getRequest, loadPostsByPageRequest, getPostsCount, resetRequest, getPages, getPresentPage } from '../../../redux/postsRedux';
import Posts from './Posts';

const mapStateToProps = (state, ownProps) => ({
  posts: getPosts(state),
  request: getRequest(state),
  postsCount: getPostsCount(state),
  pages: getPages(state),
  presentPage: getPresentPage(state),
  postsPerPage: ownProps.postsPerPage,
  pagination: ownProps.pagination,
});

const mapDispatchToProps = dispatch => ({
  loadPostsByPage: (page, postsPerPage) => dispatch(loadPostsByPageRequest(page, postsPerPage)),
  resetRequest: () => dispatch(resetRequest()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);