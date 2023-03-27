const SubTopicModel = require('../model/subTopicModel');


//create subTopic of the course
//post
//private
const createSubTopic = async (req, res) => {

    const title = req.body.title;
    const course_id = req.body.course_id;

    const subTopic = await SubTopicModel.create({
        title: title,
        course_id: course_id
    })

    res.send(subTopic);
   
}


//update content_id after createing the content
//put
//private
const updateContent_id = (req, res) => {
    const id = req.params.id;
    const content_id = req.body.content_id;
  
    // Find the document by ID and update the array input field
    SubTopicModel.findByIdAndUpdate(id, { $set: { content_id: content_id } }, { new: true })
      .then((data) => {
        if (!data) {
          return res.status(404).json({ message: `Data with ID ${id} not found.` });
        }
  
        res.json(data);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ message: 'Failed to update content_id.' });
      });
  }



module.exports = {
    createSubTopic: createSubTopic,
    updateContent_id:updateContent_id
};