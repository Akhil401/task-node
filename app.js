const express = require('express'),
   app = express(),
   tasks = require('./routes/tasks'),
   db = require('./db/connect'),
   cors = require('cors');
require('dotenv').config();

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/v1/tasks', tasks);
app.use('/api/v1/personaltasks', tasks);

app.get('/', (req, res) => {
   res.send('Hey, Task Manager...');
});

const startApp = async () => {
   const PORT = process.env.PORT || 3000;
   try {
      await db(process.env.MONGO_URI);
      app.listen(PORT, () => {
         console.log(`Server listening on port ${PORT}...`);
      });
   } catch (error) {
      console.log(error);
   }
};

startApp();
