function initMap() {
    var map = L.map('curug-tilu-map').setView([-7.149560314459994, 107.37578135629012], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.marker([-7.1684, 107.3957]).addTo(map)
        .bindPopup('Ecopark Curug Tilu')
        .openPopup();
}

function displayWeather() {
    const weatherContainer = document.getElementById('curug-tilu-weather');
    weatherContainer.innerHTML = `
        <div class="current-weather">
            <h4>Cuaca Hari Ini</h4>
            <div class="weather-icon"><i class="fas fa-sun"></i></div>
            <div class="temperature">16°C</div>
            <div class="condition">Cerah</div>
        </div>
        <div id="curug-tilu-forecast-slider" class="forecast-slider"></div>
    `;
    
    const forecastSlider = document.getElementById('curug-tilu-forecast-slider');
    const forecasts = [
        { day: 'Selasa', temp: '14°C', icon: 'fa-cloud-sun' },
        { day: 'Rabu', temp: '13°C', icon: 'fa-cloud' },
        { day: 'Kamis', temp: '16°C', icon: 'fa-sun' },
        { day: 'Jumat', temp: '17°C', icon: 'fa-cloud-showers-heavy' },
        { day: 'Sabtu', temp: '15°C', icon: 'fa-cloud-sun' },
        { day: 'Minggu', temp: '16°C', icon: 'fa-sun' }
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
}

document.addEventListener('DOMContentLoaded', () => {
    initMap();
    displayWeather();
    
    const slider = document.querySelector('#curug-tilu-forecast-slider');
    const cards = slider.querySelectorAll('.forecast-card');
    
    slider.scrollLeft = (slider.scrollWidth - slider.clientWidth) / 2;
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            cards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            
            const currentWeather = document.querySelector('.current-weather');
            currentWeather.style.opacity = '0';
            setTimeout(() => {
                currentWeather.querySelector('.temperature').textContent = card.querySelector('.temperature').textContent;
                currentWeather.querySelector('.condition').textContent = card.querySelector('.day').textContent;
                currentWeather.querySelector('.weather-icon').innerHTML = card.querySelector('.weather-icon').innerHTML;
                currentWeather.style.opacity = '1';
            }, 300);
        });
    });
});