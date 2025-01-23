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

function getCityFromCoordinates(latitude, longitude) {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

    return fetch(url)
        .then(response => 
				{
					if(!response.ok){
						throw new Error('Error: '+response.status);
					}
					return response.json()
				}).then(data => {
						if(!data)
						{
							throw new Error('Error: '+ data.status);
						}
								return data.address.city || data.address.town || data.address.village;
						});
}


let latitude;
let longitude;

myPosition()
    .then(({ coords: { latitude: lat, longitude: lon } }) => {
        latitude = lat;
        longitude = lon;
    })
    .catch(error => {
        console.error('Ошибка получения геопозиции:', error);
    });

setTimeout(() => {
    console.log(`Широта: ${latitude}, Долгота: ${longitude}`);

    getCityFromCoordinates(latitude, longitude)
        .then(geo => {
            setTimeout(() => {
                console.log(geo);
									detection(latitude, longitude, geo);
            }, 1000);
        })
        .catch(error => {
            console.error('Ошибка получения геопозиции:', error);
        });
}, 1000);



function detection(latitude, longitude, city){
	const text = latitude && longitude && city ? 'Вас обнаружили!' : 'Вы небыли обнаружены';
	const desc = latitude && longitude && city ? 'НЕ НАДО ЗЛИТЬ НАС' : 'будем считать что вам повезло...пока';
	if (latitude && longitude && city) {
        page.coordinates.latitude.innerText = latitude;
        page.coordinates.longitude.innerText = longitude;
				page.city.innerText = city;
    }

    // if (city !== null) {
    //     page.city.innerText = city;
    // }

	page.title.text.innerText = text;
	page.title.desc.innerText = desc;
}