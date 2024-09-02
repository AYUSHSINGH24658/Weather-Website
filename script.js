
document.getElementById('fetchWeatherBtn').addEventListener('click', fetchWeather);

async function fetchWeather() {
    const city = document.getElementById('search').value;
    const apiKey = 'edab8004c51f226dbe1f84f1a6799d63';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const result = await response.json();

        if (response.ok) {
            document.getElementById('temp').innerHTML = `${result.main.temp}<sup>0</sup>`;
            document.getElementById('ws').textContent = result.wind.speed;
            document.getElementById('hum').textContent = result.main.humidity;
        } else {
            document.getElementById('wea').textContent = `Error: ${result.message}`;
        }
    } catch (error) {
        console.error(error);
        document.getElementById('wea').textContent = 'An error occurred while fetching the weather data.';
    }
}

// Initial call to fetch weather for the default city
fetchWeather();
