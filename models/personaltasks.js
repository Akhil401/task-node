const mongoose = require('mongoose');

const taskPersonalSchema = new mongoose.Schema({
   todo: {
      type: String,
      required: [true, 'Must provide a name'],
      trim: true
   },
   completed: {
      type: Boolean,
      default: false
   }
});

module.exports = mongoose.model('TaskPersonal', taskPersonalSchema);
