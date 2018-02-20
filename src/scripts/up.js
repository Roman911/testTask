function up(id, time) {
  const button = document.getElementById(id);

  function vverh() {
    window.scrollBy(0,time);
    if (window.pageYOffset > 0) {requestAnimationFrame(vverh);}
  }

  button.addEventListener('click', function (e) {
    e.preventDefault();
    vverh();
  }, false);
}

export default up;

