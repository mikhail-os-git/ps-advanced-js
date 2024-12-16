'use strict';

const page = {
  months: document.getElementById('months'),
  days: document.getElementById('days'),
  hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds'),
	today: document.getElementById('today')
}

const options = {
  dateStyle: 'full',
	timeStyle: 'long',
  // timeZone: 'Europe/Moscow',
};


let language = navigator.language;

const newYear = new Date(`${new Date().getFullYear() + 1}-01-01T00:00:00`);

//Динамически задать дату, в зависимости от часового пояса
function getTimeInTimeZone(location, timeZone) {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat(location, {
    timeZone: timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  });

  const parts = formatter.formatToParts(now);
  const year = parts.find((part) => part.type === 'year')?.value;
  const month = parts.find((part) => part.type === 'month')?.value.padStart(2, '0');
  const day = parts.find((part) => part.type === 'day')?.value.padStart(2, '0');
  const hour = parts.find((part) => part.type === 'hour')?.value.padStart(2, '0');
  const minute = parts.find((part) => part.type === 'minute')?.value.padStart(2, '0');
  const second = parts.find((part) => part.type === 'second')?.value.padStart(2, '0');
  return `${year}-${month}-${day}T${hour}:${minute}:${second}`;
}


let today = new Date(getTimeInTimeZone(language, options.timeZone));
let left = newYear - today;
const interval = setInterval(() => {
	timeLeft(left -= 1000,)
}, 1000);


function timeLeft(diff) {
	const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
	const days = Math.floor(diff / (1000 * 60 * 60 * 24));
	const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
	const minutes = Math.floor((diff/ (1000 * 60)) % 60);
	const seconds = Math.floor((diff / 1000) % 60);
	
	page.months.innerText = months;
  page.days.innerText = days;
  page.hours.innerText = hours;
  page.minutes.innerText = minutes;
  page.seconds.innerText = seconds;

	page.today.innerHTML = Intl.DateTimeFormat(language, options).format(new Date());
}

timeLeft(left);

