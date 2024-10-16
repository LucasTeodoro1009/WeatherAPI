const weatherModel = require('../models/weatherModel'); // Import the weather model to interact with weather data

// Controller function to handle GET requests for weather data
exports.getWeather = async (req, res) => {
    try {
        // Extract latitude and longitude from the query parameters
        const { lat, lon } = req.query;

        // If latitude or longitude is missing, redirect to the home page
        if (!lat || !lon) {
            return res.redirect('/');
        }

        // Fetch weather data using the model function
        const data = await weatherModel.getWeatherData(lat, lon);

        // Send a JSON response with the weather data
        res.json({
            temp: Math.round(data.main.temp), // Temperature in Celsius
            weather: data.weather[0].main, // General weather condition (e.g., Clear, Rain)
            description: data.weather[0].description, // Detailed weather description
            city: data.name, // City name
            country: data.sys.country, // Country code
            icon: data.weather[0].icon, // Weather icon code
            feel: data.main.feels_like, // Feels like temperature
            tempMin: data.main.temp_min, // Minimum temperature
            tempMax: data.main.temp_max, // Maximum temperature
            pressure: data.main.pressure, // Atmospheric pressure
            humidity: data.main.humidity, // Humidity percentage
            wind: data.wind.speed // Wind speed
        });
    } catch (error) {
        // If an error occurs, send a 500 status and error message
        res.status(500).send(error.message);
    }
};

// Controller function to handle POST requests for weather data based on location name
exports.postWeather = async (req, res) => {
    // Extract location from the request body
    const location = req.body.input;

    try {
        // Get latitude and longitude from the location name using the model function
        const { lat, lon } = await weatherModel.getLatLonFromLocation(location);

        // Redirect to the weather endpoint with the obtained latitude and longitude
        res.redirect(`/weather?lat=${lat}&lon=${lon}`);
    } catch (error) {
        // Log the error and redirect to the home page if an error occurs
        console.error('Error fetching location data:', error.message);
        res.redirect('/');
    }
};
