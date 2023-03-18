const mongoose = require('mongoose');


const sectionSchema = mongoose.Schema({
   title: {
    type: String,
    require: true
   },

   sub_section_id: {
    type: mongoose.Schema.Types.Array,
    ref: 'sectionmodels'
   },

   maincourse_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'maincourseforms'

   }
});

const SectionModel = mongoose.model('SectionModel', sectionSchema);



module.exports = SectionModel;

