AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

//  Change Theme attempt 

// var r = document.querySelector(':root');

// // Create a function for getting a variable value

//   // Get the styles (properties and values) for the root
//   var rs = getComputedStyle(r);
//   // Alert the value of the --blue variable
//   alert("The value of brand is: " + rs.getPropertyValue('--color-brand')+" and he value of brand2 is: " + rs.getPropertyValue('--color-brand2'));


// // Create a function for setting a variable value
// function myFunction_set() {
//   // Set the value of variable --blue to another value (in this case "lightblue")
//   r.style.setProperty('--blue', 'lightblue');
// }

const changeColorOrange = document.getElementById('oc');
const changeColorBlue = document.getElementById('bc');
const changeColorGreen = document.getElementById('gc');
const mainPhoto = document.getElementById('mainphoto');

changeColorOrange.addEventListener('click', () => {
  document.documentElement.style.setProperty('--color-brand', '#FF5722');
  document.documentElement.style.setProperty('--color-brand2', '#fa3a00');
  document.documentElement.style.setProperty('--bg-image', 'url(../images/sidebarorange.jpg)');
  mainPhoto.src = 'assets/images/faresorange.jpg';
});

changeColorBlue.addEventListener('click', () => {
  document.documentElement.style.setProperty('--color-brand', '#6a48ee');
  document.documentElement.style.setProperty('--color-brand2', '#4D26E5');
  document.documentElement.style.setProperty('--bg-image', 'url(../images/sidebarblue.jpg)');
  mainPhoto.src = 'assets/images/faresblue.jpg';

});

changeColorGreen.addEventListener('click', () => {
    document.documentElement.style.setProperty('--color-brand', '#5ee891');
    document.documentElement.style.setProperty('--color-brand2', '#24c45e');
    document.documentElement.style.setProperty('--bg-image', 'url(../images/sidebargreen.jpg)');
    mainPhoto.src = 'assets/images/faresgreen.jpg';
  
  });