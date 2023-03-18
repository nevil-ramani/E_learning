const ContentModel = require('../model/contentModel');


// const fetchMainforms = async (req,res) => {
//     const mainCourseForm = await MainCourseForm.find();

//     res.send(mainCourseForm);
// }

// const fetchNote = async(req,res) => {
//     const id = req.params.id;
//     const note = MainCourseForm.findById(id);

//     res.send(note);
// }

const createContent = async (req, res) => {

    // {
    //     "content": "title"
    // }

    //get data from request body
    const content = req.body.content;
    

    //create note with it

    const contentForm = await ContentModel.create({
        content: content,

    })

    //respond with the new note
    res.send(contentForm);
}

const updateContent = async(req, res) => {

    // {
        
    //     "section_id": ["sub7","sub8"]
      
    // }
    
    const id = req.params.id;
    // const sub_section_id = async () =>  {await MainCourseForm.findById(id);}
    // console.log(sub_section_id);
   
    const content = req.body.content;

    const updated_content = await ContentModel.findByIdAndUpdate(id,{content: content}
        

        
    ,{ new :true})
    
    res.send(updated_content);
}


module.exports = {
    createContent:createContent,
    updateContent:updateContent
   
}