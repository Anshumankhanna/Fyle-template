let contactUs = document.querySelector("#contact-us");
let form = document.querySelector("form");
let flipImage = document.querySelectorAll(".flip-image");
let dots = document.querySelectorAll(".float > *");
let options = document.querySelectorAll(".options > div");
let sectionImage = document.querySelector(".section .image");
let sectionImageArr = [`images/section-image1.jpg`, `images/section-image2.png`, `images/section-image3.webp`];

let formOut = false;

contactUs.addEventListener("click", () => {
    if (!formOut) {
        form.style.scale = "1.1";
        form.style.opacity = "1";

        setTimeout(() => {
            form.style.scale = "1";
        }, 400);
    } else {
        form.style.scale = "1.1";

        setTimeout(() => {
            form.style.scale = "0";
            form.style.opacity = "0";
        }, 400);
    }

    formOut ^= 1;
});

function highlight(special) {
    dots.forEach(val => {
        if (val.id === special) {
            val.childNodes[1].style.opacity = "1";
            val.childNodes[3].style.opacity = "0";
        } else {
            val.childNodes[3].style.opacity = "1";
            val.childNodes[1].style.opacity = "0";
        }
    });
};

highlight("dot1");

flipImage.forEach((val, index) => {
    val.addEventListener("mouseenter", () => {
        val.style.rotate = "y 180deg";
        val.childNodes[1].style.opacity = "0";
        val.childNodes[3].style.opacity = "1";
        val.childNodes[3].style.transitionDelay = "0.2s";
        
        highlight(`dot${index + 1}`)
    });
    
    val.addEventListener("mouseleave", () => {
        val.style.rotate = "y 0deg";
        val.childNodes[1].style.opacity = "1";
        val.childNodes[3].style.opacity = "0";
        val.childNodes[1].style.transitionDelay = "0.2s";

        highlight("dot1");
    });
});

options.forEach((val, index) => {
    val.addEventListener("mouseenter", () => {
        val.style.backgroundColor = "#ff3147";
    });
    val.addEventListener("click", () => {
        sectionImage.style.backgroundImage = `url(${sectionImageArr[index]})`;
    });
    val.addEventListener("mouseleave", () => {
        val.style.backgroundColor = "transparent";
    });
});
