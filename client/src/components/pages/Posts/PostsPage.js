import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import PostsCounter from '../../features/PostsCounter/PostsCounter';
import PostsContainer from '../../features/Posts/PostsContainer';

const PostsPage = () => (
  <div>
    <PageTitle>Posts list</PageTitle>
    <PostsCounter />
    <PostsContainer />
  </div>
);

export default PostsPage;