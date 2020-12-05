window.onload = () => {
  createCalendarDays();
  createHolidayButton('Feriados');
  changeHolidayBackgroundColor();
  createfridayButton('Sexta-feira');
  changeTextToFriday();
  zoomIn();
  zoomOut();
  tasks('codar');
  createLabel('cyan');
  selectTask();
  
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

function changeHolidayBackgroundColor() {
  let btnHoliday = document.querySelector('#btn-holiday');
  
  btnHoliday.addEventListener('click', () => {
    let holiday = document.querySelectorAll('.holiday');
    
    for (let index = 0; index < holiday.length; index += 1) {
      if (holiday[index].style.backgroundColor === 'cyan') {
        holiday[index].style.backgroundColor = 'rgb(238,238,238)';
      } else {
        holiday[index].style.backgroundColor = 'cyan';
      }
    }
  });
}

function createfridayButton(friday) {
  let btnFriday = document.createElement('button');
  btnFriday.id = 'btn-friday';
  btnFriday.innerHTML = friday;
  
  let buttonsContainer = document.querySelector('.buttons-container');
  buttonsContainer.appendChild(btnFriday); 
}

function changeTextToFriday() {
  let btnFriday = document.querySelector('#btn-friday');
  
  btnFriday.addEventListener('click', () => {
    let fridays = document.querySelectorAll('.friday');
    
    for (let index = 0; index < fridays.length; index += 1) {
      let friday = fridays[index];
      
      if (friday.innerText !== 'Sexta-feira') {
        friday.innerText = 'Sexta-feira';
      } else {
        switch (friday.previousElementSibling.innerText) {
          case '3':
            friday.innerText = '4';
            break;
          case '10':
            friday.innerText = '11';
            break;
          case '17':
            friday.innerText = '18';
            break;
          case '24':
            friday.innerText = '25';
            break;
        }
      }
    }
  });
}

function zoomIn() {
  let zoomIn = document.querySelector('#days');
  zoomIn.addEventListener('mouseover', (event) => {

  if (event.target.localName === 'li') {
     let zoomDay = event.target;
     zoomDay.style.fontSize = '35px'
  }
  });
}

function zoomOut() {
  let zoomOut = document.querySelector('#days');
  zoomOut.addEventListener('mouseout', (event) => {

  if (event.target.localName === 'li') {
    let zoomDay = event.target;
    zoomDay.style.fontSize = '20px'
  }
  });
}

function tasks(tasks) {
  let task = document.createElement('span');
  task.innerText = 'Terminar os exercícios que ficaram para trás.';

  let myTasks = document.querySelector('.my-tasks');
  myTasks.appendChild(task);
}

function createLabel(colorLabel) {
  let label = document.createElement('div');
  label.className = 'task';
  label.style.backgroundColor = colorLabel;

  let myTasks = document.querySelector('.my-tasks');
  myTasks.appendChild(label);
}

function selectTask() {
  let label = document.querySelector('.my-tasks > div');
  label.addEventListener('click', () => {
    
    if (label.className === 'task') {
      label.className = 'task selected';
    } else {
      label.className = 'task';
    }
  });
}