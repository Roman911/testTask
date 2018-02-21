function addClass(selector, btn, addClass) {
  const rootElement = document.querySelector(selector);
  const button = rootElement.querySelector(btn);
  const modal = rootElement.querySelector(addClass);

  function addClassActive() {
    modal.classList.toggle('showed');
  }

  button.addEventListener('click', function () {
    addClassActive()
  });
}

export default addClass;
