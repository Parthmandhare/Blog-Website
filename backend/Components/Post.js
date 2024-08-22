const { Router } = require("express");
const isThere = require("../Middlewares/isThere");
const { user, posts } = require("../DB");

const route = Router();

route.get("/", async(req, res) => {
    await posts.find({}).then((doc) => {
        res.send(doc);
    }).catch((e) => {
        res.status(404).json({msg: "No Post available"})
    })
})

route.get("/:id", async(req, res) => {
    const postId = req.params.id;

    await posts.findOne({_id: postId}).then((doc) => {
        res.send(doc);
    }).catch((e) => {
        res.status(404).json({msg: "Post not found!"})
    })
})

route.post("/", isThere, async(req, res) => {
    
    const data = {
        title: req.body.title,
        desc: req.body.desc,
        user: req.UserID
    }

    await posts.create(data).then(async(doc) => {

        await user.findOneAndUpdate({UserName: req.UserName},  {$push: {posts: doc._id}}).then((doc) => {
            res.send("Create Post")
        }).catch((e) => {
            res.send("Something went wrong pls try again! " + e)
        })
    
    }).catch((e) => {
        res.send("Something went wrong pls try again!" + e)
    })

    
})

route.put("/:id", isThere, async(req, res) => {

    const postID = req.params.id;

    const data = {
        title: req.body.title,
        desc: req.body.desc,
    }

    await posts.findOneAndUpdate({_id: postID}, {$set: {title: data.title, desc: data.desc}}).then((doc) => {
        res.send("Post updated" + doc);
    }).catch((e) => {
        res.send("Something went wrong!")
    })
})

route.delete("/:id", isThere, async(req, res) => {
    const postID = req.params.id;
    await posts.deleteOne({_id: postID}).then(async() => {
        
        await user.findOneAndUpdate({UserName: req.UserName}, {$pull: {posts: postID} }).then((doc) => {
            res.send("Post deleted!") 
        }).catch((e) => {
            res.send("Fail1" + e)
        })
    
    }).catch((e) => {
        res.send("Fail" + e)
    })
})

module.exports = route;