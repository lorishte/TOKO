$(document).ready(() => {
	let coffeeSection = $('#our-coffee');
	let coffeeSectionText = $('#our-coffee .section-info');

	$(window).scroll(function () {
		let wScroll = $(this).scrollTop();

		let headScroll = (wScroll / 10);

		coffeeSection.css({
			'background-position': '50% ' + ( headScroll - 400) + 'px'
		});

		if (wScroll > 700 && wScroll < 1400) {
			coffeeSectionText.css({
				'opacity': '1'
			});
		} else {
			coffeeSectionText.css({
				'opacity': '0'
			});
		}

		if (wScroll > 500 && wScroll < 1600) {
			coffeeSection.css({
				'opacity': '1'
			});
		} else {
			coffeeSection.css({
				'opacity': '0'
			});
		}
	});
});




