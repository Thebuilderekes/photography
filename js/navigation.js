// Select the necessary elements
//

document.addEventListener("DOMContentLoaded", () => {
const mobileNav = document.getElementById('mobile-nav');
const openBtn = document.getElementById('open-menu-btn');
const closeBtn = document.getElementById('close-menu-btn');

/**
 * Opens the mobile navigation menu
 */
function openMenu() {
    // 1. Show the menu visually
    // 2. Accessibility: Update aria-expanded on the trigger button
  //
    mobileNav.style.display = 'block';
  console.log("open working")
    openBtn.setAttribute('aria-expanded', 'true');

    // 3. Accessibility: Shift focus to the close button or first link
    // This helps keyboard users navigate immediately
    closeBtn.focus();
}

/**
 * Closes the mobile navigation menu
 */
function closeMenu() {
    // 1. Hide the menu visually
    // 2. Accessibility: Update aria-expanded back to false
    mobileNav.style.display = 'none';
    openBtn.setAttribute('aria-expanded', 'false');

  console.log("close working")
    // 3. Accessibility: Return focus to the open button
    // This prevents the "focus loss" where a user gets lost on the page
    openBtn.focus();
}


openBtn.addEventListener('click', () => openMenu())
closeBtn.addEventListener('click', () => closeMenu())


// Optional: Close menu if user presses the "Escape" key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.style.display === 'block') {
        closeMenu();
    }
});

const details = document.querySelectorAll("details");

details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    // When one is clicked, close all others
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});
})

// Select all details elements

