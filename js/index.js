var i = 0;
var txt = 'We do not just write code, we build technical solutions for businesses'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();


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

