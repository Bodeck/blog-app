import React from 'react';
import SinglePostContainer from '../../features/SinglePost/SinglePostContainer';
const SinglePostPage = ({match}) => (
  <SinglePostContainer postId={match.params.id}/>
);

export default SinglePostPage;