window.addEventListener("load", function() {
    const loader = document.getElementById("loader-wrapper");
    const mainContent = document.getElementById("main-content");
    const hero = document.querySelector(".hero-container");

    // Set how long you want the loader to stay (3000 = 3 seconds)
    const extraWaitTime = 2000;

    setTimeout(() => {
        loader.classList.add("loader-hidden");

        // Trigger the fade-in for the hero content
        if (hero) {
            hero.classList.add("hero-visible");
        }

        // Accessibility focus
        if (mainContent) {
            mainContent.setAttribute("tabindex", "-1");
            mainContent.focus();
        }

        // Remove from DOM after transition
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }, extraWaitTime);
});



