import User from '../models/userModel.js';

const userController = {};

//* get all users
userController.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    console.log('Error in getAllUsers:', err.message);
    return res.status(500).json({ error: 'Failed to get users' });
  }
};

//* create user
userController.createUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    //* checks to see if username and password are provided
    if (!username || !password) {
      return next({ err: 'Missing username or password in request body' });
    }

    //* check password length  (set to 6 characters)
    if (password.length < 6) {
      return res.status(403).json({ error: 'Password must be at least 6 characters long' });
    }

    const newUser = new User({ username, password });
    await newUser.save();

    res.locals.newUser = newUser;
    return res.status(201).json({ user: newUser });
  } catch (err) {
    return next({ err: `userController.createUser failed: ${err.message}` });
  }
};

//* verify user login
userController.verifyUser = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const existing = await User.findOne({ username, password });

    if (!existing) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    req.session = { username };
    res.locals.user = existing;

    return res.status(200).json({ user: existing });
  } catch (err) {
    return next({ err: `userController.verifyUser failed: ${err.message}` });
  }
};

//* update user
userController.updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { username, password } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(id, { username, password }, { new: true, runValidators: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.locals.updatedUser = updatedUser;
    return next();
  } catch (err) {
    return next({ err: `userController.updateUser failed: ${err.message}` });
  }
};

//* delete user
userController.deleteUser = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.locals.deletedUser = deletedUser;
    return next();
  } catch (err) {
    return next({ err: `userController.deleteUser failed: ${err.message}` });
  }
};

export default userController;
