function addClassScroll(selector) {

  const navbarElement = document.querySelector(selector);

  let navbarSourceBottom = navbarElement.getBoundingClientRect().bottom + window.pageYOffset;

  window.onscroll = function() {
    if (navbarElement.classList.contains('fixed') && window.pageYOffset < navbarSourceBottom) {
      navbarElement.classList.remove('fixed');
    } else if (window.pageYOffset > navbarSourceBottom) {
      navbarElement.classList.add('fixed');
    }
  };
}

export default addClassScroll;