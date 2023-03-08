const burguerMenu = document.querySelector('.icon-burguer');
const dropDownMenu = document.querySelector('.connect-menu');
const nav = document.querySelector('.main-navbar');
const insideNavMenu = document.querySelector('.nav-dropdown-options');

burguerMenu.addEventListener('click', toggleMenuMobile);
dropDownMenu.addEventListener('click', toggleInsideMenu);

function toggleMenuMobile() {
    const isNavbarClosed = nav.classList.contains('inactive');
    const isInnerMenuClosed = insideNavMenu.classList.contains('inactive');
    if (isNavbarClosed) {
        nav.classList.remove('inactive');
    }
    else {
        nav.classList.add('inactive');
    }

    if (!isInnerMenuClosed) {
        insideNavMenu.classList.add('inactive');
    }
}
    
function toggleInsideMenu() {
    const isInnerMenuClosed = insideNavMenu.classList.contains('inactive');
    if (isInnerMenuClosed) {
        insideNavMenu.classList.remove('inactive');
    }
    else {
        insideNavMenu.classList.add('inactive');
    }
}