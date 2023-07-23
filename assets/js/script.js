const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load" , () => {
    preloader.classList.add("remove");
})


 /**
  * add event on multiple elements
  */

 const addEventOnElements = function (elements , eventType,callback){
     for(let i = 0, len = elements.length; i < len; i++ ){
         elements[i].addEventListener(eventType,callback);
     }
 }



/**
 * Nav bar toggle for mobile
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[ data-overlay]");


const toggleNav = function(){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}


addEventOnElements(navTogglers,"click", toggleNav);



/**
 * Header
 */


const header = document.querySelector("[data-header]");

window.addEventListener("scroll",function() {

    header.classList[window.scrollY > 100 ? "add" : "remove"]("active");

})


/**
 * counter up
 * 
 */

 let valueDisplays = document.querySelectorAll(".counter");
 let interval = 5000;

 valueDisplays. forEach ((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math. floor (interval / endValue);
    let counter = setInterval (function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
        clearInterval (counter);
       }
    },duration);
});





