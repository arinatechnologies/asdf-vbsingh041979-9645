document.addEventListener("DOMContentLoaded", function () {
            const menuToggle = document.querySelector(".menu-toggle");
            const navMenu = document.querySelector(".nav-menu");

            if (menuToggle && navMenu) {
                menuToggle.addEventListener("click", () => {
                navMenu.classList.toggle("active");
                });
            }
            });