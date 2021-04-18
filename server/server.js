const config = require("./config");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const loadTestData = require("./testData");
const helmet = require("helmet");
const path = require("path");

const app = express();

// import routes
const postRoutes = require("./routes/post.routes");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", postRoutes);
app.use(helmet());
app.use(express.static(path.join(__dirname, "/../client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../client/build/index.html"));
});

// connect to database
mongoose
  .connect(config.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
    loadTestData();
  })
  .catch((err) => console.log(`Error ${err}`));

app.listen(config.PORT, () => {
  console.log("Server is running at port:", config.PORT);
});
