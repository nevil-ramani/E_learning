const MainTopicModel = require('../model/mainTopicModel');
const CourseModel = require('../model/courseModel')
const mongoose =require("mongoose")
var id_1;
var arrayOFmaintopic_id = [];


//create mainTopic of the course
//post
//private
const createMainTopic = async (req, res, next) => {

    const title = req.body.title;
    const course_id = req.body.course_id;

    const mainTopic = await MainTopicModel.create({
        title: title,
        course_id: course_id
    })

    if(mainTopic){
         id_1 =  mainTopic._id;
         console.log(id_1)
        // res.json(mainTopic);
    }

    // res.send(mainTopic);

   
    next();
}




const fetchMainTopic_id = async (req, res, next) =>{

    const id = req.params.id
    
     data = await CourseModel.findById(id)
  
    arrayOFmaintopic_id = [...data.mainTopic_id,id_1]
    

    next()
}





//update mainTopic_id after createing the mainTopic
//put
//private
const updateMainTopic_id = (req, res, next) => {
    const id = req.params.id
    
    if (mongoose.Types.ObjectId.isValid(id)) {
        // Find the document by ID and update the array input field
        CourseModel.findByIdAndUpdate(id, { $set: { mainTopic_id: arrayOFmaintopic_id } }, { new: true })
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







//update subTopic_id after createing the subTopic
//put
//private
const updateSubTopic_id = async (req, res) => {

    const id = req.params.id;
    const subTopic_id = req.body.subTopic_id;
  
    // Find the document by ID and update the array input field
    await MainTopicModel.findByIdAndUpdate(id, { $set: { subTopic_id: subTopic_id } }, { new: true })
      .then((data) => {
        if (!data) {
          return res.status(404).json({ message: `Data with ID ${id} not found.` });
        }else{
            req.header = 
            res.json(data);
        }
  
      
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ message: 'Failed to update subTopic_id.' });
      });

  }



module.exports = {
    createMainTopic: createMainTopic,
    updateSubTopic_id:updateSubTopic_id,
    updateMainTopic_id:updateMainTopic_id,
    fetchMainTopic_id:fetchMainTopic_id
};