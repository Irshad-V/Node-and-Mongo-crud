const express = require("express");
const { mongoose } = require("mongoose");
const router = require("./routes/user-route")
const blogRouter = require("./routes/blog-router")
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use("/api/user", router);
app.use("/api/blogs", blogRouter)
const db = "mongodb://127.0.0.1:27017/blog"

try {

    mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log("connected");
} catch (err) {
    console.log("log error");
}

app.listen(5000, () => {
    console.log("server is activated http://localhost:5000");
})


  