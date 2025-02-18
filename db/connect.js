const mongoose = require('mongoose');

const connectDB = (url) => {
   mongoose
      .connect(url)
      .then(() => console.log(`connected to ${mongoose.connection.name}`))
      .catch((err) => console.error('MongoDB Connection Error:', err));
};

module.exports = connectDB;
