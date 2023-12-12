
function getWeather() {


    const apiKey = 'af281fd673514f99910165617230912';
    const cityInput = document.getElementById('cityInput');
    const cityName = document.getElementById('cityName');
    const temperature = document.getElementById('temperature');
    const condition = document.getElementById('condition');
    const weatherContainer = document.getElementById('weather-container');


    cityName.textContent = '';
    temperature.textContent = '';
    condition.textContent = '';
    
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityInput.value}`)
        .then(response => response.json())
        .then(data => {
          
            cityName.textContent = data.location.name;
            temperature.textContent = `Temperature: ${data.current.temp_c}°C`;
            condition.textContent = `Condition: ${data.current.condition.text}`;
            weatherContainer.classList.remove('hidden');
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
function ref() {
   location.reload();
}