const config = require('./config');
const express = require('express');
const cors = require('cors');

const app = express();

// import routes
const postRoutes = require('./routes/post.routes');

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/api', postRoutes);

app.listen(config.PORT, () => {
  console.log('Server is running at port:', config.PORT);
});