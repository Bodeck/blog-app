const config = require('./config');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const loadTestData = require('./testData');
const helmet = require('helmet');

const app = express();

// import routes
const postRoutes = require('./routes/post.routes');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', postRoutes);
app.use(helmet());

// connect to database
mongoose.connect(config.DB, { useNewUrlParser: true });
let db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to database');
  loadTestData();
});
db.on('error', (err) => console.log(`Error ${err}`));

app.listen(config.PORT, () => {
  console.log('Server is running at port:', config.PORT);
});