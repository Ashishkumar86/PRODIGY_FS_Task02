const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).send('Invalid login');
  }
  req.session.userId = user._id;
  req.session.role = user.role;
  res.send('Login successful');
});

// Logout
router.get('/logout', (req, res) => {
  req.session.destroy(() => res.send('Logged out'));
});

// (Optional) Register admin user (run once then delete)
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password, role: 'admin' });
  await user.save();
  res.send('Admin registered');
});

module.exports = router;
