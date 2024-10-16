const axios = require('axios'); // Import the Axios library for making HTTP requests

const ApiKey = '9e71e2a9a71345babd68a53e27637a16'; // API key for accessing OpenWeatherMap

// Function to fetch weather data based on latitude and longitude
exports.getWeatherData = async (lat, lon) => {
    // Make a GET request to the OpenWeatherMap API to retrieve weather data
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            lat, // Latitude
            lon, // Longitude
            appid: ApiKey, // API Key
            units: 'metric' // Use metric units for temperature
        }
    });
    // Return the weather data received from the API
    return response.data;
};

// Function to get latitude and longitude from a location name
exports.getLatLonFromLocation = async (location) => {
    // Make a GET request to the OpenWeatherMap Geo API to get latitude and longitude
    const response = await axios.get('http://api.openweathermap.org/geo/1.0/direct', {
        params: {
            q: location, // Location name (e.g., "New York")
            appid: ApiKey // API Key
        }
    });

    // Check if the response data is empty or undefined
    if (!response.data || response.data.length === 0) {
        // Throw an error if the location is not found
        throw new Error('Location not found');
    }

    // Return the latitude and longitude from the first result
    return {
        lat: response.data[0].lat, // Latitude
        lon: response.data[0].lon  // Longitude
    };
};
