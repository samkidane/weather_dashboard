function getWeather() {
    const city = document.getElementById("cityInput").value;
    
    if (city.trim() === "") {
        alert("Please enter a city name.");
        return;
    }
    
    fetch(`/weather?city=${city}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
        })
        .catch(error => console.error('Error:', error));
}