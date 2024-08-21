const express = require("express");
const Home = require("./Components/Home");
const SignUp = require("./Components/SignUp");
const SignIn = require("./Components/SignIn");
const Post = require("./Components/Post");

const app = express();

app.use(express.json())

app.use("/", Home);
app.use("/SignUp", SignUp);
app.use("/SignIn", SignIn);
app.use("/posts", Post);

app.listen(5000);