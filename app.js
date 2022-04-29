const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const coursesRouter = require("./routes/courses");
const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use("/api/v1", coursesRouter);
mongoose.connect(process.env.DB_CONNECTION_URL, () => {
    console.log("database connected");
})


//shifting these to the routes folder and then importing them using app.use
// app.get("/", (req, res) => {

// });

app.listen(port, () => {
    console.log("server is running on port", port);
});