const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/api/posts', (req, res) => {
  const data = [
    {id: '1au3t9', title: 'Lorem ipsum', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '},
    {id: '8zl5y0', title: 'Lorem ipsum', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '}
  ];
  res.json(data);
});

app.listen(8000, () => {
  console.log('Server is running at port:', 8000)
});