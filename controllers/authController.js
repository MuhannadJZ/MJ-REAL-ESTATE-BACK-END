const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  try {
    const { name, password, role } = req.body;
    const userExists = await User.findOne({ name });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const user = new User({ name, password, role });
    await user.save();

    const token = jwt.sign({ id: user._id, name: user.name, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.status(201).json({ token, user: { name: user.name, role: user.role } });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.login = async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = await User.findOne({ name });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, name: user.name, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({ token, user: { name: user.name, role: user.role } });
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Server error' });
  }
};