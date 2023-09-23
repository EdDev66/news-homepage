const menu_btn = document.querySelector('.hamburger')
const mobile_nav = document.querySelector('.mobile-nav')
const close_nav = document.querySelector('.close_btn')
const overlay = document.querySelector('.overlay')

function toggleMobileMenu() {
    mobile_nav.classList.toggle('hidden')
    overlay.classList.toggle('hidden')
    menu_btn.classList.toggle('hidden')
    mobile_nav.classList.toggle('.close-animation')
}

menu_btn.addEventListener('click', toggleMobileMenu)
close_nav.addEventListener('click', toggleMobileMenu)
overlay.addEventListener('click', toggleMobileMenu)
