const express = require("express");
const Home = require("./Components/Home");
const SignUp = require("./Components/SignUp");
const SignIn = require("./Components/SignIn");
const Post = require("./Components/Post");
const User = require("./Components/User");
const cors = require('cors');
const cookieParser = require("cookie-parser");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}))

app.use(express.json())

app.use(cookieParser())

app.use("/", Home);
app.use("/SignUp", SignUp);
app.use("/SignIn", SignIn);
app.use("/posts", Post);
app.use("/user", User);

app.listen(PORT);