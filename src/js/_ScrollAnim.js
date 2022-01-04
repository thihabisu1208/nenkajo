import "intersection-observer";

export default class ScrollAnim {
	constructor(selector) {
		this.selector = selector || ".js-scrollAnim";
		this.$anim = $(this.selector);
	}

	init() {
		this.createIntersectionObserver();
	}

	createIntersectionObserver() {
		const option = {
			root: null,
			rootMargin: "-40% 0px",
			threshold: 0,
		};

		this.observer = new IntersectionObserver(this.intersect.bind(this), option);
		this.observe(this.$anim);
	}

	observe($elem) {
		$elem.each((_, elem) => {
			this.observer.observe(elem);
		});
	}

	intersect(entries) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const $target = $(entry.target);
				this.anim($target);
			}
		});
	}

	anim($elem) {
		$elem.addClass("on-anim");
	}
}
