import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

//* the route to get all users in the database
router.get('/users', userController.getAllUsers, (req, res) => {
  res.status(200).json(res.locals.users);
});

//* the route to handle new users and very old users
router.post('/signup', userController.createUser);
router.post('/login', userController.verifyUser);

//* the route to update information on a user
router.put('/users/:id', userController.updateUser, (req, res) => {
  res.status(200).json({ message: 'User updated', user: res.locals.updateUser });
});

//* the route to delete a user from the database
router.delete('/users/:id', userController.deleteUser, (req, res) => {
  res.status(200).json({ message: 'User deleted', user: res.locals.deleteUser });
});

export default router;
