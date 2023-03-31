const SubTopicModel = require('../model/subTopicModel');
const MainTopicModel = require('../model/mainTopicModel')
const mongoose =require("mongoose")
var id_1;
var arrayOFsubtopic_id = [];
mongoose.set('debug', true);



// //fetch all sub topic with sub topic details'
// const fetchSubTopics = async (req, res) => {
//     const allSubTopic = await MainTopicModel.find().populate({ path: 'content_id', options: { strictPopulate: false } });
//     if (!allSubTopic) { res.json({ message: 'main topics not found' }); }

//     res.send(allSubTopic);
// }



// //create mainTopic of the course
// //post
// //private
// const createSubTopic = async (req, res, next) => {

//     const title = req.body.title;
//     const course_id = req.body.course_id;

//     const subTopic = await SubTopicModel.create({
//         title: title,
//         course_id: course_id
//     })

//     if(subTopic){
//          id_1 =  subTopic._id;
//          console.log(id_1)
//         // res.json(mainTopic);
//     }

//     // res.send(mainTopic);

   
//     next();
// }




// const fetchSubTopic_id = async (req, res, next) =>{

//     const id = req.params.id
    
//      data = await MainTopicModel.findById(id)
  
//     arrayOFsubtopic_id = [...data.subTopic_id,id_1]
    

//     next()
// }





// //update mainTopic_id after createing the mainTopic
// //put
// //private
// const updateSubTopic_id = (req, res, next) => {
//     const id = req.params.id
    
//     if (mongoose.Types.ObjectId.isValid(id)) {
//         // Find the document by ID and update the array input field
//         MainTopicModel.findByIdAndUpdate(id, { $set: { subTopic_id: arrayOFsubtopic_id } }, { new: true })
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








// module.exports = {
//   createSubTopic: createSubTopic,
//   updateSubTopic_id:updateSubTopic_id,
//     fetchSubTopic_id:fetchSubTopic_id,
//     fetchSubTopics:fetchSubTopics
// };




// const MainTopicModel = require('../model/mainTopicModel');
// const CourseModel = require('../model/courseModel')
// const mongoose =require("mongoose")
// var id_1;
// var arrayOFmaintopic_id = [];
// mongoose.set('debug', true);




//fetch all sub topic with sub topic details'
const fetchSubTopics = async (req, res) => {
    const allSubTopic = await MainTopicModel.find();
    if (!allSubTopic) { res.json({ message: 'main topics not found' }); }

    res.send(allSubTopic);
}


//create mainTopic of the course
//post
//private
const createSubTopic = async (req, res, next) => {

    const title = req.body.title;
    // const course_id = req.body.course_id;

    const subTopic = await SubTopicModel.create({
        title: title,
        // course_id: course_id
    })

    if(subTopic){
         id_1 =  subTopic._id;
         console.log(id_1)
        // res.json(mainTopic);
    }

    // res.send(mainTopic);

   
    next();
}




const fetchSubTopic_id = async (req, res, next) =>{

    const id = req.params.id
    
     data = await MainTopicModel.findById(id)
     console.log(data);
  
     arrayOFsubtopic_id = [...data.mainTopic_id,id_1]
    

    next()
}






//update mainTopic_id after createing the mainTopic
//put
//private
const updateSubTopic_id = (req, res, next) => {
    const id = req.params.id
    
    if (mongoose.Types.ObjectId.isValid(id)) {
        // Find the document by ID and update the array input field
        MainTopicModel.findByIdAndUpdate(id, { $set: { subTopic_id: arrayOFsubtopic_id } }, { new: true })
            .then((data) => {
                if (!data) {
                    return res.status(404).json({ message: `Data with ID ${id} not found.` });
                }

                res.json(data);
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json({ message: 'Failed to update mainTopic_id.' });
            });
    } else { return res.status(404).send('No client with that id') }
}





module.exports = {
  createSubTopic: createSubTopic,
  updateSubTopic_id:updateSubTopic_id,
    fetchSubTopic_id:fetchSubTopic_id,
    fetchSubTopics:fetchSubTopics
};


