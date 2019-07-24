// get all posts
const Post = require('../models/post.model');

exports.getPosts = async (req, res) => {

  try {
    res.status(200).json(await Post.find());
  } catch (err) {
    res.status(500).json(err);
  }
}

exports.getPostById = async (req, res) => {
  
  try {
    res.status(200).json(await Post.find({ id: req.params.id }));
  } catch (err) {
    res.status(500).json(err);
  }
}
