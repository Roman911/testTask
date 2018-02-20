function slider(cssSelectorOfElement, interval = 5000) {
  const parentContainer = document.querySelector(cssSelectorOfElement);
  const slides = document.querySelectorAll('.slider__slides .slider__slides_slide');

  let slideInterval = setInterval(nextSlide, interval);
  let currentSlide = 0;
  let isEnabled = false;
  let next = document.getElementById('next');
  let previous = document.getElementById('previous');
  let playing = true;

  function nextSlide(){
    goToSlide(currentSlide+1);
  }

  function previousSlide(){
    goToSlide(currentSlide-1);
  }

  function goToSlide(n){
    slides[currentSlide].className = 'slider__slides_slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slider__slides_slide showing';
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

export default slider;