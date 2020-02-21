import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import { Link } from 'react-router-dom';
import { cutText } from '../../../utils/utils';

import './PostSummary.scss';

const PostSummary = ({ id, title, content, author }) => (
  <article className="post-summary">
    <SmallTitle>{title}</SmallTitle>
    <p>Author: {author}</p>
    <HtmlBox>{cutText(content, 250)}</HtmlBox>
    <Link to={'/posts/' + id} >
      <Button variant="primary">Read more</Button>
    </Link>
    <Link to={`/posts/${id}/edit`}>
      <Button variant="primary">Edit</Button>
    </Link>
  </article>
);

PostSummary.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.string,
};

export default PostSummary;
