import React from 'react';
import PostForm from '../../features/PostForm/PostFormContainer';
import PageTitle from '../../common/PageTitle/PageTitle';

const EditPostPage = ({ match }) => (
  <div>
    <PageTitle>Edit Post</PageTitle>
    <PostForm mode={"edit"} postId={match.params.id} />
  </div>
);

export default EditPostPage;