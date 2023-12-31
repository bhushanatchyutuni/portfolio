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
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections=document.querySelector('section[id]')
function scrollActive(){
    const scrollY=window.pageYOffset
    sections.forEach(current=>{
        const sectionHeight=current.offsetHeight
        const sectionTop=current.offsetTop-50;
        sectionId=current.getAttribute('id')
        if(scrollY>sectionTop&&scrollY <=sectionTop+sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)
/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav=document.getElementById('header')
    if(this.scrollY>=80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)
/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp=document.getElementById('scroll-up');
    if(this.scrollY>=560)
    scrollUp.classList.add('show-scroll');
    else
    scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll',scrollUp)
/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'
// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'
// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}
// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})