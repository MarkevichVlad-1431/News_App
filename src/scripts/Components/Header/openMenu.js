let menuButton = document.querySelector('.menu-burger');
let options = document.querySelector('.options');


function openTopMenu(burger) {
    burger.classList.remove('closeMenuButton');
    burger.classList.add('activeMenuButton');
    
    options.classList.remove('closeOptions');
    options.classList.add('activeOptions');
}

function closeTopMenu(burger) {
    burger.classList.remove('activeMenuButton');
    burger.classList.add('closeMenuButton');

    options.classList.remove('activeOptions');
    options.classList.add('closeOptions');

}
menuButton.addEventListener('click', () => {
    if (menuButton.classList.contains('activeMenuButton')) {
        closeTopMenu(menuButton)
    } else {
        openTopMenu(menuButton);
    }
})