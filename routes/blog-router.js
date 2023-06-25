const express = require("express");
const blogRouter = express.Router();



blogRouter.get("/blog");
blogRouter.post("/add");



module.exports = blogRouter; 