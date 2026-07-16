// ======================================
// PACE Growth Studio
// Interactive Features
// ======================================



// MOBILE MENU

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});





// SCROLL REVEAL ANIMATION


const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }


    });


},
{
    threshold:0.15
});



sections.forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});






// CONTACT FORM


const form = document.querySelector("form");


form.addEventListener("submit",(event)=>{


    event.preventDefault();


    const button = form.querySelector("button");


    button.innerHTML="Request Received ✓";


    button.style.background="#16a34a";


    form.reset();


});






// NAVBAR COLOR CHANGE


window.addEventListener("scroll",()=>{


    const header=document.querySelector("header");


    if(window.scrollY > 50){

        header.style.background="rgba(5,5,5,0.95)";

    }

    else{

        header.style.background="rgba(5,5,5,0.7)";

    }


});