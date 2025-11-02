const menuBtn = document.querySelector('#menu-btn');
const collapsingMenu = document.querySelector('#collapsing-menu')

// Click event for toggle dropdown menu
document.addEventListener('click', (e) => {
    if(e.target.closest('svg') === menuBtn) {
        collapsingMenu.classList.toggle('hidden');
    } else if(e.target.closest('svg') !== menuBtn && e.target.closest('div') !== collapsingMenu){
        collapsingMenu.classList.add('hidden');
    }
});