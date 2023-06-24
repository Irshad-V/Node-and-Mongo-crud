const express = require("express");
const { mongoose } = require("mongoose");
const router = require("./routes/user-route")
const app = express();

app.use("/api/user",router);
const db = "mongodb+srv://irshadvtl272:oXEIy2NvpveMPMhx@cluster0.f32dfab.mongodb.net/?retryWrites=true&w=majority"


try {
    mongoose.connect(db)
    console.log("connected");
} catch (err) {
    console.log("log error");
}

app.listen(5000, () => {
    console.log("server is activated http://localhost:5000/");
})
  