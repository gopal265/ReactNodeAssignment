// Import required modules
const express = require('express');
const userController = require('../controllers/user.js'); // import the controllers defined in './controllers/user.js'

// Create an Express router
const router = express.Router();

// Define routes and their corresponding controller functions so frontend and use these routes as endpoints to get the required data
router.get('/allusers', userController.getUsers);
router.get('/user/:id', userController.getSingleUser);

// Export the router for use in other parts of your application
module.exports = router;
