const mongoose = require('mongoose');
mongoose.set('debug', true);

const courseSchema = new mongoose.Schema({
    title: String,
    thumbnail: String,
    price: Number,
    tutor_name: String,
    mainTopic_id: {
        type: mongoose.Schema.Types.Array,
        ref: 'maintopicmodels'
       },
    // mainTopic_id: Array,
    is_featured: Boolean,
    is_approved: Boolean,
    createdAt: {
        type: Date,
        default: new Date()
    }

  });

  const Course = mongoose.model('Course', courseSchema);



module.exports = Course;