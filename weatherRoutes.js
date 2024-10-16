const express = require('express'); // Import the Express framework
const router = express.Router(); // Create a new router object to define routes
const weatherController = require('../controllers/weatherController'); // Import the weatherController module

// Define a route for GET requests to '/weather'
// This route uses the getWeather function from weatherController to handle the request
router.get('/weather', weatherController.getWeather);

// Define a route for POST requests to '/weather'
// This route uses the postWeather function from weatherController to handle the request
router.post('/weather', weatherController.postWeather);

// Define a route for GET requests to the root path '/'
// This route serves the 'index.html' file located in the 'public' directory
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// Export the router to be used in other modules
module.exports = router;
