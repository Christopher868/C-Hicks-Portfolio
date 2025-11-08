const menuBtn = document.querySelector('#menu-btn');
const collapsingMenu = document.querySelector('#collapsing-menu')

// Click event for toggle dropdown menu
document.addEventListener('click', (e) => {
    if(e.target.closest('svg') === menuBtn) {
        const closed = collapsingMenu.classList.contains('w-0')
        closed ? collapsingMenu.classList.replace('w-0', 'w-50') : collapsingMenu.classList.replace('w-50', 'w-0');
       
    } else if(e.target.closest('svg') !== menuBtn && e.target.closest('div') !== collapsingMenu){
            collapsingMenu.classList.replace('w-50', 'w-0');
    }
    
});