$(document).ready(function(){
    
    
    


const nav = document.querySelectorAll('.nav-link')

console.log("it works")

function handleNavLinkClick(event){
  const current = document.querySelector(".activeItem")
  current.classList.remove('activeItem')
  event.target.classList.add('activeItem')
}

nav.forEach(function(link){
  link.addEventListener('click', handleNavLinkClick);
});

    
var typed = new Typed(".demo",{
    strings: [" We design," ,"We build,","We deploy"],
    smartBackspace:true,
    typeSpeed:100,
    backSpeed:100,
    loop:true,
    loopCount:Infinity,
    startDelay:100
    
    
});
});