const Blog = require("../model/Blog");


const getAllBlogs = async (req, res, next) => {
    let blogs;
    try {
        blogs = await Blog.find()
    } catch (err) {
        return console.log("blog not getting" + err)
    }
    if (!blogs) {

        return res.status(404).json({ message: "no blog found" });
    }
    return res.status(200).json(blogs);
}


const addBlogs = async (req, res, next) => {
    const { title, description, image, user } = req.body

    const blog = new Blog({
        title,
        description,
        image,
        user
    })
    try {
        await blog.save()
    } catch (err) {
        return console.log(err);
    }
    console.log(blog);
    return res.status(200).json({ blog })

}


// update bloges
const UpdateBlog = async (req, res, next) => {
    const UpdatID = req.params.id;

    const { title, description, image } = req.body
    let blog;
    try {

        blog = await Blog.updateOne(
            { _id: UpdatID },
            { $set: { title, description } }
        );



    } catch (err) {
        return console.log(err);
    }
    if (!blog) {
        return res.status(500).json({ message: "unable to update the blog" })

    }
    return res.status(200).json({ blog })
}


// get one document by id


const getByid = async (req, res, next) => {
    const getId = req.params.id;
    let blog;
    try {
        blog = await Blog.findOne({ _id: getId })
    } catch (err) {
        return console.log(err);
    }
    if (!blog) {
        return res.status(400).json({ message: "no document availabe with this id,correct the id " })
    }
    return res.status(200).json({ blog })
   
}

const DeltebyId = async (req, res, next) => {

    const dtId = req.params.id;
    let blog;
    try {
        blog = await Blog.deleteOne({ _id: dtId })
    } catch (err) {
        return console.log(err);
    }
    if (!blog) {
        return res.status(400).json({ message: "no document deleted with this id .  " })
    }
    console.log("document deletd ")
    return res.status(200).json({ blog })
}




module.exports = { getAllBlogs, addBlogs, UpdateBlog, getByid, DeltebyId } 