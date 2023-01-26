const apiKey = 'YOUR_API_KEY';
const searchBtn = document.getElementById('search-btn');
const locationInput = document.getElementById('location');
const weatherInfo = document.getElementById('weather-info');

searchBtn.addEventListener('click', () => {
    const location = locationInput.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        weatherInfo.innerHTML = `
            <p>Temperature: ${data.main.temp}</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
        weatherInfo.style.display = 'block';
    });
});
