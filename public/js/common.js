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

	$('.catalog-menu__first-level-catalog > ul > li').on('mouseover', function() {
		$('.catalog-menu__first-level-catalog > ul > li').removeClass('hover');
	});

	let catalog = document.querySelector(".catalog-menu--js");
	let mobmnu = document.querySelector(" .menu-mobile--js");
	
	document.addEventListener("click", function (event) {
		let toggleCatalog = document.querySelectorAll(".catalog-toggle-js");
		
		let menutoggle = document.querySelector(".toggle-menu-mobile");
		let menutoggletarget =  event.target.closest(".toggle-menu-mobile.catalog-toggle-js");
		let target = event.target.closest(".catalog-toggle-js");
		
		let targetcatalog = event.target.closest(".catalog-menu--js.active");
		
		
		let col = $(".col-top-js");
		// let targetMobile = event.target.closest(".top-btns__btn");
		if (target) {
			if (target.classList.contains("top-btns__btn")) {
				event.preventDefault();
				catalog.classList.toggle('mobile-active');
					
				menutoggle.classList.toggle('toggle-menu-mobile--js');
				menutoggle.classList.toggle('on');
				menutoggle.classList.toggle('catalog-toggle-js');
			}
			catalog.classList.toggle('active');
			col.toggleClass('active');
			target.classList.remove('on');
			document.querySelector("body").classList.toggle('fixed-catalog');
			toggleCatalog.forEach((el) => {
				el.classList.toggle('active')
				$('.catalog-menu__first-level-catalog>ul>li:first-child').addClass('hover');
			})
		}
		if (menutoggletarget) {
			catalog.classList.remove('mobile-active');
			menutoggletarget.classList.add('toggle-menu-mobile--js');
			menutoggletarget.classList.remove('on');
			menutoggletarget.classList.remove('catalog-toggle-js');
		}
		// 	else if (!target && !targetcatalog && catalog.classList.contains("active")) {
		// 	catalog.classList.remove('active');
		// 	catalog.classList.remove('mobile-active');
		// 	document.querySelector("body").classList.remove('fixed-catalog');
		// 	toggleCatalog.forEach(el => el.classList.remove('active'))
			
		// }
	})

	function togglemobmenu(menu) {
		if (menu) {
			menu.addEventListener("click", function (event) {
				if (!this.classList.contains("mobile-active")) return;
				let link2 = event.target.closest(".mobile-menu--js>a")
				if (!link2) return;
				event.preventDefault();
				console.log(link2);
				let parent = link2.parentElement;
				let subMenu = parent.querySelector(".catalog-menu__content");
				
				let btnBack = document.createElement("div");
				btnBack.classList.add('catalog-menu-back');
				btnBack.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
				<path d="M15.0723 6.00049L14.0711 4.92969L7.00007 12.0008L14.0711 19.0718L15.0723 18.0005L9.07227 12.0005L15.0723 6.00049Z" fill="#352E26"/>
				</svg>`;
				
				subMenu.insertAdjacentElement('afterbegin', btnBack);
				
				btnBack.addEventListener("click", function () { 
					subMenu.classList.remove('active');
					document.querySelector(".overflowAll").classList.remove('overflowAll');
					setTimeout(() => {
						
						this.remove();
					}, 200);
				})
				// console.log(1);
				catalog.classList.add('overflowAll');
				subMenu.classList.add('active');
			})
		}
	};

	function toggleMobMenuSecondLevel(menu) {
		if (menu) {
			menu.addEventListener("click", function (event) {
				let link = event.target.closest(".catalog-menu__icon-wrap--js");
				if (!link) return;
				event.preventDefault();
				console.log(link);
				let parent = link.closest('.menu-item-has-children');
				let subMenu = parent.querySelector(".sub-menu");
				
				let btnBack = document.createElement("div");
				btnBack.classList.add('catalog-menu-back');
				btnBack.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
				<path d="M15.0723 6.00049L14.0711 4.92969L7.00007 12.0008L14.0711 19.0718L15.0723 18.0005L9.07227 12.0005L15.0723 6.00049Z" fill="#352E26"/>
				</svg>`;
				
				subMenu.insertAdjacentElement('afterbegin', btnBack);
				
				btnBack.addEventListener("click", function () { 
					subMenu.classList.remove('active');
					document.querySelector(".overflowAll").classList.remove('overflowAll');
					setTimeout(() => {
						
						this.remove();
					}, 200);
				})
				// console.log(1);
				catalog.classList.add('overflowAll');
				subMenu.classList.add('active');
			})
		}
	};

	togglemobmenu(catalog);
	toggleMobMenuSecondLevel(catalog);

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