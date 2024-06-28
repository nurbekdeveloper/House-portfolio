const menuButton = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.menu');
const navbarLinks = document.querySelectorAll('.menu a');
const subMenu = document.querySelectorAll('.sub-menu a');
const headeR = document.querySelector('header');
const langBox = document.querySelector('.lang-box');
const langBoxOption = document.querySelector('.lang-box select');

// Mobile menu =========================
menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
	navMenu.classList.toggle('open');
	menuButton.classList.toggle('translate');
}

// Pathname  ====================
const pathName = window.location.pathname;

if ((pathName !== '/') & (pathName !== '/index.html')) {
	navbarLinks.forEach((e) => {
		e.style.color = '#2b2b2b';
		e.classList.add('hover');
	});

	headeR.style.background = 'white';
	subMenu.forEach((e) => {
		e.style.color = 'white';
		e.classList.add('hover');
	});
	langBox.style.color = '#2b2b2b';
	langBoxOption.style.color = '#2b2b2b';
}

// Sticky header ===============

window.addEventListener('scroll', () => {
	if (window.scrollY > 10) {
		headeR.classList.add('sticky');
	} else {
		headeR.classList.remove('sticky');
	}
});

// OWL CAROUSEL CODES =================================

$(document).ready(function () {
	$('.owl-one').owlCarousel({
		items: 1,
		loop: true,
		margin: 15,
		center: true,
		startPosition: 0,
		autoplay: true,

		responsive: {
			768: {
				items: 2,
			},
		},
	});

	$('.owl-two').owlCarousel({
		items: 3,
		loop: true,
		margin: 30,
		center: true,
		startPosition: 0,
		autoplay: true,

		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 3,
			},
			1440: {
				items: 5,
			},
		},
	});

	var owl = $('.owl-carousel');
	owl.owlCarousel();
	// Go to the next item
	$('.owl-prev').click(function () {
		owl.trigger('prev.owl.carousel');
	});
	// Go to the previous item
	$('.owl-next').click(function () {
		// With optional speed parameter
		// Parameters has to be in square bracket '[]'
		owl.trigger('next.owl.carousel', [300]);
	});
});

// AOS animation =====================

$(document).ready(function () {
	$('.form-item').attr({
		'data-aos': 'fade-up',
	});
	AOS.init({
		duration: 1150,
		delay: 100,
	});
});

//refresh animations
$(window).on('load', function () {
	AOS.refresh();
});
