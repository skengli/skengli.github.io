const navBarToggle = document.getElementById('navbar-toggle');

let isNavbarExpanded = navBarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navBarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navBarToggle.addEventListener('click', toggleNavbarVisibility);