const mongoose = require('mongoose');


const mainTopicSchema = mongoose.Schema({
   title: {
    type: String,
    require: true
   },

   subTopic_id: {
    type: mongoose.Schema.Types.Array,
    // ref: ''
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

const MainTopicModel = mongoose.model('MainTopicModel', mainTopicSchema);



module.exports = MainTopicModel;

