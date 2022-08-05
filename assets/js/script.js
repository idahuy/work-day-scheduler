var now = moment();
var currentDayEl = document.getElementById('currentDay');
currentDayEl.textContent = moment(now).format('dddd, MMMM do');