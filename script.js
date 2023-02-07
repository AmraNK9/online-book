// JavaScript code to handle chapter navigation
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("#book-nav a");
    navLinks.forEach(function(navLink) {
      navLink.addEventListener("click", function(event) {
        event.preventDefault();
        const targetChapter = document.querySelector(navLink.getAttribute("href"));
        targetChapter.scrollIntoView({ behavior: "smooth" });
      });
    });
  });

  //add Toggle button on slide
  const toggleButton = document.querySelector('.toggle-aside');
const aside = document.querySelector('aside');
const main = document.querySelector('main')

toggleButton.addEventListener('click', function () {
  aside.classList.toggle('show-aside');
  main.classList.toggle('margin-left')
});

//toggle btn for btn-group
$(".toggle-btn").click(function () {
  $(".fixed-btns").toggle();
});

//slider
const slider = document.querySelector('.slider');
const valueDisplay = document.querySelector('.value');

slider.addEventListener('input', function() {
  valueDisplay.textContent = this.value;

});



//slider toggle btn
const font_size_btn = document.querySelector('#Font-Size')
const font_size_slider = document.querySelector('#font-size-slider')
font_size_btn.addEventListener('click',(e)=>{
  font_size_slider.classList.toggle('hide');
})
//slider toggle btn
const Line_height_btn = document.querySelector('#Line-Height')
const Line_Height_slider = document.querySelector('#line-hight-slider')
Line_height_btn.addEventListener('click',(e)=>{
Line_Height_slider.classList.toggle('hide');
})

// to adj font and other properties


//font size slider
font_size_slider.children[1].addEventListener('change',()=>{  
  main.style.fontSize = font_size_slider.children[1].value + 'px'
})

//line height slider 
Line_Height_slider.children[1].addEventListener('change',()=>{
  main.style.lineHeight = Line_Height_slider.children[1].value + 'px'
  
})

//slider2`
const valueDisplay2 = document.querySelector('.value2');


Line_Height_slider.children[1].addEventListener('input', function() {
  valueDisplay2.textContent = this.value;
});

//theme toggle btn
const thame_btn = document.querySelector('#theme-togle-btn')
const thame_group = document.querySelector('#theme-btn')
let isoff =true;

thame_btn.addEventListener('click',(e)=>{
 
  thame_group.style.display = 'flex';
  isoff = false;
 

})

// dismis slider
window.addEventListener('click',(e)=>{
  if(e.target != font_size_btn ){
    font_size_slider.classList.remove('hide');
  }
  if(e.target != Line_height_btn){
    Line_Height_slider.classList.remove('hide')
  }
  if(e.target != thame_btn){
    thame_group.style.display = 'none'

  }
})

//thame change

const Dark = document.querySelector('#Dark')

Dark.addEventListener('click',()=>{
  main.classList.remove('Light');
  main.classList.remove('Comfort');
  main.classList.add('Dark')
})

const Light = document.querySelector('#Light');

Light.addEventListener('click',()=>{
  main.classList.remove('Dark');
  main.classList.remove('Comfort');
  main.classList.add('Light')
})

const Comfort = document.querySelector('#Comfotable');

Comfort.addEventListener('click',()=>{
  main.classList.remove('Dark');
  main.classList.remove('Light');
  main.classList.add('Comfort')
})

//scroll down in hide
const nav = document.querySelector('.toggle-btn')
let Previous = 0;
setInterval(()=>{
if(Previous < window.pageYOffset){
  toggleButton.classList.add('d-none')
  nav.classList.add('d-none')
}
else{
  toggleButton.classList.remove('d-none')
  nav.classList.remove('d-none')
}
Previous = window.pageYOffset;

},300)