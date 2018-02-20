function addClass(selector, btn, modal2) {
  const rootElement = document.querySelector(selector);
  const button = rootElement.querySelector(btn);
  const button2 = rootElement.querySelector('.btnClosed');
  const addClass1 = rootElement.querySelector('.addClass');
  const modal = rootElement.querySelector(modal2);

  function addClass() {
    addClass1.classList.add('showed');
  }

  function addModal() {
    modal.classList.add('showed2');
  }

  function removeClass() {
    addClass1.classList.remove('showed');
  }

  function removeModal() {
    modal.classList.remove('showed2');
  }

  function hiden() {
    document.body.style.overflow = 'hidden';
  }

  function removeHiden() {
    document.body.style.overflow = '';
  }

  button.addEventListener('click', function () {
    addClass();
    addModal();
    hiden();
  });

  button2.addEventListener('click', function () {
    removeClass();
    removeModal();
    removeHiden();
  });

}

export default addClass;