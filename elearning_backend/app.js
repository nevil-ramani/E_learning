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
app.use(upload);
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

// routing
app.get('/courses', courseController.fetchCourses)
app.post('/course', courseController.createCourse)
app.put('/update_maintopic_id/:id', courseController.updateMainTopic_id)

app.post('/maintopic/:id', mainTopicController.createMainTopic, mainTopicController.updateMainTopic_id)
app.put('/update_subtopic_id/:id', mainTopicController.updateSubTopic_id)

app.post('/subtopic', subTopicController.createSubTopic)
app.put('/update_content_id/:id', subTopicController.createSubTopic)

app.post('/content', contentController.createContent)
app.put('/update_content/:id', contentController.updateContent)



// server start
app.listen(3001, (console.log('server is running on https://localhost:3001')));