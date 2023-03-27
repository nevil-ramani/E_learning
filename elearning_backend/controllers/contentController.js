const ContentModel = require('../model/contentModel');


const createContent = async (req, res) => {

    // {
    //     "content": [{"title":"title","videoUrl":"videoUrl"}]
    // }

    const content = req.body.content;
    

    const contentData = await ContentModel.create({
        content: content,

    })

    res.send(contentData);
}



//update content array when add new content
//put
//private
const updateContent = (req, res) => {
    const id = req.params.id;
    const content_id = req.body.content_id;
  
    // Find the document by ID and update the array input field
    SubTopicModel.findByIdAndUpdate(id, { $set: { content: content } }, { new: true })
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
    createContent:createContent,
    updateContent:updateContent
   
}