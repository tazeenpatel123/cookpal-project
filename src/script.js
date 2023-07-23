// for Menu Button or Mobile nav

let menuBtn = document.querySelector(".menu__icon");
let mobileNav = document.querySelector(".Mobile__nav");

mobileNav.style.transition = "all 0.5s ease";

let isNavOpen = false;

menuBtn.addEventListener("click", () => {

    if(isNavOpen === false){
        mobileNav.style.display = "block";
        isNavOpen = true
    } else if(isNavOpen === true){
        mobileNav.style.display = "none";
        isNavOpen = false
    }
})

// Changing the image of hero section

let heroImg = document.querySelector(".hero__img img");

