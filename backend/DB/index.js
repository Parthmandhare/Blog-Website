const { default: mongoose, model } = require('mongoose');

require('dotenv').config()

const url =  process.env.DBURL;

mongoose.connect(url).then(() => {
    console.log("Connection success");
    
}).catch((e) => {
    console.log("Something went wrong!" + e);
    
})

const userSchema = new mongoose.Schema({
    UserName: String,
    Email: String,
    Password: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "posts"
    }]
});

const user = new model("User", userSchema);

const postsSchema = new mongoose.Schema({
    title: String,
    desc: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
});

const posts = new model("Posts", postsSchema);


module.exports = {user, posts};