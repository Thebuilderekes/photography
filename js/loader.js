window.addEventListener("load", function() {
    const loader = document.getElementById("loader-wrapper");
    const mainContent = document.getElementById("main-content");

    if (loader) {
        loader.classList.add("loader-hidden");

        // This makes sure the loader doesn't block clicks
        // even if it's invisible
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }

    if (mainContent) {
        // We set tabindex -1 so it can be focused via JS
        // without being part of the Tab key order
        mainContent.setAttribute("tabindex", "-1");
        mainContent.focus();
    }
});


