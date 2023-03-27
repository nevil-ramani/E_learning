const MainTopicModel = require('../model/mainTopicModel');


//create mainTopic of the course
//post
//private
const createMainTopic = async (req, res) => {

    const title = req.body.title;
    const course_id = req.body.course_id;

    const mainTopic = await MainTopicModel.create({
        title: title,
        course_id: course_id
    })

    res.send(mainTopic);
   
}


//update subTopic_id after createing the subTopic
//put
//private
const updateSubTopic_id = (req, res) => {
    const id = req.params.id;
    const subTopic_id = req.body.subTopic_id;
  
    // Find the document by ID and update the array input field
    MainTopicModel.findByIdAndUpdate(id, { $set: { subTopic_id: subTopic_id } }, { new: true })
      .then((data) => {
        if (!data) {
          return res.status(404).json({ message: `Data with ID ${id} not found.` });
        }
  
        res.json(data);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ message: 'Failed to update subTopic_id.' });
      });
  }



module.exports = {
    createMainTopic: createMainTopic,
    updateSubTopic_id:updateSubTopic_id
};