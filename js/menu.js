
const navMenu = document.getElementById("mobile-nav");
const close =  document.getElementById("close-menu");
const open =  document.getElementById("open-menu");
const page =  document.getElementById("page");




function openMenu(){
    navMenu.style.display =  "block";
    page.style.overflowY = "hidden";
 
}


function closeMenu(){
    navMenu.style.display =  "none"
    page.style.overflowY = "scroll";
}

