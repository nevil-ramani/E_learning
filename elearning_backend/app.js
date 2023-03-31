const express = require("express");
var bodyParser = require('body-parser');
var cors = require('cors');
const connectDB = require('./config/connectDB');
const dotenv = require('dotenv')
const morgan = require('morgan')
const mongoose = require('mongoose')
//multer
const multer = require("multer");
const path = require('path');
const upload = require('./middleware/multer');

mongoose.set('debug', true);

//express
const app = express();

//configure express app 
app.use(express.json());

//database connection
// connectDB();
mongoose.connect(process.env.DATABASE_LINK, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'E_Learning'
}).then(() => {
    console.log('Database Connection is ready...')
}).catch((err) => {
    console.log(err);
})

//.env
dotenv.config()


/////////middleware//////////
//multer
// app.use(upload);
//body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//morgan
app.use(morgan('tiny'));
//cross-origin sharing standard
app.use(cors())


//Controller
const contentController = require('./controllers/contentController')
const courseController = require('./controllers/courseController')
const mainTopicController = require("./controllers/mainTopicController");
const subTopicController = require("./controllers/subTopicController");
const userController = require('./controllers/userController')




// // Configure multer to handle file uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'public/videos');
//   },
//   filename: function (req, file, cb) {
//     const filename = file.fieldname + Math.floor((Math.random() * 100) + 1) + Date.now() + path.extname(file.originalname); //file.originalname.toLowerCase().split(' ').join('-');
//         cb(null, filename);
//   }
// });

// const uploadVid = multer({
//     storage: storage,
//     limits: { fileSize: 1024 * 1024 * 50 }, // 50 MB file size limit
//   });



// // Define a route for uploading videos
// app.post('/videos', uploadVid.single('video'), (req, res) => {

// //   const { filename } = req.file;
  
// //   const video = new Video({
// //     filename:filename
// //   });

// //   video.save()
// //     .then(() => {
//       res.status(201).json({ message: 'Video uploaded successfully.' });
//     // })
//     // .catch((err) => {
//     //   console.error(err);
//     //   res.status(500).json({ message: 'Failed to upload video.' });
//     // });
// });


const videoSchema = new mongoose.Schema({
  filename: String,
  originalname: String,
  path: String
});

const Video = mongoose.model('Video', videoSchema);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/videos');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const uploadVid = multer({ storage: storage });

app.post('/api/videos', uploadVid.single('video'), async (req, res) => {
  const { filename, originalname } = req.file;

  const video = new Video({
    filename,
    originalname,
    path: req.file.path
  });


  try {
    const data = await video.save();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }
});


// routing
app.get('/courses', courseController.fetchCourses)
app.get('/courseBYid/:id', courseController.fetchCoursebyid)
app.post('/course', courseController.createCourse)
// app.put('/update_maintopic_id/:id', courseController.updateMainTopic_id)

app.post('/maintopic/:id', mainTopicController.createMainTopic, mainTopicController.fetchMainTopic_id, mainTopicController.updateMainTopic_id)
app.get('/maintopicBYid/:id', mainTopicController.fetchMintopicBYid)
app.get('/allmaintopics',mainTopicController.fetchMainTopics)
// app.put('/update_subtopic_id/:id', mainTopicController.updateSubTopic_id)

app.post('/subtopic/:id', subTopicController.createSubTopic, subTopicController.fetchSubTopic_id, subTopicController.updateSubTopic_id)
app.get('/allsubtopics',subTopicController.fetchSubTopics)
// app.put('/update_content_id/:id', subTopicController.createSubTopic)

app.post('/content/:id', contentController.createContent, contentController.updateContent_id)
app.put('/update_content/:id', contentController.fetchContent, uploadVid.single('video'), contentController.updateContent)


app.get('/alluser', userController.getallUsers)
app.get('/user/:id', userController.getUser)
app.put('/updateuser/:id', userController.updateUser)
app.post('/login', userController.loginUser)
app.post('/register', userController.registerUser)
app.delete('/deleteuser/:id', userController.deleteUser)
app.get('/get/count', userController.totelUser)





// // Start the server
// app.listen(3000, () => {
//   console.log('Server started on port 3000.');
// });




// server start
app.listen(3001, (console.log('server is running on https://localhost:3001')));