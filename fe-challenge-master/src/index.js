const menu = document.querySelector('.menu');
const menu_button = document.querySelector('.menu-img');
const navbar = document.querySelector('.navbar')
const navbar_itemgroup = document.querySelector('.nav-item-group');
const content = document.querySelector('.container-vertical');

// Set menu visibility state state
// menu.style.visibility = 'hidden';

const menuClickHandler = () => {

    // console.log(menu.style.visibility);

    // If menu is hidden, show it - otherwise, hide it
    if (menu.style.visibility === 'hidden') {

        // Hide content
        content.style.visibility = 'collapse';
        content.style.overflow = 'hidden';

        // Show the menu
        menu.style.visibility = 'visible';

        // Bring navbar to front and style for vertical viewing
        navbar.style.zIndex = '2';
        navbar.style.visibility = 'visible';

        // Hide navbar item group for larger screens
        navbar_itemgroup.style.visibility = 'hidden';

    } else {

        // Show content
        content.style.visibility = 'visible';
        content.style.overflow = 'auto';

        // Hide menu
        menu.style.visibility = 'hidden';

        // Revert navbar back to original state
        navbar.classList.remove('navbar-vertical');
        navbar.style.paddingRight = '0';

        // Show navbar item group
        navbar_itemgroup.style.visibility = 'visible';

    }
};

console.log(content);   