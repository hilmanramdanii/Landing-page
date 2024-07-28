function initKawahRengganisMap() {
    var map = L.map('kawah-rengganis-map').setView([-7.172605980053328, 107.37720104053159], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    L.marker([-7.2009, 107.7306]).addTo(map)
        .bindPopup('Kawah Rengganis')
        .openPopup();
}

function displayKawahRengganisWeather() {
    const weatherContainer = document.getElementById('kawah-rengganis-weather');
    weatherContainer.innerHTML = `
        <div class="current-weather">
            <h4>Cuaca Hari Ini</h4>
            <div class="weather-icon"><i class="fas fa-cloud-sun"></i></div>
            <div class="temperature">14°C</div>
            <div class="condition">Berawan Sebagian</div>
        </div>
        <div id="kawah-rengganis-forecast-slider" class="forecast-slider"></div>
    `;
    
    const forecastSlider = document.getElementById('kawah-rengganis-forecast-slider');
    const forecasts = [
        { day: 'Selasa', temp: '12°C', icon: 'fa-cloud' },
        { day: 'Rabu', temp: '13°C', icon: 'fa-cloud-sun' },
        { day: 'Kamis', temp: '15°C', icon: 'fa-sun' },
        { day: 'Jumat', temp: '11°C', icon: 'fa-cloud-showers-heavy' },
        { day: 'Sabtu', temp: '14°C', icon: 'fa-cloud-sun' },
        { day: 'Minggu', temp: '13°C', icon: 'fa-cloud' }
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
    initKawahRengganisMap();
    displayKawahRengganisWeather();
    
    const slider = document.querySelector('#kawah-rengganis-forecast-slider');
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