// Modal 
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal =   document.querySelector('.js-modal')
const closeModal = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')

function showBuyTickets() {
    modal.classList.add('open')
}

function closeBuyTickets() {
    modal.classList.remove('open')
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}
closeModal.addEventListener('click', closeBuyTickets)
modal.addEventListener('click', closeBuyTickets)
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})

// Mobile Menu 
var nav = document.querySelector('.js-nav')
var menuBtn = document.querySelector('.js-menu-btn')
var body = document.getElementsByTagName('body')

function openMenu() {
    if (nav.style.transform == 'translateX(-100%)'){
        nav.style.transform = 'translateX(0)'
    }
    else {
        nav.style.transform = 'translateX(-100%)'
    }
}

menuBtn.addEventListener('click',openMenu)

// Auto close menu when select 
var menuItems = document.querySelectorAll('#nav li a')

for (var menuItem of menuItems) {
    menuItem.addEventListener('click', openMenu)
}


