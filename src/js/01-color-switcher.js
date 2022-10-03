  const refs = {
    btnStart: document.querySelector(`[data-start]`),
    btnStop: document.querySelector(`[data-stop]`),
    bodyStyle: document.querySelector('body'),
  };
  
  let colorId = null;
  let cheker = true;
  
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  const startSwitchColor = () => {
    if (cheker) {
      cheker = false;
      colorId = setInterval(() => {
        let randomColor = [getRandomHexColor()];
        refs.bodyStyle.style.backgroundColor = randomColor;
      }, 1000);
    }
  };
  
  const stopSwitchColor = () => {
    cheker = true;
    clearInterval(colorId);
  };
  
  refs.btnStart.addEventListener('click', startSwitchColor);
  
  refs.btnStop.addEventListener('click', stopSwitchColor);