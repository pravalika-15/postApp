// app.js

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const connectDb = require("./config/db");

// authentication
// npm install passport-google-oauth20 passport
const passport = require("passport");

require("./config/passport");
connectDb();
const Post = require("./models/Post");

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Routes
app.get("/", (req, res) => {
  Post.find({}, (err, posts) => {
    if (err) {
      console.log(err);
    } else {
      res.render("index", { posts: posts });
    }
  });
});

app.get("/post/create/new", (req, res) => {
  res.render("create");
});

app.post("/post/create/new", (req, res) => {
  const { title, description } = req.body;
  const newPost = new Post({ title, description });
  newPost.save((err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  });
});

app.get("/post/delete/:id", (req, res) => {
  const postId = req.params.id;
  Post.findByIdAndDelete(postId, (error) => {
    if (error) {
      console.log(error);
    } else {
      res.redirect("/");
    }
  });
});

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"], // the details we wish to get from the user
  })
);

// after giving the consent, handling call back function
app.get("/auth/google/callback", passport.authenticate("google"));
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
