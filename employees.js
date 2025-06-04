const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');
const { isAuthenticated, isAdmin } = require('../middleware/auth');

// GET all
router.get('/', isAuthenticated, isAdmin, async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

// CREATE
router.post('/', isAuthenticated, isAdmin, async (req, res) => {
  const { name, email, position, salary } = req.body;
  if (!name || !email || !position || !salary) {
    return res.status(400).send('All fields required');
  }
  const emp = new Employee({ name, email, position, salary });
  await emp.save();
  res.send('Employee created');
});

// UPDATE
router.put('/:id', isAuthenticated, isAdmin, async (req, res) => {
  const { name, email, position, salary } = req.body;
  await Employee.findByIdAndUpdate(req.params.id, { name, email, position, salary });
  res.send('Employee updated');
});

// DELETE
router.delete('/:id', isAuthenticated, isAdmin, async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.send('Employee deleted');
});

module.exports = router;
