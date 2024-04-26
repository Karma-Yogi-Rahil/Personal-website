// Function to fetch weather data from the API based on user input
async function searchWeather() {
    const locationInput = document.getElementById('location-input').value;

    try {
        const response = await fetch(`https://localhost:7246/api/weather/${encodeURIComponent(locationInput)}`);
        const data = await response.json();
        updateWeather(data);
        console.log(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Function to update the UI with weather data
function updateWeather(weatherData) {
    // Set background image
    document.body.style.backgroundImage = `url('${weatherData.backgroundImage}')`;

    // Create HTML content for weather information
    const htmlContent = `
        <img src="${weatherData.backgroundImage}" alt="Weather Image">
        <h2>${weatherData.location.name}, ${weatherData.location.region}, ${weatherData.location.country}</h2>
        <p>${weatherData.current.condition.text}</p>
        <p>Temperature: ${weatherData.current.temp_c}°C / ${weatherData.current.temp_f}°F</p>
        <p>Wind: ${weatherData.current.wind_kph} km/h ${weatherData.current.wind_dir}</p>
        <p>Humidity: ${weatherData.current.humidity}%</p>
        <p>Last Updated: ${weatherData.current.last_updated}</p>
    `;

    // Set the HTML content
    document.getElementById('weather-info').innerHTML = htmlContent;
}