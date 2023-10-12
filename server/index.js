// Import required modules
const express = require("express");
const cors = require('cors');
const userRoutes = require('./routes/user.js'); // import the routes defined in './routes/user.js'

// Create an Express application and port number 
const app = express();
const port = 4500;

// Middleware to  Parse JSON data and URL-encoded data we get from the client or frontend.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to enable Cross-Origin Resource Sharing (CORS) ,so we can send request from the client or frontend to backend
app.use(cors());

// Define the base route for the APIs we created,i.e  to access the routes reacted in route folder
app.use('/api/v1', userRoutes); 

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
