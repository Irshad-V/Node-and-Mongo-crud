const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const BlogSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,

    },
    image: {
        type: String,
        required: true,

    },
    user: {
        type: String,
        required: true,

    }, 

})

module.exports = mongoose.model("blogs", BlogSchema)