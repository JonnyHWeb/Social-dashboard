//Toggle the theme between dark/light
function themefunction() {

var element = document.querySelectorAll(".card");
  for (i = 0; i < element.length; ++i) {
    element[i].classList.toggle("card__dark");
  }
  var element = document.querySelectorAll(".card-container");
  for (i = 0; i < element.length; ++i) {
    element[i].classList.toggle("card-container__dark");
  }
}
