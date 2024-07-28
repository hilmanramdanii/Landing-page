function initRengganisMap() {
    var map = L.map('rengganis-map').setView([-7.173014905130389, 107.37401082436644], 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    L.marker([-7.173014905130389, 107.37401082436644]).addTo(map)
        .bindPopup('Rengganis Suspension Bridge')
        .openPopup();
}

function displayRengganisWeather() {
    const weatherContainer = document.getElementById('rengganis-weather');
    weatherContainer.innerHTML = `
        <div class="current-weather">
            <div class="weather-icon"><i class="fas fa-cloud"></i></div>
            <div class="temperature">22°C</div>
            <div class="condition">Berawan</div>
        </div>
    `;

    const forecastSlider = document.createElement('div');
    forecastSlider.id = 'rengganis-forecast-slider';
    forecastSlider.className = 'forecast-slider';
    
    const forecasts = [
        { day: 'Senin', temp: '21°C', icon: 'fa-cloud' },
        { day: 'Selasa', temp: '23°C', icon: 'fa-sun' },
        { day: 'Rabu', temp: '22°C', icon: 'fa-cloud-sun' },
        { day: 'Kamis', temp: '20°C', icon: 'fa-cloud-showers-heavy' },
        { day: 'Jumat', temp: '22°C', icon: 'fa-cloud-sun' },
        { day: 'Sabtu', temp: '24°C', icon: 'fa-sun' }
    ];
    
    forecasts.forEach(forecast => {
        const forecastCard = document.createElement('div');
        forecastCard.className = 'forecast-card';
        forecastCard.innerHTML = `
            <div class="day">${forecast.day}</div>
            <div class="weather-icon"><i class="fas ${forecast.icon}"></i></div>
            <div class="temperature">${forecast.temp}</div>
        `;
        forecastSlider.appendChild(forecastCard);
    });

    weatherContainer.appendChild(forecastSlider);
}

document.addEventListener('DOMContentLoaded', () => {
    initRengganisMap();
    displayRengganisWeather();
});