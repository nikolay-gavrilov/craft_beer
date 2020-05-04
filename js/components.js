let p1 = false;

function animFunc() {
	// console.log('test');

	var tlBg = gsap.timeline({
		paused: p1,
		// delay: 1,
		defaults: { ease: "power4.out", duration: .6 },
	});

	tlBg
		.to('.preloader_in', {
			opacity: 1
		})
		.to('.beer_body', {
			duration: 1.2,
			y: 0,
		})
		.addLabel('loader')
		.to('.preloader', {
			opacity: 0,
			pointerEvents: 'none'
		}, 'loader')
		.addLabel('start')
		.fromTo('.section_bd_item_in', {
				scale: 0,
				y: 60,
			},{
				scale: 1,
				y: 0,
				stagger: {
					grid: [4, 6],
					from: "center",
					amount: .3
				}
		}, 'start-=.4')
		.fromTo('.section_contetn_w', {
			x: '-60em',
			opacity: 0
		}, {
			x: 0,
			opacity: 1
		}, 'start+=.2')
		.fromTo('.hero_logo', {
			opacity: 0
		}, {
			duration: 1,
			opacity: 1
		}, 'start+=.2')
}