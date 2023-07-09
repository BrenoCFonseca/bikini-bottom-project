window.addEventListener('scroll', function () {
  var image = document.querySelector(".submarino");
  var scrollPosition = window.innerHeight + window.pageYOffset;
  var documentHeight = document.documentElement.scrollHeight;

  if (scrollPosition >= documentHeight) {
    image.style.opacity = 0;
    image.style.display = none;
  } else {
    image.style.opacity = 1;
  }
});

const onda1 = document.getElementById("onda1");
const onda2 = document.getElementById("onda2");
const onda3 = document.getElementById("onda3");
const onda4 = document.getElementById("onda4");

window.addEventListener('scroll', function() {
  let rolagemPos = window.scrollY

  onda1.style.backgroundPosition = 50 + rolagemPos * 4 + 'px'
  onda2.style.backgroundPosition = 150 + rolagemPos * 5 + 'px'
  onda3.style.backgroundPosition = 250 + rolagemPos * 6 + 'px'
  onda4.style.backgroundPosition = 350 + rolagemPos * 7 + 'px'

})