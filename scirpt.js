const backToTopButton = document.querySelector("#back-to-top-btn");
















window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) {
    // Show backToTopButton
    if (!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  } else {
    // Hide backToTopButton
    if (backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function () {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

// function backToTop() {
//   window.scrollTo(0, 0);
// }

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;

  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(
      0,
      easeInOutCubic(progress, startPosition, distance, duration)
    );
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t + 2) + b;
}

$(document).ready(function () {
  $("#owl-demo").owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    responsiveClass: true,
    items: 2,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
  });
});

$(document).ready(function () {
  $("#owl-demo2").owlCarousel({
    navigation: true,
    responsiveClass: true,
    items: 4,
  });
});



let card = document.querySelector(".x");
let button = document.querySelector('#photo1');

button.addEventListener("click", ()=>{
 
  card.classList.add("active")

  card2.classList.remove("active");
  card4.classList.remove("active");
  card5.classList.remove("active");
  card6.classList.remove("active");
 

})



let card2 = document.querySelector(".y");
let button2 = document.querySelector('#photo2');

button2.addEventListener("click", ()=>{
 
  card2.classList.add("active")
  card.classList.remove("active");
  card3.classList.remove("active");
  card4.classList.remove("active");
  card5.classList.remove("active");
  card6.classList.remove("active");
 

})

var x;
let card3 = document.querySelector(".z");
let button3 = document.querySelector('#photo3');

button3.addEventListener("click", ()=>{
 

 
  
  
  
  card3.classList.add("active")

  card.classList.remove("active");
  card2.classList.remove("active");
  card4.classList.remove("active");
  card5.classList.remove("active");
  card6.classList.remove("active");
 




})



let card4 = document.querySelector(".h");
let button4 = document.querySelector('#photo4');

button4.addEventListener("click", ()=>{
 
  card4.classList.add("active")
  card.classList.remove("active");
  card2.classList.remove("active");
  card3.classList.remove("active");
  card5.classList.remove("active");
  card6.classList.remove("active");
 

})


let card5 = document.querySelector(".j");
let button5 = document.querySelector('#photo5');

button5.addEventListener("click", ()=>{
 
  card5.classList.add("active")
  card.classList.remove("active");
  card2.classList.remove("active");
  card4.classList.remove("active");
  card3.classList.remove("active");
  card6.classList.remove("active");
 

})


let card6 = document.querySelector(".k");
let button6 = document.querySelector('#photo6');

button6.addEventListener("click", ()=>{
 
  card6.classList.add("active")
  card.classList.remove("active");
  card2.classList.remove("active");
  card4.classList.remove("active");
  card5.classList.remove("active");
  card3.classList.remove("active");
 

})













  


  









