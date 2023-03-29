const CourseModel = require('../model/courseModel');
const upload = require('../middleware/multer')
const path = require('path');
const mongoose =require("mongoose")
// var id_1 = require("./mainTopicController").id_1



//fetch all courses
//get
//public
const fetchCourses = async (req, res) => {
    const allCourses = await CourseModel.find();

    if (!allCourses) { res.json({ message: 'courses not found' }); }

    res.send(allCourses);
}



//create course
//post
//private
const createCourse = async (req, res) => {

    // {
    //     "title": "title",
    //     "thumbnail": "thumbnail",
    //     "price": "price",
    //     "tutor_name": "tutor_name",
    //     "mainTopic_id": ["sud4","sub5","sub"],
    //     "is_featured": 1,
    //     "is_approved": 1
    // }

    //get data from request body
    const title = req.body.title;
    // const thumbnail = req.body.thumbnail;
    const price = req.body.price;
    const tutor_name = req.body.tutor_name;
    const mainTopic_id = req.body.mainTopic_id;
    const is_featured = req.body.is_featured;
    const is_approved = req.body.is_approved;

    //create record in db

    const course = await CourseModel.create({
        title: title,
        thumbnail: path.join(__dirname,req.file.path),
        // thumbnail: thumbnail,
        price: price,
        tutor_name: tutor_name,
        mainTopic_id: mainTopic_id,
        is_featured: is_featured,
        is_approved: is_approved
    })

    //respond with the new note
    res.send(course);
}


//update mainTopic_id after createing the mainTopic
//put
//private


// const updateMainTopic_id = (req, res, next) => {
//     const id = req.params.id
//     const mainTopic_id = id_1;
//     console.log(mainTopic_id)


//     if (mongoose.Types.ObjectId.isValid(id)) {
//         // Find the document by ID and update the array input field
//         CourseModel.findByIdAndUpdate(id, { $set: { mainTopic_id: mainTopic_id } }, { new: true })
//             .then((data) => {
//                 if (!data) {
//                     return res.status(404).json({ message: `Data with ID ${id} not found.` });
//                 }

//                 res.json(data);
//             })
//             .catch((err) => {
//                 console.error(err);
//                 res.status(500).json({ message: 'Failed to update mainTopic_id.' });
//             });
//     } else { return res.status(404).send('No client with that id') }
// }


module.exports = {
    fetchCourses: fetchCourses,
    createCourse: createCourse,
    // updateMainTopic_id: updateMainTopic_id
}