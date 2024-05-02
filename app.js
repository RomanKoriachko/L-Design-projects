// Navigation

const contactsBtn = document.querySelectorAll('.header-menu-item-4');
const contactsSection = document.querySelector('.contacts-section');

for (let i = 0; i < contactsBtn.length; i++) {
	contactsBtn[i].addEventListener('click', function () {
		window.scrollTo({
			top: contactsSection.getBoundingClientRect().top + window.scrollY - 107,
			behavior: 'smooth',
		});
		document.body.style.overflow = 'auto';
		closeBurgerMenu();
	});
}

// Burger menu

const burgerMenuBtn = document.querySelector('.burger-menu-btn');
const closeBurgerMenuBtn = document.querySelector('.close-burger-btn');
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuBg = document.querySelector('.burger-menu-bg');

burgerMenuBtn.addEventListener('click', () => {
	burgerMenu.classList.add('active');
	burgerMenuBg.classList.add('active');
	document.body.style.overflow = 'hidden';
});

closeBurgerMenuBtn.addEventListener('click', () => {
	closeBurgerMenu();
});

function closeBurgerMenu() {
	burgerMenu.classList.remove('active');
	burgerMenuBg.classList.remove('active');
	document.body.style.overflow = 'auto';
}

// Add header background after scrolling

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
	if (window.scrollY > 0) {
		header.classList.add('active-bg');
	} else {
		header.classList.remove('active-bg');
	}
});
