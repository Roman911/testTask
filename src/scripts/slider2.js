function slider2(cssSelectorOfElement, interval = 5000) {
  const parentContainer = document.querySelector(cssSelectorOfElement);
  const slides = document.querySelectorAll('.slider2__slides .slider2__slides_slide');

  let slideInterval = setInterval(nextSlide, interval);
  let currentSlide = 0;
  let isEnabled = false;
  let next = document.getElementById('next2');
  let previous = document.getElementById('previous2');
  let playing = true;

  function nextSlide(){
    goToSlide(currentSlide+1);
  }

  function previousSlide(){
    goToSlide(currentSlide-1);
  }

  function goToSlide(n){
    slides[currentSlide].className = 'slider2__slides_slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slider2__slides_slide showing';
  }

  function pauseSlideshow(){
    playing = false;
    clearInterval(slideInterval);
  }

  function playSlideshow(){
    playing = true;
    slideInterval = setInterval(nextSlide, interval);
  }

  next.addEventListener('click', function(){
    nextSlide();
  });

  previous.addEventListener('click', function(){
    previousSlide();
  });

  parentContainer.addEventListener('mouseenter', function () {
    clearInterval(slideInterval);
  });

  parentContainer.addEventListener('mouseleave', function () {
    isEnabled = !isEnabled;
    if(isEnabled) {
      playSlideshow();
    }
  });
}

export default slider2;