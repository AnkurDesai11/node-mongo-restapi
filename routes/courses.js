const ex = require("express");
const { route } = require("express/lib/application");
const Course = require("../models/course");

const router = ex.Router();

//routes for api

//get all courses
router.get("/courses", async (req, res) => {
    //console.log("in get all courses");
    try {
        const allCourses = await Course.find();
        res.json(allCourses);
    } catch (excep) {
        res.json(excep)
    }
    //res.json("/courses working")
});

//get course by id
router.get("/courses/:courseId", async (req, res) => {
    const courseId = req.params.courseId;
    try {
        const thisCourse = await Course.findById(courseId);
        res.json(thisCourse);
    } catch (excep) {
        res.json(excep)
    }
});

//create course
router.post("/course", async (req, res) => {
    try {
        const createdCourse = await Course.create(req.body);
        res.json(createdCourse);
    } catch (excep) {
        res.json(excep)
    }
});


//delete course
router.delete("/courses/:courseId", async (req, res) => {
    try {
        await Course.deleteOne({ _id: req.params.courseId });
        res.status(200).json({ message: "course deleted" });
    } catch (excep) {
        res.json(excep)
    }
});

//update course
router.put("/courses/:courseId", async (req, res) => {
    const courseId = req.params.courseId;
    try {
        const updatedCourse = await Course.updateOne({ _id: courseId }, req.body);
        res.json(updatedCourse);
    } catch (excep) {
        res.json(excep)
    }
});

//exporting the module
module.exports = router;