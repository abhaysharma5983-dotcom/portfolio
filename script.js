// ==============================
// Typing Animation
// ==============================

const typingText = document.querySelector(".typing");

const words = [
    "Web Developer",
    "Frontend Developer",
    "Node.js Learner",
    "B.Tech CSE Student"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    }

    else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex === words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);

}

typeEffect();


// ==============================
// Scroll Reveal Animation
// ==============================

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealSection);

function revealSection() {

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;

        const revealTop =
            element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

}

revealSection();


// ==============================
// Mobile Menu
// ==============================

const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("show");

});


// ==============================
// Active Navbar
// ==============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==============================
// Smooth Scroll
// ==============================

navLinks.forEach((link) => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        const target =
            document.querySelector(
                link.getAttribute("href")
            );

        target.scrollIntoView({

            behavior: "smooth"

        });

        nav.classList.remove("show");

    });

});


// ==============================
// Contact Form
// ==============================

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("✅ Thank You! Your message has been received.");

    form.reset();

});


// ==============================
// Header Shadow on Scroll
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 20px rgba(0,224,255,0.3)";

    }

    else {

        header.style.boxShadow = "none";

    }

});