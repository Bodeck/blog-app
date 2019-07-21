import React from 'react';
import PropTypes from 'prop-types';

class PostsCounter extends React.Component {

  render() {
    const { postsCount } = this.props;
    if (postsCount) {
      return (
        <div>Number of posts: {postsCount}</div>
      );
    }
    return (
      <div>There are no posts</div>
    )
  }
}

PostsCounter.propTypes = {
  postsCount: PropTypes.number.isRequired
}

export default PostsCounter;