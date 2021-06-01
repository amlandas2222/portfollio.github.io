const texts = ['Amlan','Das','Mugdha'];
let count = 0;
let index = 0;
let letter = '';
(function type() {
  if (count === texts.length) {
    count = 0; 
  }
  currentText = texts[count];
  letter = currentText.slice(0,++index);
  
  document.querySelector('.typing').textContent = letter;
  if (letter.length === currentText.length){
    count++;
    let currentText = '';
    index = 0;
    
  }
  
  setTimeout(type,1000);
}());

let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
//   .to(".rock", 10, { y: -300 })
// .to(".about", 10, { y: 50 }, "-=")

.fromTo(".amlan",{ y: -20 }, { y: 0, duration: 20 }, "-=10")
//   .fromTo(".intro", { y: -50 }, { y: 0, duration: 10 }, "-=10")

.to(".services", 50, { top: "0%" }, "-=3")
// .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 3 })
.fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 10 });

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "100%",
  triggerHook: 0,
})
.setTween(timeline)
.setPin("section")
.addTo(controller);









const hidden = () =>{
  const hide = ()=>{
const intro = document.querySelector('.intro');
const hidden = document.querySelector('.hidden');
const hiddenText = document.querySelector('.hidden-text');

hidden.addEventListener('click',()=>{
intro.classList.add('fadeout');
hiddenText.classList.add('fadein');
});



  }
  hide();
  }
  hidden();

  const healthyBurger = ()=>{

    const burgerTime =()=>{
      const navLi = document.querySelector('.add');
      const burger = document.querySelector('.burger');
      
      burger.addEventListener('click',()=>{
        navLi.classList.add('nav-in');
        
      });
      
    };
    
    burgerTime();
  };
  healthyBurger();