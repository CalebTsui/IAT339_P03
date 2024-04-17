'use strict';

console.log("JavaScript for Hamburger menu is running.");

hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    navBar = document.querySelector(".nav-bar"); 
    navBar.classList.toggle("active");
    
}