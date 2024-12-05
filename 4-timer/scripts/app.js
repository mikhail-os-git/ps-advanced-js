 'use strict';

const page = {
  months: document.getElementById('months'),
  days: document.getElementById('days'),
  hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds'),
}

// Не разобрался как сделать с интернализацией, сделал вручную
// const options = {
//   second:'numeric',
//   minute:'numeric',
//   hour:'numeric',
//   day:'numeric',
//   month:'numeric'
// }


function timeLeft() {
  const current = new Date();
  const newYear = new Date(current.getFullYear() + 1, 0, 1);
  const left = newYear - current;
  const months = Math.floor(left / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor(left / (1000 * 60 * 60 * 24));
  const hours = Math.floor((left / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((left / (1000 * 60)) % 60);
  const seconds = Math.floor((left / 1000) % 60);
  
	page.months.innerText = months;
  page.days.innerText = days;
  page.hours.innerText = hours;
  page.minutes.innerText = minutes;
  page.seconds.innerText = seconds;
}


setInterval(timeLeft, 1000);
timeLeft();