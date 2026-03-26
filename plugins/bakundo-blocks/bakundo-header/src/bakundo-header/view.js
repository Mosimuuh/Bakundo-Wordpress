const header = document.querySelector('.bakundo-header');
const hamburger = document.querySelector('.bakundo-header__hamburger');
const mobileMenu = document.querySelector('.bakundo-header__mobile-menu');

if (header) {
	window.addEventListener('scroll', () => {
		header.classList.toggle('scrolled', window.scrollY > 50);
	});
}

if (hamburger && mobileMenu) {
	hamburger.addEventListener('click', () => {
		const isOpen = hamburger.classList.toggle('open');
		mobileMenu.classList.toggle('open', isOpen);
		document.body.classList.toggle('menu-open', isOpen);
	});

	mobileMenu.querySelectorAll('a').forEach(link => {
		link.addEventListener('click', () => {
			hamburger.classList.remove('open');
			mobileMenu.classList.remove('open');
			document.body.classList.remove('menu-open');
		});
	});
}
