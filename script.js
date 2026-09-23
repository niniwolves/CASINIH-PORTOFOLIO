/* ========================================
   NINIWOLVES PORTFOLIO
   MAIN JAVASCRIPT
======================================== */


/* ========================================
   THEME TOGGLE
======================================== */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
    themeToggle.textContent = "☀";
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const isLight =
        document.body.classList.contains("light");

    if (isLight) {

        themeToggle.textContent = "☀";

        localStorage.setItem(
            "theme",
            "light"
        );

    } else {

        themeToggle.textContent = "☾";

        localStorage.setItem(
            "theme",
            "dark"
        );
    }

});


/* ========================================
   CONTACT FORM
======================================== */

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const message =
            document.getElementById("message").value;


        if (
            name.trim() === "" ||
            email.trim() === "" ||
            message.trim() === ""
        ) {

            alert(
                "Please complete all fields."
            );

            return;
        }


        console.log(
            "New message received:"
        );

        console.log({
            name: name,
            email: email,
            message: message
        });


        alert(
            `Thank you, ${name}! Your message has been received.`
        );


        contactForm.reset();

    }
);


/* ========================================
   SCROLL REVEAL
======================================== */

const revealElements =
    document.querySelectorAll(
        ".section-heading, .skill-card, .project-card, .timeline-item"
    );


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(
    (element) => {

        revealObserver.observe(element);

    }
);


/* ========================================
   NAVIGATION ACTIVE STATE
======================================== */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-menu a");


window.addEventListener(
    "scroll",
    () => {

        let currentSection = "";

        sections.forEach(
            (section) => {

                const sectionTop =
                    section.offsetTop - 150;

                const sectionHeight =
                    section.clientHeight;

                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY <
                    sectionTop + sectionHeight
                ) {

                    currentSection =
                        section.getAttribute("id");

                }

            }
        );


        navLinks.forEach(
            (link) => {

                link.classList.remove(
                    "active"
                );

                if (
                    link.getAttribute("href") ===
                    `#${currentSection}`
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);


/* ========================================
   SIMPLE TYPING EFFECT
======================================== */

const typingElement =
    document.querySelector(".hero h2 span");

const words = [
    "Creative Explorer",
    "Future Developer",
    "Problem Solver",
    "Tech Learner"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        characterIndex++;

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex
            );

        if (
            characterIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;
        }

    } else {

        characterIndex--;

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex
            );

        if (characterIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) %
                words.length;

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 50 : 90
    );

}


typeEffect();


/* ========================================
   CONSOLE MESSAGE
======================================== */

console.log(
    "🐺 Niniwolves Portfolio initialized."
);

console.log(
    "💻 Keep learning. Keep building."
);

console.log(
    "🚀 Version 1.0.0"
);