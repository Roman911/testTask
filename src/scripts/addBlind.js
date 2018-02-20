function addBlind(selector, btn, btn2) {
  const rootElement = document.querySelector(selector);
  const button3 = rootElement.querySelector(btn);
  const button4 = rootElement.querySelector(btn2);
  const addClass3 = rootElement.querySelector('.addClass2');

  function addClass2() {
    addClass3.classList.add('showed');
  }

  function removeClass2() {
    addClass3.classList.remove('showed');
  }

  button3.addEventListener('click', function () {
    addClass2();
    console.log(10);
  });

  button4.addEventListener('click', function () {
    removeClass2();
    console.log(15);
  });

}

export default addBlind;