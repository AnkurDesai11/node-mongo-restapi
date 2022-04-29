const mongoose = require("mongoose");

// similar to DAO
const Course = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    videos: { type: Number, required: true },
    active: { type: Boolean },
});

module.exports = mongoose.model("courses", Course);