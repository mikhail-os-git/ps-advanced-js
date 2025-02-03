'use strict';

const page = {
	title: {
		text: document.getElementById('text'),
		desc: document.getElementById('desc')
	},
	coordinates: {
		latitude: document.getElementById('latitude'),
		longitude: document.getElementById('longitude')
	},
	city: document.getElementById('city')
}

function myPosition() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => resolve(position),
            (error) => reject(error)
        );
    });
}

async function getCityFromCoordinates() {
    let data;
    try {
        data = await myPosition();
				console.log(data)
    } catch (err) {
        console.log("Ошибка получения координат:", err);
        return;
    }

    const { latitude, longitude } = data.coords;
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

    let city;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Ошибка запроса: ' + response.status);
        }
        const json = await response.json();
        city = json.address.city || json.address.town || json.address.village;
    } catch (err) {
        console.log("Ошибка получения города:", err);
    }

    detection(latitude, longitude, city);
}


function detection(latitude, longitude, city){
	const text = latitude && longitude && city ? 'Вас обнаружили!' : 'Вы небыли обнаружены';
	const desc = latitude && longitude && city ? 'НЕ НАДО ЗЛИТЬ НАС' : 'будем считать что вам повезло...пока';
	if (latitude && longitude && city) {
        page.coordinates.latitude.innerText = latitude;
        page.coordinates.longitude.innerText = longitude;
				page.city.innerText = city;
    }

	page.title.text.innerText = text;
	page.title.desc.innerText = desc;
}

getCityFromCoordinates();
