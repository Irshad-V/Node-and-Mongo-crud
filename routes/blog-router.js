const express = require("express");
const blogRouter = express.Router();
const { getAllBlogs, addBlogs, UpdateBlog, getByid ,DeltebyId} = require("../controllers/blog-controller")



blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlogs);
blogRouter.put("/update/:id", UpdateBlog);
blogRouter.get("/:id", getByid);
blogRouter.delete("/:id",DeltebyId)





module.exports = blogRouter;  