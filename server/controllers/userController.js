const User = require('../models/userModel');
const userController = {};

userController.getAllUsers = (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) {
      return next('Error in userController.getAllUsers:' + JSON.stringify(err));
    }
    res.locals.users = users;
    return next();
  });
};

//to Create a new user we will use the following:

userController.createUser = async (req, res, next) => {
  //try & catch blocks for error handling
  try {
    if (req.body.username && req.body.password) {
      const { username, password } = req.body;

      const newUser = new User({ username, password });
      res.locals.newUser = newUser;
      await User.create(newUser);
      return next();
    } else {
      return next({ err: 'Missing username or password in request body' });
    }
  } catch (err) {
    return next({ err: `userController.createUser failed: ${err.message}` });
  }
};

//verify user and redirect to another inner page for storing notes:

userController.verifyUser = async (req, res, next) => {
  const { username, password } = req.body;
  //try & catch blocks for catching errors:
  try {
    const existing = awaait User.findOne({ username: req.body.username, password: req.body.password });
    
    if (existing) {
      req.session.username = username
    }
  }
}

export default userController;
