const MainCourseForm = require('../model/main_course_form');
const upload = require('../middleware/multer')
const path = require('path');


const fetchMainforms = async (req,res) => {
    const mainCourseForm = await MainCourseForm.find();

    res.send(mainCourseForm);
}

// const fetchNote = async(req,res) => {
//     const id = req.params.id;
//     const note = MainCourseForm.findById(id);

//     res.send(note);
// }

const createMainForm = async (req, res) => {

    // {
    //     "title": "title",
    //     "thumbnail": "thumbnail",
    //     "price": "price",
    //     "tutor_name": "tutor_name",
    //     "section_id": ["sud4","sub5","sub"],
    //     "is_featured": 1,
    //     "is_approved": 1
    // }

    //get data from request body
    const title = req.body.title;
    // const thumbnail = req.body.thumbnail;
    const price = req.body.price;
    const tutor_name = req.body.tutor_name;
    const section_id = req.body.section_id;
    const is_featured = req.body.is_featured;
    const is_approved = req.body.is_approved;

    //create note with it

    const mainForm = await MainCourseForm.create({
        title: title,
        thumbnail: path.join(__dirname,req.file.path),
        price: price,
        tutor_name: tutor_name,
        section_id: section_id,
        is_featured: is_featured,
        is_approved: is_approved
    })

    //respond with the new note
    res.send(mainForm);
}

const updateSubSectionID = async(req, res) => {

    // {
        
    //     "section_id": ["sub7","sub8"]
      
    // }
    
    const id = req.params.id;
    // const sub_section_id = async () =>  {await MainCourseForm.findById(id);}
    // console.log(sub_section_id);
   
    const section_id = req.body.section_id;

    const updated_id = await MainCourseForm.findByIdAndUpdate(id,{section_id: [section_id]}
        

        
    ,{ new :true})
    
    res.send(updated_id);
}


module.exports = {
    fetchMainforms:fetchMainforms,
    createMainForm:createMainForm,
    updateSubSectionID:updateSubSectionID
}