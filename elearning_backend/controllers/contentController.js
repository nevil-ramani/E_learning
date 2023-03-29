const ContentModel = require('../model/contentModel');
const SubTopicModel = require('../model/subTopicModel');
const mongoose =require("mongoose")

var arrayOFcontent = [];



const createContent = async (req, res, next) => {

    // {
    //     "content": [{"title":"title","videoUrl":"videoUrl"}]
    // }

    // const content = [];
    

    const contentData = await ContentModel.create({
        
    })

     id_1 = contentData._id;

next();
}

//update content_id after createing the subtopic
//put
//private
const updateContent_id = (req, res, next) => {
  const id = req.params.id
  console.log(id_1)
  
  if (mongoose.Types.ObjectId.isValid(id)) {
      // Find the document by ID and update the array input field
      SubTopicModel.findByIdAndUpdate(id,  {content_id: id_1} , { new: true })
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
  } else { return res.status(404).send('No client with that id') }
}




const fetchContent = async (req, res, next) =>{

  const id = req.params.id
  const content = req.body.content
   data = await ContentModel.findById(id)

  arrayOFcontent = [...data.content,content]
  

  next()
}







//update content array when add new content
//put
//private
const updateContent = (req, res) => {
    const id = req.params.id;
    // const content_id = req.body.content_id;
  
    // Find the document by ID and update the array input field
    ContentModel.findByIdAndUpdate(id, { $set: { content: arrayOFcontent } }, { new: true })
      .then((data) => {
        if (!data) {
          return res.status(404).json({ message: `Data with ID ${id} not found.` });
        }
  
        res.json(data);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ message: 'Failed to update content.' });
      });
  }



module.exports = {
    createContent:createContent,
    updateContent:updateContent,
    updateContent_id:updateContent_id,
    fetchContent:fetchContent
   
}