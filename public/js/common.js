"use strict";

const $ = jQuery;


function eventHandler() {

	JSCCommon.init()


	function whenResize() {
		JSCCommon.setFixedNav();
		JSCCommon.setFixedCardInfo();
	}

	window.addEventListener('scroll', () => {
		JSCCommon.setFixedNav();
		JSCCommon.setFixedCardInfo();

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

	document.addEventListener('click', function(event) {
		let profileTarget = event.target.closest('.top-btns__btn--profile-js');
		if (profileTarget) {
			let profileMenu = document.querySelector('.profile-menu');
			event.preventDefault();
			profileTarget.classList.toggle('active');
			profileMenu.classList.toggle('active');
			$('body').toggleClass('fixed-profile-menu');
		}
	});
	window.addEventListener('resize', () => {
		if (window.matchMedia('(min-width: 992px)').matches) {
			$('body').removeClass('fixed-profile-menu');
			$('.profile-menu').removeClass('active');
			$('.top-btns__btn--profile-js').removeClass('active');
		};
	}, { passive: true });

	$('.show-more-js').on('click', function(event) {
		$('.sPopularCategories__full-list').addClass('active');
		$('body').addClass('fixed');
		event.preventDefault();
	})
	$('.sPopularCategories__close').on('click', function() {
		$('.sPopularCategories__full-list').removeClass('active');
		$('body').removeClass('fixed');
	})

	const sProdCardThumbSwiper = new Swiper('.sProdCard__thumb-slider--thumb-js', {
		slidesPerView: 'auto',
		spaceBetween: 3,
		// direction: 'vertical',
		navigation: {
			nextEl: '.sProdCard__thumb-arrow-wrap .swiper-button-next',
			prevEl: '.sProdCard__thumb-arrow-wrap .swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 6,
				direction: 'vertical',
			}
		}
	});
	const sProdCardSwiper2 = new Swiper('.sProdCard__slider--js', {
		slidesPerView: 1,
		navigation: {
			nextEl: '.sProdCard__swiper-wrap .swiper-button-next',
			prevEl: '.sProdCard__swiper-wrap .swiper-button-prev',
		},
		thumbs: {
			swiper: sProdCardThumbSwiper,
		},
	});

	$(document).on("click", '.help-menu__dd-button--js', function () {
		$(this).next().slideToggle(300);
	})

	$('[data-bs-toggle="tooltip"]').tooltip({
		animation: true,
		// placement: 'bottom',
	});

	// $('[data-bs-toggle="tooltip2"]')
	// 	.attr("tabindex", 0)
	// 	.tooltip({ 
	// 		trigger: "manual",
	// 		placement: 'bottom',
	// 	})
	// 	.mouseover(event => {
	// 		$(event.target).tooltip("show");
	// 		$(".tooltip").on("mouseleave", function() {
	// 			$(event.target).tooltip("hide");
	// 		});
	// 	})
	// 	.mouseout(event => {
	// 		setTimeout(() => {
	// 			if (!$(".tooltip:hover").length) $(event.target).tooltip("hide");
	// 		}, 100);
	// 	})
	// 	.focus(event => {
	// 		$(event.target).tooltip("show");
	// 	})
	// 	.blur(event => {
	// 		$(event.target).tooltip("hide");
	// 	});


	$('.show-more-btn--js').click(function(event) {
		$(this).toggleClass('active');
		event.preventDefault();
		let toggleContent = (elem) => {
			$(`.` + `${elem}` + `.active`).slideUp(function() {
				$(this).removeClass('active');
			});
			$(`.` + `${elem}` + `:hidden`).slideDown(function() {
				$(this).addClass('active');
			});
		}
		toggleContent('review-block__review-item');
		toggleContent('faq__item');
		toggleContent('receiptGoods__item ul li');
		toggleContent('sPopularCategories--2 .sPopularCategories__col');
	});

	$('.form-wrap--js textarea').on('input', function(event) {
		document.querySelector('.form-wrap--js p span').innerHTML = event.target.value.length;
	})

	// Range Slider
	var $range = $(".js-range-slider");
	var $inputFrom = $(".js-input-from");
	var $inputTo = $(".js-input-to");
	var instance;
	var min = 0;
	var max = 20000;
	var from = 0;
	var to = 0;

	$range.ionRangeSlider({
		skin: "round",
		type: "double",
		min: min,
		max: max,
		from: 890,
		to: 18090,
		onStart: updateInputs,
		onChange: updateInputs,
		onFinish: updateInputs
	});
	instance = $range.data("ionRangeSlider");

	function updateInputs(data) {
		from = data.from;
		to = data.to;

		$inputFrom.prop("value", from);
		$inputTo.prop("value", to);
	}

	$inputFrom.on("change", function () {
		var val = $(this).prop("value");
		console.log(val);
		// validate
		if (val < min) {
			val = min;
		} else if (val > to) {
			val = to;
		}
		instance.update({
			from: val
		});
		$(this).prop("value", val);
	});

	$inputTo.on("change", function () {
		var val = $(this).prop("value");
		// validate
		if (val < from) {
			val = from;
		} else if (val > max) {
			val = max;
		}
		instance.update({
			to: val
		});
		$(this).prop("value", val);
	});

	$(".table-history__tr--js").click(function () {
		$(this).toggleClass("active").next().find('.table-history__inner-block--js').slideToggle(150);
	})

	FilePond.registerPlugin(FilePondPluginFileValidateSize);
	const resumeFilepod = document.querySelector('.resume-filepod');
	FilePond.create(resumeFilepod, {
		// status: {
		// 		EMPTY: 0,
		// 		IDLE: 1,
		// 		ERROR: 2,
		// 		BUSY: 3,
		// 		READY: 4
		// },
		status: 4,
		fileStatus: 5,
		// checkValidity: true,
		// dropValidation: true,
		// instantUpload: false,
		labelIdle: 'Перетащите свой файл или загрузите с компьютера',
		labelFileProcessing: 'Загрузка',
		labelFileLoadError: 'Ошибка загрузки',
		labelFileProcessingComplete: 'Загрузка завершена',
		labelMaxFileSizeExceeded: 'Ошибка загрузки',
		labelMaxFileSize:'Нажмите для отмены',
		styleButtonRemoveItemPosition: 'right',
		labelInvalidField: 'asdasd',
		maxFileSize: '100KB',
		iconRemove: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4.14979 3.20698C3.88944 2.94663 3.46733 2.94663 3.20698 3.20698C2.94663 3.46733 2.94663 3.88944 3.20698 4.14979L7.0568 7.99961L3.20702 11.8494C2.94667 12.1097 2.94667 12.5319 3.20702 12.7922C3.46737 13.0526 3.88948 13.0526 4.14983 12.7922L7.99961 8.94242L11.8494 12.7922C12.1097 13.0526 12.5319 13.0526 12.7922 12.7922C13.0526 12.5319 13.0526 12.1097 12.7922 11.8494L8.94242 7.99961L12.7922 4.14979C13.0526 3.88944 13.0526 3.46733 12.7922 3.20698C12.5319 2.94663 12.1098 2.94663 11.8494 3.20698L7.99961 7.0568L4.14979 3.20698Z" fill="#292929"/></svg>',
		iconProcess: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M11.6672 4.83366C10.7005 3.86699 9.47383 3.16699 8.00049 3.16699C5.05383 3.16699 2.67383 5.55366 2.67383 8.50033C2.67383 11.447 5.05383 13.8337 8.00049 13.8337C10.4872 13.8337 11.6672 11.8337 11.6672 11.8337L10.6672 11.167C10.6672 11.167 9.74049 12.5003 8.00049 12.5003C5.79383 12.5003 4.00049 10.707 4.00049 8.50033C4.00049 6.29366 5.79383 4.50033 8.00049 4.50033C9.10716 4.50033 10.0938 4.96033 10.8138 5.68699L11.6672 4.83366Z" fill="#6E9545"/></svg>',
	});

	const pond = document.querySelector('.filepond--root');

	pond.addEventListener('FilePond:addfile', (e) => {
			console.log('File added', e.detail);
	});


	// }

	$('.sCatalog__filter--js').on('click', function() {
		$('.filter').addClass('active');
		$('body').addClass('fixed');
	});
	$('.filter__close').on('click', function() {
		$('.filter').removeClass('active');
		$('body').removeClass('fixed');
	});
	window.addEventListener('resize', () => {
		if (window.matchMedia('(min-width: 992px)').matches) {
			$('.filter').removeClass('active');
			$('body').removeClass('fixed');
		};
	}, { passive: true });

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