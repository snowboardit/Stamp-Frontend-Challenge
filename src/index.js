const body = document.body
const container_vert = document.querySelector('.container-vertical');
const container_mid = document.querySelector('.container-mid');
const footer = document.querySelector('.footer');
const navbar = document.querySelector('.navbar')
const navbar_itemgroup = document.querySelector('.nav-item-group');
const showcase = document.querySelector('.showcase');
const signup = document.querySelector('.signup');
const menu_itemgroup = document.querySelector('.menu-item-group')
const menu = document.querySelector('.menu');

const menuClickHandler = () => {

    console.log('clicked');

    // OVERVIEW: If menu is hidden, show it; else if menu is shown, hide it
    // Show/hide content and scroll bar
    container_mid.classList.toggle('container-mid-toggle');
    showcase.classList.toggle('showcase-toggle');
    signup.classList.toggle('signup-toggle');
    footer.classList.toggle('footer-toggle');
    menu_itemgroup.classList.toggle('menu-item-group-toggle');

    // Enable/disable scroll on body for devices < 500px
    body.classList.toggle('scroll-disabled');

    // Bring navbar to front/place behind main content
    navbar.classList.toggle('navbar-toggle');

    // Show/hide navbar item group for larger screens
    navbar_itemgroup.classList.toggle('nav-item-group-toggle');

    // Show/hide the menu
    menu.classList.toggle('menu-toggle');

};