socialUpdater();


//Toggle the theme between dark/light
function themefunction() {

  var element = document.querySelectorAll(".container");
  for (i = 0; i < element.length; ++i) {
    element[i].classList.toggle("container__dark");
  }
}



//Update social scores
function socialUpdater() {
var numbers= document.querySelectorAll('.social-update');

for (i = 0; i < numbers.length; ++i) {
  
  var a = numbers[i].textContent;
  if(a.charAt(0)=='-'){
    numbers[i].style.color = "red";
    a = a.substring(1);
    numbers[i].firstChild.data = a;
    numbers[i].classList.add("social-update__negative");
  } 
  else if (a.charAt(0)=='0') {
     numbers[i].style.color = "black";
   }
    else {
      numbers[i].style.color = "green";
      numbers[i].classList.add("social-update__positive");
    }
  }
}