import React from 'react';
import PropTypes from 'prop-types';
import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Pagination from '../../common/Pagination/Pagination';

class Posts extends React.Component {

  state = {
    postsPerPage: this.props.postsPerPage || 10,
  }

  componentDidMount() {
    const { loadPostsByPage } = this.props;
    const { postsPerPage } = this.state;
    const initialPage = this.props.initialPage || 1;
    
    loadPostsByPage(initialPage, postsPerPage);
  }

  componentWillUnmount() {
    const { resetRequest } = this.props;
    resetRequest();
  }

  loadPostsPage = (page) => {
    const { loadPostsByPage } = this.props;
    const { postsPerPage } = this.state;
    loadPostsByPage(page, postsPerPage);
  }

  render() {
    const { posts, request, postsCount, pages, presentPage } = this.props;
    const { loadPostsPage } = this;
    const pagination = this.props.pagination | true;

    if (!request.pending && request.success && postsCount > 0) {
      return (
        <div className="posts">
          <PostsList posts={posts} />
          {
            pagination ? <Pagination pages={pages} onPageChange={loadPostsPage} initialPage={presentPage} /> : ''
          }
        </div>
      )
    } else if (request.pending || request.success === null) {
      return (
        <div>
          <Spinner />
        </div>
      )
    } else if (!request.pending && request.error) {
      return (<Alert variant="error">{request.error}</Alert>)
    } else if (!request.pending && request.succes && posts.length === 0) {
      return (<Alert variant="info">No posts</Alert>)
    }
  }
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ),
  request: PropTypes.object.isRequired,
  loadPostsByPage: PropTypes.func.isRequired,
  resetRequest: PropTypes.func,
  pages: PropTypes.number,
  presentPage: PropTypes.number,
  initialPage: PropTypes.number,
  postsPerPage: PropTypes.number,
  pagination: PropTypes.bool,
}

export default Posts;