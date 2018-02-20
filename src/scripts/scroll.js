function scroll(V) {
  const linkNav = document.querySelectorAll('[href^="#nav"]');
  for (let i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function (e) {
      e.preventDefault();
      let w = window.pageYOffset,  // прокрутка
        hash = this.href.replace(/[^#]*(.*)/, '$1');  // id элемента, к которому нужно перейти
      let t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
        start = null;
      requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
      function step(time) {
        if (start === null) start = time;
        let progress = time - start,
          r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
        window.scrollTo(0, r);
        if (r != w + t) {
          requestAnimationFrame(step)
        } else {
          location.hash = hash  // URL с хэшем
        }
      }
    }, false);
  }
}

export default scroll;