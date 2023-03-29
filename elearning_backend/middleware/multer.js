const multer = require("multer");
const path = require('path');
// const pub = require('../../elearning_frontend/public/image')


const storage = multer.diskStorage( {
    destination: (req, file, cb) => {
        cb(null, 'public/image')
    },
    filename: (req, file, cb) => {
        const filename = file.fieldname + Math.floor((Math.random() * 100) + 1) + Date.now() + path.extname(file.originalname); //file.originalname.toLowerCase().split(' ').join('-');
        cb(null, filename);
    }

})

const imgType = ["image/png", "image/jpeg", "image/jpg"];


const upload = multer({
    // dest: 'public'
    storage: storage,   //after creating storage function
    fileFilter: (req, file, cb) => {


        const filesize = req.headers["content-length"];
        if(!imgType.includes(file.mimetype)){
            cb(new Error("Invalid file type"),false);
        } else if(filesize > 1024 * 1024 * 5){
            cb(new Error("file too large"),false)
        }else(cb(null, true))
    }
}
).single('image');



module.exports = upload;