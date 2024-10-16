const express = require('express'); // Import the Express framework
const path = require('path'); // Import the path module to handle file and directory paths
const weatherRoutes = require('./routes/weatherRoutes'); // Import the routes from the weatherRoutes module

const app = express(); // Create an Express application
const port = 3000; // Define the port number on which the server will listen

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded request bodies
app.use(express.static(path.join(__dirname, '../public'))); // Serve static files from the 'public' directory

app.use('/', weatherRoutes); // Use the routes defined in weatherRoutes module for the root path

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`); // Start the server and log the URL to the console
});
