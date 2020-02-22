import React from 'react';
import PostForm from '../../features/PostForm/PostFormContainer';
import PageTitle from '../../common/PageTitle/PageTitle';

const NewPostPage = () => (
  <div>
    <PageTitle>New post</PageTitle>
    <PostForm mode="add" />
  </div>
);

export default NewPostPage;