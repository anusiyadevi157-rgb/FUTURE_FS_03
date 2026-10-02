// ===============================
// AURA BOUTIQUE - JAVASCRIPT
// ===============================


// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navLinksContainer = document.getElementById("navLinks");

if (menuToggle && navLinksContainer) {

    menuToggle.addEventListener("click", () => {

        navLinksContainer.classList.toggle("active");

        const isOpen =
            navLinksContainer.classList.contains("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    // Close menu after clicking a link

    const mobileLinks =
        navLinksContainer.querySelectorAll("a");

    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navLinksContainer.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


// ===============================
// CONTACT FORM
// ===============================

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const nameInput =
                document.getElementById("name");

            const name =
                nameInput ? nameInput.value.trim() : "there";

            if (formMessage) {

                formMessage.textContent =
                    `Thank you, ${name}! Your enquiry has been received.`;

                formMessage.classList.add("show");

            } else {

                alert(
                    `Thank you, ${name}! Your enquiry has been received.`
                );

            }

            contactForm.reset();

        }
    );

}


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements =
    document.querySelectorAll(
        ".collection-card, .feature, .gallery-item, " +
        ".about-content, .about-image, " +
        ".contact-content, .contact-form, " +
        ".testimonial"
    );


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.15
            }

        );


    revealElements.forEach((element) => {

        element.classList.add("reveal");

        observer.observe(element);

    });

} else {

    // Fallback for older browsers

    revealElements.forEach((element) => {

        element.classList.add("show");

    });

}


// ===============================
// ACTIVE NAVIGATION
// ===============================

const navLinks =
    document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.forEach((item) => {

            item.classList.remove("active");

        });

        link.classList.add("active");

    });

});


// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll(
    'a[href^="#"]'
).forEach((link) => {

    link.addEventListener(
        "click",
        function (event) {

            const targetId =
                this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );

});


// ===============================
// SCROLL TO TOP
// ===============================

const scrollTop =
    document.getElementById("scrollTop");

if (scrollTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            scrollTop.classList.add("show");

        } else {

            scrollTop.classList.remove("show");

        }

    });


    scrollTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}