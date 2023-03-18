const mongoose = require('mongoose');


const contentSchema = mongoose.Schema({
  

   content: Array,


   maincourse_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'maincourseforms'
   }
});

const ContentModel = mongoose.model('ContentModel', contentSchema);



module.exports = ContentModel;

