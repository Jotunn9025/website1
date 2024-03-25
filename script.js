document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".float");
    let delay = 0;
    
    images.forEach((img, index) => {
        setTimeout(() => {
            img.style.opacity = "1";
        }, delay);
        
        delay += 500;
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

const interestsSection = document.querySelector(".interests");
    const interestsParagraph = interestsSection.querySelector("p");

    setTimeout(() => {
        interestsSection.style.opacity = "1";
        interestsParagraph.style.opacity = "1";
    }, 1000); 
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;
    
    document.querySelectorAll(".sidenav a").forEach(anchor => {
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
    