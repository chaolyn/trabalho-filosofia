/*======================================================
    SCRIPT.JS
    Projeto: Seleção de Embriões e Edição Genética
======================================================*/


/*======================================================
    SELETORES
======================================================*/
const progressBar = document.querySelector(".progress-bar");

const navbar = document.querySelector(".navbar");

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-menu a");

const revealElements = document.querySelectorAll(".reveal");

const heroButton = document.querySelector(".btn");

/*======================================================
    NAVBAR
======================================================*/

window.addEventListener("scroll", () => {

    if(window.scrollY > 60){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});




/*======================================================
    NAVIGATION
======================================================*/

navLinks.forEach(link=>{

    link.addEventListener("click",e=>{

        e.preventDefault();

        const id=

            link.getAttribute("href");

        document.querySelector(id)

        .scrollIntoView({

            behavior:"smooth"

        });

    });

});


/*======================================================
    PROGRESS BAR
======================================================*/

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const pageHeight =

        document.documentElement.scrollHeight -

        window.innerHeight;

    const progress =

        (scrollTop / pageHeight) * 100;

    progressBar.style.width = progress + "%";

});

/*======================================================
    HERO INTRO
======================================================*/

window.addEventListener("load",()=>{

    const heroItems=

        document.querySelectorAll(".hero-content>*");

    heroItems.forEach((item,index)=>{

        setTimeout(()=>{

            item.style.transition=".8s";

            item.style.opacity="1";

            item.style.transform="translateY(0)";

        },index*250);

    });

});

/*======================================================
    HERO BUTTON
======================================================*/
const heroButton = document.querySelector(".hero-btn");

if (heroButton) {

    heroButton.addEventListener("click", (event) => {

        event.preventDefault();

        const target = document.querySelector(
            heroButton.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}



/*======================================================
    SCROLL REVEAL
======================================================*/

function revealOnScroll() {

    revealElements.forEach((element, index) => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            setTimeout(() => {

                element.classList.add("active");

            }, index * 120);

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/*======================================================
    ACTIVE MENU
======================================================*/

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

/*======================================================
    ACTIVE MENU
======================================================*/

function activeMenu() {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", activeMenu);


/*======================================================
    BACK TO TOP
======================================================*/

const backToTop = document.querySelector("#backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});