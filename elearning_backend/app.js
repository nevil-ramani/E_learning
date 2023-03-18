//multer
const multer = require("multer");
const path = require('path');
const upload = require('./middleware/multer');


//express
const express = require("express");
const app = express();

//configure express app 
app.use(express.json());


app.use(upload);

//API
const mainCouseFormController = require('./controllers/mainCouseFormController');
const sectionController = require('./controllers/sectionController')
const contentController = require('./controllers/contentController')

//body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const morgan = require('morgan')
app.use(morgan('tiny'));

//.env
require('dotenv').config()


//database connection
const connectDB = require('./config/connectDB');
connectDB();

//cross-origin sharing standard
var cors = require('cors');
const { updateSubSectionID } = require("./controllers/mainCouseFormController");
app.use(cors())

// routing
app.get('/mainform', mainCouseFormController.fetchMainforms)
app.post('/mainform', mainCouseFormController.createMainForm)
app.put('/mainform/:id', mainCouseFormController.updateSubSectionID) 

app.post('/section', sectionController.createSection)

app.post('/content', contentController.createContent)
app.put('/content/:id', contentController.updateContent) 


// server start
app.listen(3001, (console.log('server is running on https://localhost:3001')));