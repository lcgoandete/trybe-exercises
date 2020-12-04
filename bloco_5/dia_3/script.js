window.onload = function() {
  createCalendarDays();
  createHolidayButton('Feriados');
  
}

function createCalendarDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const days = document.querySelector('#days');
  
  for (const day of dezDaysList) {
    let dayTemp = document.createElement('li');
    dayTemp.innerText = day;
    dayTemp.className = 'day';
    
    switch (day) {
      case 4:
        dayTemp.className = 'day friday';
        break;
      case 11:
        dayTemp.className = 'day friday';
        break;
      case 18:
        dayTemp.className = 'day friday';
        break;
      case 24:
        dayTemp.className = 'day holiday';
        break;
      case 25:
        dayTemp.className = 'day holiday friday';
        break;
      case 31:
        dayTemp.className = 'day holiday';
        break;
    }
    days.appendChild(dayTemp);
  }
}

function createHolidayButton(holiday) {
  let btnHoliday = document.createElement('button');
  btnHoliday.id = 'btn-holiday';
  btnHoliday.name = holiday;
  btnHoliday.innerHTML = holiday;
  
  let buttonsContainer = document.querySelector('.buttons-container');
  buttonsContainer.appendChild(btnHoliday); 
}