const mongoose = require('mongoose');


const subTopicSchema = mongoose.Schema({
   title: {
    type: String,
    require: true
   },

   content_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'contentModel'
   },

   course_id: {
    type: mongoose.Schema.Types.ObjectId,
    // ref: ''

   },

   createdAt: {
    type: Date,
    default: new Date()
}
});

const SubTopicModel = mongoose.model('SubTopicModel', subTopicSchema);



module.exports = SubTopicModel;

