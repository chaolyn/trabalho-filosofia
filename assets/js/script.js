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
const backToTop = document.querySelector("#backToTop");


/*======================================================
    HERO INTRO
======================================================*/

window.addEventListener("load", () => {

    const heroItems = document.querySelectorAll(".hero-content > *");

    heroItems.forEach((item, index) => {

        setTimeout(() => {

            item.style.transition = ".8s ease";
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }, index * 250);

    });

});


/*======================================================
    NAVBAR + PROGRESS BAR + BOTÃO TOPO
======================================================*/

window.addEventListener("scroll", () => {

    /* Navbar */

    if (window.scrollY > 60) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

    /* Barra */

    const scrollTop = window.scrollY;

    const pageHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress = (scrollTop / pageHeight) * 100;

    progressBar.style.width = progress + "%";

    /* Botão topo */

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

    /* Menu ativo */

    activeMenu();

    /* Reveal */

    revealOnScroll();

});


/*======================================================
    MENU SUAVE
======================================================*/

navLinks.forEach(link => {

    link.addEventListener("click", e => {

        e.preventDefault();

        const target = document.querySelector(
            link.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/*======================================================
    BOTÃO HERO
======================================================*/

if (heroButton) {

    heroButton.addEventListener("click", e => {

        e.preventDefault();

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

        const revealTop =
            element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < window.innerHeight - revealPoint) {

            setTimeout(() => {

                element.classList.add("active");

            }, index * 120);

        }

    });

}

revealOnScroll();


/*======================================================
    MENU ATIVO
======================================================*/

function activeMenu() {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (

            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight

        ) {

            current = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

}

activeMenu();


/*======================================================
    VOLTAR AO TOPO
======================================================*/

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}