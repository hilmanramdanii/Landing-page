function initKawahPutihMap() {
    var map = L.map('kawah-putih-map').setView([-7.166713024559039, 107.40229581774169], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    L.marker([-7.1660, 107.4020]).addTo(map)
        .bindPopup('Kawah Putih')
        .openPopup();
}

function displayKawahPutihWeather() {
    const weatherContainer = document.getElementById('kawah-putih-weather');
    weatherContainer.innerHTML = `
        <div class="current-weather">
            <h4>Cuaca Hari Ini</h4>
            <div class="weather-icon"><i class="fas fa-sun"></i></div>
            <div class="temperature">15°C</div>
            <div class="condition">Cerah</div>
        </div>
        <div id="kawah-putih-forecast-slider" class="forecast-slider"></div>
    `;
    
    const forecastSlider = document.getElementById('kawah-putih-forecast-slider');
    const forecasts = [
        { day: 'Selasa', temp: '11°C', icon: 'fa-cloud-sun' },
        { day: 'Rabu', temp: '10°C', icon: 'fa-cloud' },
        { day: 'Kamis', temp: '13°C', icon: 'fa-sun' },
        { day: 'Jumat', temp: '16°C', icon: 'fa-cloud-showers-heavy' },
        { day: 'Sabtu', temp: '12°C', icon: 'fa-cloud-sun' },
        { day: 'Minggu', temp: '14°C', icon: 'fa-sun' }
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
    initKawahPutihMap();
    displayKawahPutihWeather();
    
    const slider = document.querySelector('#kawah-putih-forecast-slider');
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
