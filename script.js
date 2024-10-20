// Actualiza la hora y la fecha
function updateTimeAndDate() {
    const now = new Date();
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");

    // Hora y fecha en formato español
    const time = now.toLocaleTimeString('es-ES');
    const date = now.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    timeElement.innerHTML = `Hora: ${time}`;
    dateElement.innerHTML = `Fecha: ${date}`;
}

// Obtener ubicación del usuario
function updateLocation() {
    const locationElement = document.getElementById("location");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude.toFixed(2);
            const lon = position.coords.longitude.toFixed(2);
            locationElement.innerHTML = `Ubicación: Latitud ${lat}, Longitud ${lon}`;
        }, () => {
            locationElement.innerHTML = "Ubicación: No se pudo obtener la ubicación.";
        });
    } else {
        locationElement.innerHTML = "Ubicación: Geolocalización no soportada.";
    }
}

// Actualizar cada segundo
setInterval(updateTimeAndDate, 1000);
updateLocation();
