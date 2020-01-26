import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../../common/PageTitle/PageTitle';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import HtmlBox from '../../common/HtmlBox/HtmlBox';

class SinglePost extends Component {
  componentDidMount() {
    const { getPost, postId } = this.props;
    getPost(postId);
  }

  componentWillUnmount() {
    const { resetRequest } = this.props;
    resetRequest();
  }

  render() {
    const { post, request } = this.props;

    if (!request.pending && request.success) {
      return (
        <article>
          <PageTitle>{post.title}</PageTitle>
          <p>Author: {post.author}</p>
          <HtmlBox>{post.content}</HtmlBox>
        </article>
      )
    } else if (request.pending || request.success === null) {
      return <Spinner />
    } else if (!request.pending && request.error) {
      return (<Alert variant="error">{request.error}</Alert>)
    }
  }
}

SinglePost.propTypes = {
  post: PropTypes.shape(
    {
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }
  )
}

export default SinglePost;
