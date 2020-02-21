import React from 'react';
import { PropTypes } from 'prop-types';
// import components
import TextField from '../../common/TextField/TextField';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import Button from '../../common/Button/Button';
import Editor from 'react-medium-editor';
import Alert from '../../common/Alert/Alert';
import Spinner from '../../common/Spinner/Spinner';
// import styles
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
  
  componentDidMount() {
    const { resetRequest, mode, getPost, postId } = this.props;
    if (mode === "edit") {
      getPost(postId);
    } else {
      resetRequest();
    }
  }
  // componentWillReceiveProps() {
  //   const { post } = this.state;
  //   const { title, author, content } = this.props.post;
  //   this.setState({ post: { ...post, title, author, content } });
  // }

  handleChange = (e) => {
    const { post } = this.state;
    this.setState({ post: { ...post, [e.target.name]: e.target.value } })
  }

  handleEditor = (text) => {
    const { post } = this.state;
    this.setState({ post: { ...post, content: text } });
  }

  handleSubmit = (e) => {
    const { updatePost, addPost, mode } = this.props;
    const { post } = this.state;
    e.preventDefault();
    if (mode === "edit") {
      updatePost(post);
    } else {
      addPost(post);
    }
  }

  render() {
    const { post } = this.state;
    const { handleChange, handleEditor, handleSubmit } = this;
    const { request, mode } = this.props;

    if (request.error) return <Alert variant="error">{request.error}</Alert>
    else if (request.success && mode !== "edit") return <Alert variant="success">Post has been added successfully!</Alert>
    else if (request.pending) return <Spinner />
    else return (
      <form onSubmit={handleSubmit}>
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
        <Button variant="primary">{mode === "edit" ? "Update post" : "Add post"}</Button>

      </form>
    );
  }
};

PostForm.propTypes = {
  request: PropTypes.object.isRequired,
  addPost: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
  getPost: PropTypes.func,
  postId: PropTypes.string.isRequired,
  mode: PropTypes.string,
  post: PropTypes.object,
};

export default PostForm;