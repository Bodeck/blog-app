const express = require('express');
const router = express.Router();

const PostController = require('../controllers/post.controller');

// get all posts
router.route('/posts').get(PostController.getPosts);

// get single post by id
router.route('/posts/:id').get(PostController.getPostById);

// add new post
router.route('/posts').post(PostController.addPost);

// get post by range
router.route('/posts/range/:startAt/:limit').get(PostController.getPostsByRange);

// delete single post by id
router.route('/posts/:id').delete(PostController.deletePostById);

// update post
router.route('/posts/:id').put(PostController.updatePost);

module.exports = router;
