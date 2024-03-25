document.addEventListener("DOMContentLoaded", function() {
  showSlides();
  const carouselContainer = document.querySelector('.content');
  carouselContainer.addEventListener('click', changeSlideOnClick);

  setInterval(showSlides, 15000); 
});

let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
      slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
}

function changeSlideOnClick() {
  showSlides();
}
document.addEventListener("DOMContentLoaded", function() {
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

document.querySelectorAll(".psidenav a").forEach(anchor => {
  anchor.onmouseover = event => {  
    let iteration = 0;
    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
      
      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 /3;
    }, 30);
    
  }
  anchor.addEventListener('mouseleave', event => {
    clearInterval(interval);
    event.target.innerText = event.target.dataset.value;
});
});
});
function toggleNav() {
  var sidenav = document.getElementById("sidenav");
  if (sidenav.style.width === "250px") {
      sidenav.style.width = "0";
  } else {
      sidenav.style.width = "250px";
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  body.addEventListener('mousemove', (e) => {
      const maxX = window.innerWidth;
      const bgWidth = body.offsetWidth;
      const x = e.clientX;
      const percent = (x / maxX) * 100;
      const bgPosition = -((bgWidth - maxX) * percent / 100);
      body.style.backgroundPositionX = `${bgPosition}px`;
  });
});