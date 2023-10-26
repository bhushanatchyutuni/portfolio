/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav_menu'),
     navToggle=document.getElementById('nav_toggle'),
     navClose=document.getElementById('nav_close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        // adds a new class called show_menu to navmenu Element where classlist return a list of classes present to particular element
        navMenu.classList.add('show_menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show_menu')
    })
}
 
/*==================== REMOVE MENU MOBILE ====================*/
const navLink=document.querySelectorAll('.nav_link')
function link(){
    const navMenu=document.getElementById('nav_menu')
    navMenu.classList.remove('show_menu')
}
navLink.forEach(n=>n.addEventListener('click',link))

/*==================== ACCORDION SKILLS ====================*/
const skillscontent=document.getElementsByClassName('skills_content'),
      skillsheader=document.querySelectorAll('.skills_header')
function toggleskills(){
    let item=this.parentNode.className
    for(let i=0;i<skillscontent.length;i++){
        skillscontent[i].className='skills_content skills_close'
    }
    if(item === 'skills_content skills_close'){
        this.parentNode.className='skills_content skills_open'
    }
}
skillsheader.forEach((el)=>{
    el.addEventListener('click',toggleskills)
})
/*==================== QUALIFICATION TABS ====================*/
const tabs=document.querySelectorAll('[data-target]'),
      tabcontent=document.querySelectorAll('[data-content]')
tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
        const targetId=tab.dataset.target;
        const target=document.querySelector(targetId);
        tabcontent.forEach(tabcontent=>{
            tabcontent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')
        tab.forEach(tab=>{
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})
/*==================== CERTIFICATIONS ====================*/
var certButtons = document.querySelectorAll('.cert_button');
    // Add a click event listener to each button
    certButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Get the data-link attribute value from the clicked button
            var link = button.getAttribute('data-link'); 
            // Redirect to the specified URL when the button is clicked
            window.open(link,'_blank');
        });
    });
/*==================== PORTFOLIO SWIPER  ====================*/  
const wrapper = document.querySelector(".swiper-wrapper");
const slides = document.querySelectorAll(".swiper-slide");
const totalSlides = slides.length;
let currentIndex = 0;

function updateSlider() {
    const slideWidth = slides[currentIndex].offsetWidth;
    wrapper.style.transform = `translateX(-${slideWidth * currentIndex}px`;
}

const prevButton = document.querySelector(".swiper-button-prev");
const nextButton = document.querySelector(".swiper-button-next");

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
    updateDotStyles();
});

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
    updateDotStyles();
});
const dotContainer = document.querySelector(".swiper-dots");
const dots = Array.from(slides).map(() => document.createElement("div"));

dots.forEach((dot, index) => {
    dot.classList.add("swiper-dot");
    dotContainer.appendChild(dot);

    dot.addEventListener("click", () => {
        currentIndex = index;
        updateSlider();
        updateDotStyles();
    });
});

function updateDotStyles() {
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
    });
}
updateSlider();
updateDotStyles();

/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 