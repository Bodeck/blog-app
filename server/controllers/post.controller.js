const uuid = require('uuid');

// get all posts
const Post = require('../models/post.model');

exports.getPosts = async (req, res) => {

  try {
    res.status(200).json(await Post.find());
  } catch (err) {
    res.status(500).json(err);
  }
}
// get single post by id
exports.getPostById = async (req, res) => {

  try {
    res.status(200).json(await Post.findOne({ id: req.params.id }));
  } catch (err) {
    res.status(500).json(err);
  }
}
// add new post
exports.addPost = async (req, res) => {

  try {
    const { title, author, content } = req.body;
    let newPost = new Post();
    newPost.title = title;
    newPost.author = author;
    newPost.content = content;
    newPost.id = uuid();

    postSaved = await newPost.save();
    res.status(200).json(postSaved);

  } catch (err) {
    res.status(500).json(err);
  }
}

// get post by range
exports.getPostsByRange = async (req, res) => {

  try {
    let { startAt, limit } = req.params;
    startAt = parseInt(startAt);
    limit = parseInt(limit);

    const posts = await Post.find().skip(startAt).limit(limit);
    const amount = await Post.countDocuments();

    res.status(200).json({
      posts,
      amount,
    });

  } catch (err) {
    res.status(500).json(err);
  }

};

// remove post by id
exports.deletePostById = async (req, res) => {

  try {
    const postId = req.params.id;
    res.status(200).json(await Post.findOneAndDelete({ id: postId }));

  } catch (err) {
    res.status(500).json(err);

  }
}

// update existing post
exports.updatePost = async (req, res) => {

  try {
    const postId = req.params.id;
    const { author, content, title } = req.body;
    const update = await Post.updateOne({ id: postId }, { title, author, content });

    res.status(200).json(update);

  } catch (err) {
    res.status(500).json(err)
  }
}