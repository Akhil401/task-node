const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
   todo: {
      type: String,
      required: [true, 'Must provide a name'],
      trim: true,
      maxlength: [20, 'name cannot be more than 20 chars']
   },
   completed: {
      type: Boolean,
      default: false
   }
});

module.exports = mongoose.model('Task', taskSchema);
