import Entity from '../models/Entity.js';
import User from '../models/User.js';

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.findByIdAndUpdate(req.user.id, { name, email }, { new: true }).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getEntities = async (req, res) => {
  const { search } = req.query;
  try {
    const query = { user: req.user.id };
    if (search) query.title = { $regex: search, $options: 'i' };
    const entities = await Entity.find(query);
    res.json(entities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createEntity = async (req, res) => {
  try {
    const entity = await Entity.create({ ...req.body, user: req.user.id });
    res.json(entity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateEntity = async (req, res) => {
  try {
    const entity = await Entity.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    );
    if (!entity) return res.status(404).json({ message: 'Entity not found' });
    res.json(entity);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteEntity = async (req, res) => {
  try {
    const entity = await Entity.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!entity) return res.status(404).json({ message: 'Entity not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
