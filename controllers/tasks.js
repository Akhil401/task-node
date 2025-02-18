const Task = require('../models/tasks');

const getAllTasks = async (req, res) => {
      try {
         const tasks = await Task.find({});
         res.status(200).json({ tasks });
      } catch (error) {
         res.status(500).json({ msg: error });
      }
   },
   createTask = async (req, res) => {
      try {
         const task = await Task.create(req.body);
         res.status(201).json({ task });
      } catch (error) {
         res.status(500).json({ msg: error });
      }
   },
   getTask = async (req, res) => {
      try {
         const { id: taskID } = req.params;
         const task = await Task.findOne({ _id: taskID });
         if (!task) {
            return res.status(404).json({ msg: `NO task with id: ${taskID}` });
         }
         res.status(200).json({ task });
      } catch (error) {
         res.status(500).json({ msg: error });
      }
   },
   updateTask = async (req, res) => {
      try {
         const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
         if (!task) return res.status(404).json({ msg: 'Task not found' });
         res.status(200).json({ task });
      } catch (error) {
         res.status(500).json({ msg: error.message });
      }
   },
   deleteTask = async (req, res) => {
      try {
         const task = await Task.findByIdAndDelete(req.params.id);
         if (!task) return res.status(404).json({ msg: 'Task not found' });
         res.status(200).json({ msg: 'Task deleted successfully' });
      } catch (error) {
         res.status(500).json({ msg: error.message });
      }
   };

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
