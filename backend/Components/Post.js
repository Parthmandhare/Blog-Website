const { Router } = require("express");

const route = Router();

route.get("/", (req, res) => {
    res.send("All Post")
})

route.get("/:id", (req, res) => {
    res.send("Particular Post")
})

route.post("/", (req, res) => {
    res.send("Create Post")
})

route.put("/:id", (req, res) => {
    res.send("Update Post")
})

route.delete("/:id", (req, res) => {
    res.send("Delete Post")
})

module.exports = route;