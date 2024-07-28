function initCiwaliniMap() {
    var map = L.map('ciwalini-map').setView([-7.143697306069486, 107.38454329183567], 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    L.marker([-7.1368, 107.3956]).addTo(map)
        .bindPopup('Pemandian Air Panas Ciwalini')
        .openPopup();
}

function displayCiwaliniWeather() {
    const weatherContainer = document.getElementById('ciwalini-weather');
    weatherContainer.innerHTML = `
        <div class="current-weather">
            <div class="weather-icon"><i class="fas fa-cloud-sun"></i></div>
            <div class="temperature">18°C</div>
            <div class="condition">Cerah Berawan</div>
        </div>
    `;

    const forecastSlider = document.createElement('div');
    forecastSlider.id = 'ciwalini-forecast-slider';
    forecastSlider.className = 'forecast-slider';
    
    const forecasts = [
        { day: 'Senin', temp: '17°C', icon: 'fa-cloud' },
        { day: 'Selasa', temp: '19°C', icon: 'fa-sun' },
        { day: 'Rabu', temp: '18°C', icon: 'fa-cloud-sun' },
        { day: 'Kamis', temp: '16°C', icon: 'fa-cloud-showers-heavy' },
        { day: 'Jumat', temp: '18°C', icon: 'fa-cloud-sun' },
        { day: 'Sabtu', temp: '20°C', icon: 'fa-sun' }
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
    initCiwaliniMap();
    displayCiwaliniWeather();
});