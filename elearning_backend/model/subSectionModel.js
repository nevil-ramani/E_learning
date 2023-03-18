const mongoose = require('mongoose');


const subSectionSchema = mongoose.Schema({
   title: {
    type: String,
    require: true
   },

   content_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'content'
   },

   maincourse_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'maincourseforms'

   }
});

const SubSectionModel = mongoose.model('SubSectionModel', subSectionSchema);



module.exports = SubSectionModel;

