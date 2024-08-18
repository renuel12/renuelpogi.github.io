const wrapper = document. querySelector(".wrapper"); 
const question = document . querySelector(".question"); 

const gif = document . querySelector(".gif"); 
const yesBtn = document .querySelector(".yes-btn"); 
const noBtn = document .querySelector( ".no-btn");

yesBtn.addEventListener ("click" , () => {
     question.innerHTML = "opo pangako ikaw lang Iloveyouu mwa"; 
     question.innerHTML = "opo pangako ikaw lang Iloveyouu mwa fherthrty"; 
     gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp"; 
});
     noBtn.addEventListener("mouseover", () => { 
        const noBtnRect = noBtn.getBoundingClientRect();
         const maxX = window.innerWidth - noBtnRect.width; 
         const maxY = window.innerHeight - noBtnRect.height;

          const randomX = Math.fl0or (Math.random( ) * maxX ); 
          const randomY = Math.floor (Math.random() * maxY); 
          noBtn.style. left = randomX + "px"; 
          noBtn.style. top = randomY + "px"; 
        }); 