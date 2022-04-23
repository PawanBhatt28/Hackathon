// Initialize and add the map

let c = 1;

function changeMap() {
    const mapAdd = [
        'https://www.google.com.qa/maps/d/u/0/embed?mid=10FZeNZd1o9xyLj7UZE2ZZ6rQcojVVVM7&ehbc=2E312F',
        'https://www.google.com.qa/maps/d/u/0/embed?mid=1pdDezt7lGJI8iUREZMIaALFH3vfN4SA8&ehbc=2E312F',
    ];
    let map = document.querySelector('#map');
    if (c % 2 == 0) {
        map.querySelector('iframe').src = mapAdd[0];
    } else {
        map.querySelector('iframe').src = mapAdd[1];
    }
    c++;
}
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

const accept = document.getElementsByClassName('acc');
// const accept2 = document.querySelector('.container-fluid');

// console.log(accept2);
const decline = document.getElementsByClassName('dec');
// console.log(decline);

// console.log(map);
let count = 0;
let orderLeft = 4;
// let hideArray = [1, 0, 0, 0, 0];
function accClick() {
    let map = document.querySelector('#map');
    let oLeft = document.querySelector('.oLeft');
    oLeft.innerHTML = 'Orders Left : ' + orderLeft;
    orderLeft--;

    let orderArray = document.querySelectorAll('.orders');
    orderArray[count].classList.add('hideIt');
    orderArray[count + 1].classList.remove('hideIt');

    console.log(orderArray[count]);
    console.log(orderArray[count + 1]);

    // console.log(orderArray);
    let mapArray = [
        'https://www.google.com.qa/maps/d/u/0/embed?mid=1z7Pz88ulCtedPUq7zzKtgEUWBAC9zKSi&ehbc=2E312F',
        'https://www.google.com.qa/maps/d/u/0/embed?mid=1hwjwMJmEnfHQwCxuejtL9AEe10NjSSpe&ehbc=2E312F',
        'https://www.google.com.qa/maps/d/u/0/embed?mid=1SvtlhOYhdtolhsmF_U70JxLQLmmlAflw&ehbc=2E312F',
        'https://www.google.com.qa/maps/d/u/0/embed?mid=14swdl2EmnROpMDAgfyDI2mo1q-zCrvUw&ehbc=2E312F',
        'https://www.google.com.qa/maps/d/u/0/embed?mid=1TCGgPJBrparS-6_0XhuRIrRWM01DUvaz&ehbc=2E312F',
    ];
    console.log(count);
    if (count >= 0) {
        map.querySelector('iframe').src = mapArray[count];
        
    } else {
        alert('All orders done!');
        count = 0;
        orderLeft = 4;
        return;
    }
    count++;
    // console.log(map.querySelector('iframe'));
}
