//Toggle the theme between dark/light
function themefunction() {

var element = document.querySelectorAll(".card");
  for (i = 0; i < element.length; ++i) {
    element[i].classList.toggle("card__dark");
  }
}
