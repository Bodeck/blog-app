// get all posts
exports.getPosts = (req, res) => {
  const data = [
    { id: '1au3t9', title: 'Lorem ipsum', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' },
    { id: '8zl5y0', title: 'Lorem ipsum', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' }
  ];
  res.json(data);
}
