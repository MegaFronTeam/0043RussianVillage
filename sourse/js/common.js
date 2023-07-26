"use strict";

const $ = jQuery;


function eventHandler() {

	JSCCommon.init()


	function whenResize() {
		JSCCommon.setFixedNav();
	}

	window.addEventListener('scroll', () => {
		JSCCommon.setFixedNav();

	}, { passive: true })
	window.addEventListener('resize', () => {
		whenResize();
	}, { passive: true });

	whenResize();


	let defaultSl = {
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true,
		},
		watchOverflow: true,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: ' .swiper-pagination',
			type: 'bullets',
			clickable: true,
			// renderBullet: function (index, className) {
			// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
			// }
		},
	}

	new Swiper('.freemode-slider--js', {
		slidesPerView: 'auto',
		freeMode: true,
		watchOverflow: true
	});

	const swiper4 = new Swiper('.sBanners__slider--js', { // если не используешь методы swiper  - можно обращаться без нее к Swiper
		// slidesPerView: 5,
		...defaultSl,
		slidesPerView: 'auto',
		freeMode: true,
		loopFillGroupWithBlank: true,
		touchRatio: 0.2,
		slideToClickedSlide: true,
		freeModeMomentum: true,

	});

	let defSwipers = document.querySelectorAll('.default-swiper-js');
	if (defSwipers.length > 0) {
		for (const defSwiper of defSwipers) {
			new Swiper(defSwiper.querySelector('.swiper'), {
				slidesPerView: 'auto',
				navigation: {
					nextEl: defSwiper.querySelector('.swiper-button-next'),
					prevEl: defSwiper.querySelector('.swiper-button-prev'),
				},
				pagination: {
					el: defSwiper.querySelector(' .swiper-pagination'),
					type: 'bullets',
					clickable: true,
				},
			});
		}
	}

	new Swiper('.sOnOpenFire__swiper--js', {
		slidesPerView: 2,
		spaceBetween: 8,
		grid: {
			rows: 2,
			fill: 'row'
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 4,
				grid: {
					rows: 1,
				},
			}
		}
	});

	$('.text-block__show-more').on('click', function(){
		$(this).toggleClass('active');
		$('.text-block__wrap').toggleClass('active');
	});

	let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

	window.addEventListener(
		'scroll',
		function handleScroll() {
			const scrollTopPosition =
				window.pageYOffset || document.documentElement.scrollTop;

			if (scrollTopPosition > lastScrollTop) {
				$('.top-nav').addClass('scroll-down');
				$('.top-nav').removeClass('scroll-up');
			} else if (scrollTopPosition < lastScrollTop) {
				$('.top-nav').addClass('scroll-up');
				$('.top-nav').removeClass('scroll-down');
			}
			lastScrollTop =
				scrollTopPosition <= 0 ? 0 : scrollTopPosition;
		},
		false,
	);

};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}

// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }