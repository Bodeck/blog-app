import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import TextField from '../../common/TextField/TextField';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import Button from '../../common/Button/Button';
import Editor from 'react-medium-editor';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';
import './PostForm.scss';

class PostForm extends React.Component {

  state = {
    post: {
      title: '',
      author: '',
      content: '',
    }
  }

  handleChange = (e) => {
    const { post } = this.state;
    this.setState({ post: { ...post, [e.target.name]: e.target.value } })
  }

  handleEditor = (text) => {
    const { post } = this.state;
    this.setState({ post: { ...post, content: text } });
  }

  render() {
    const { post } = this.state;
    const { handleChange, handleEditor } = this;

    return (
      <div>
        <TextField
          label="Title:"
          value={post.title}
          onChange={handleChange}
          name="title"
        />

        <TextField
          label="Author:"
          value={post.author}
          onChange={handleChange}
          name="author"
        />

        <SectionTitle>Edit post content</SectionTitle>
        <Editor
          className="content-editor"
          text={post.content}
          options={{ placeholder: false, toolbar: { buttons: ['bold', 'underline', 'italic', 'anchor', 'h2', 'h3', 'quote'] } }}
          onChange={handleEditor}
        />
        <Button variant="primary">Add post</Button>

      </div>
    );
  }
};

export default PostForm;