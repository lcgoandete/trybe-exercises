const selectedLayout = document.querySelector('#selected-layout');
selectedLayout.addEventListener('change', () => selectLayout(selectedLayout.value));

function selectLayout(chosenLayout) {
  switch (chosenLayout) {
    case '1':
      layout1();
      break;
  }
}

const layout = {
  backgroundColor: 'white',
  titleColor: 'black',
  fontColor: 'black',
  fontSize: '18px',
  lineHeight:'25px',
  fontFamily: 'sans-serif'
}

function layout1() {
  const body = document.querySelector('body');
  body.style.backgroundColor = layout.backgroundColor;

  const headerTitle = document.querySelector('header h1');
  headerTitle.style.color = layout.titleColor;

  const main = document.querySelector('main');
  main.style.color = layout.fontColor;
  main.style.fontSize = layout.fontSize;
  main.style.lineHeight = layout.lineHeiht;
  main.style.fontFamily = layout.fontFamily;
}

function saveLayout() {
  localStorage.setItem('layout', JSON.stringify(layout));
}

window.onload = () => {
  const sss = localStorage.getItem('layout');
  console.log(sss);
}


