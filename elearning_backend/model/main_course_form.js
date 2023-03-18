const mongoose = require('mongoose');

const mainCourseForm = new mongoose.Schema({
    title: String,
    thumbnail: String,
    price: Number,
    tutor_name: String,
    section_id: {
        type: mongoose.Schema.Types.Array,
        ref: 'sectionmodels'
       },
    is_featured: Boolean,
    is_approved: Boolean,
    createdAt: {
        type: Date,
        default: new Date()
    }

  });

  const MainCourseForm = mongoose.model('MainCourseForm', mainCourseForm);



module.exports = MainCourseForm;