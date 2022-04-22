// Initialize and add the map
function initMap() {
    // The location of Uluru
    console.log('Herer');
    const uluru = { lat: 30.735233, lng: 76.740175 };

    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

window.initMap = initMap;
