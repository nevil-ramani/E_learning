
const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({

   content: [Object],

  course_id: {
   type: mongoose.Schema.Types.ObjectId,
   // ref: ''

  },
  createdAt: {
   type: Date,
   default: new Date()
}

  
});

const ContentModel = mongoose.model('ContentModel', contentSchema);

module.exports = ContentModel;
