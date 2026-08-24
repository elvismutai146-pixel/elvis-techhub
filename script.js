/* =========================================================
   ELVIS TECH HUB
   MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", function () {

            navLinks.classList.toggle("active");

            const icon = menuBtn.querySelector("i");

            if (navLinks.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });


        /* Close menu after clicking a link */

        const links = navLinks.querySelectorAll("a");

        links.forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");

                const icon = menuBtn.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            });

        });

    }



    /* =====================================================
       BACK TO TOP BUTTON
    ===================================================== */

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 400) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        });


        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }



    /* =====================================================
       NAVBAR SCROLL EFFECT
    ===================================================== */

    const header = document.querySelector(".header");

    if (header) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 50) {

                header.style.boxShadow =
                    "0 8px 25px rgba(0, 0, 0, 0.10)";

            } else {

                header.style.boxShadow =
                    "0 3px 15px rgba(0, 0, 0, 0.05)";

            }

        });

    }



    /* =====================================================
       SCROLL REVEAL ANIMATION
    ===================================================== */

    const animatedElements = document.querySelectorAll(
        ".service-card, .why-card, .testimonial-card, .process-step, .stat"
    );

    const revealObserver = new IntersectionObserver(

        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    animatedElements.forEach(function (element) {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });



    /* =====================================================
       ANIMATED COUNTERS
    ===================================================== */

    const counters = document.querySelectorAll(".stat h2");

    const counterObserver = new IntersectionObserver(

        function (entries, observer) {

            entries.forEach(function (entry) {

                if (!entry.isIntersecting) {
                    return;
                }

                const counter = entry.target;

                const originalText = counter.innerText.trim();

                /*
                   Extract number from text.
                   Example:
                   100+ → 100
                   50+  → 50
                   10+  → 10
                */

                const numberMatch =
                    originalText.match(/\d+/);

                if (!numberMatch) {
                    return;
                }

                const target =
                    parseInt(numberMatch[0]);

                const suffix =
                    originalText.replace(/\d+/g, "");

                let current = 0;

                const increment =
                    Math.max(1, Math.ceil(target / 50));

                const timer = setInterval(function () {

                    current += increment;

                    if (current >= target) {

                        current = target;

                        clearInterval(timer);

                    }

                    counter.innerText =
                        current + suffix;

                }, 30);

                observer.unobserve(counter);

            });

        },

        {
            threshold: 0.5
        }

    );


    counters.forEach(function (counter) {

        counterObserver.observe(counter);

    });



    /* =====================================================
       SMOOTH SCROLL FOR INTERNAL LINKS
    ===================================================== */

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                link.getAttribute("href");

            if (
                targetId &&
                targetId !== "#"
            ) {

                const target =
                    document.querySelector(targetId);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }

        });

    });



    /* =====================================================
       SERVICE CARD HOVER EFFECT
    ===================================================== */

    const serviceCards =
        document.querySelectorAll(".service-card");

    serviceCards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {

            card.style.transform =
                "translateY(-10px)";

        });

        card.addEventListener("mouseleave", function () {

            card.style.transform =
                "translateY(0)";

        });

    });



    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const yearElements =
        document.querySelectorAll(".current-year");

    yearElements.forEach(function (element) {

        element.textContent =
            new Date().getFullYear();

    });



    /* =====================================================
       WELCOME MESSAGE
    ===================================================== */

    console.log(
        "Welcome to Elvis Tech Hub 🚀"
    );

});