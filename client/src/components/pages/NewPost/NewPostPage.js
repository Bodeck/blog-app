import React from 'react';
import PostForm from '../../features/PostForm/PostForm';
import PageTitle from '../../common/PageTitle/PageTitle';

const NewPostPage = () => (
  <div>
    <PageTitle>New post</PageTitle>
    <PostForm />
  </div>
);

export default NewPostPage;