let currentIndex = 1;
showSlide(currentIndex);

function showSlide(index) {
  const slideItems = document.getElementsByClassName("slide-item");
  const slideDots = document.getElementsByClassName("slide-dot-item");

  if (index > slideItems.length) {
    currentIndex = 1;
  }
  if (index < 1) {
    currentIndex = slideItems.length;
  }
  for (let i = 0; i < slideItems.length; i++) {
    slideItems[i].style.display = "none";
    slideDots[i].className = "slide-dot-item";
  }

  slideItems[currentIndex - 1].style.display = "block";
  slideDots[currentIndex - 1].className += " actived";
}

document.getElementById("arrow-left").addEventListener("click", function () {
  arrowAction(-1);
});

document.getElementById("arrow-right").addEventListener("click", function () {
  arrowAction(1);
});

function arrowAction(number) {
  showSlide((currentIndex += number));
}

function dotPicker(slideIndex) {
  showSlide((currentIndex = slideIndex));
}
