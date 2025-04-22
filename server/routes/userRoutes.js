import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

router.get('/users', userController.getAllUsers, (req, res) => {
  res.status(200).json(res.locals.users);
});

router.post('/signup', userController.createUser, (req, res) => {
  res.status(200).json({ message: 'User created', user: res.locals.newUser });
});

router.post('/login', userController.verifyUser, (req, res) => {
  res.status(200).json({ message: 'Login successful', user: res.locals.user });
});

router.put('/users/:id', userController.updateUser, (req, res) => {
  res.status(200).json({ message: 'User updated', user: res.locals.updateUser });
});

router.delete('/users/:id', userController.deleteUser, (req, res) => {
  res.status(200).json({ message: 'User deleted', user: res.locals.deleteUser });
});

export default router;
