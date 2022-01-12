const menu = document.querySelector('.menu');
const menu_button = document.querySelector('.menu-img');
const navbar = document.querySelector('.navbar')
const navbar_itemgroup = document.querySelector('.nav-item-group');
const content = document.querySelector('.container-vertical');

// Set menu visibility state state
menu.style.visibility = 'hidden';

const menuClickHandler = () => {

    // console.log(menu.style.visibility);

    // If menu is hidden, show it - otherwise, hide it
    if (menu.style.visibility === 'hidden') {

        // Hide content
        content.style.visibility = 'hidden';

        // Show the menu
        menu.style.visibility = 'visible'

        // Bring navbar to front and style for vertical viewing
        navbar.classList.add('navbar-vertical');
        navbar_itemgroup.classList.add('nav-item-group-vertical');

    } else {

        // Show content
        content.style.visibility = 'visible';

        // Hide menu
        menu.style.visibility = 'hidden'

        // Revert navbar back to original state
        navbar.classList.remove('navbar-vertical');

    }
};

console.log(content);   