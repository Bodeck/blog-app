import React from 'react';
import Posts from '../../features/Posts/PostsContainer';
import PageTitle from '../../common/PageTitle/PageTitle';

const HomePage = () => (
  <div>
    <PageTitle>Newest Posts</PageTitle>
    <Posts pagination={false} postsPerPage={3} />
  </div>
);

export default HomePage;