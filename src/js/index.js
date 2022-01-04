import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/all";
import ScrollAnim from "./_ScrollAnim";

import Fireworks from "./_Fireworks";
import Particles from "./_Particles";
import Circles from "./_Circles";

export default class App {
	constructor() {
		this.$window = $("window");
		this.$body = $("body");
		this.canvas, this.ctx, this.w, this.h;
		this.fireworks = [];
		this.particles = [];
		this.circles = [];
		this.fireworksMax = 10;
		this.fireworksChance = 0.2;
		this.hue = 0;

		this.scrollAnim = new ScrollAnim();
	}

	init() {
		gsap.registerPlugin(ScrollToPlugin);

		this.scrollAnim.init();
		this.bounceNumber();
	}

	splitText($txt) {
		let splitText = $txt.text().split("");
		$txt.empty();
		$.each(splitText, (i, v) => {
			$txt.append($("<span class='letter'>").text(v));
		});
		return $txt;
	}

	bounceNumber() {
		let h1 = $("h1");
		let numbers = $(".word");
		let last = $(".word.last");
		let hide = $(".hide");
		let question = $(".question");
		let greeting = $(".greeting");

		this.splitText(greeting);

		let letters = $(".letter");

		let tl = gsap.timeline();

		numbers.each((index, number) => {
			tl.to(number, {
				duration: 0.6,
				opacity: 1,
				y: 0,
				ease: "elastic.out",
			});
		});

		tl.to(greeting, {
			opacity: 1,
		});

		tl.to(question, {
			delay: 0.4,
			duration: 0.2,
			opacity: 1,
			scale: 1.4,
		})
			.to(question, {
				scale: 1,
				ease: "elastic.out",
			})
			.to(last, {
				duration: 0.4,
				delay: 1,
				y: 50,
				ease: "bounce",
			})
			.to(hide, {
				opacity: 1,
			})
			.to(
				last,
				{
					duration: 0.6,
					y: -160,
					ease: "elastic.out",
				},
				"same"
			)
			.to(
				question,
				{
					opacity: 0,
					y: -100,
					rotate: 360,
					scale: 0.6,
				},
				"same"
			)
			.to(h1, {
				delay: 0.4,
				duration: 1,
				y: -200,
			});

		letters.each((index, letter) => {
			tl.to(letter, {
				duration: 0.1,
				opacity: 1,
				delay: 0.0008 * index,
				rotate: 0,
				y: 0,
				x: 0,
				ease: "power2.Out",
			});
		});

		tl.call(() => {
			this.initFireworks();
			this.$body.addClass("active");
			gsap.to("#scroll-down", {
				duration: 2,
				delay: 1,
				opacity: 1,
			});
			gsap.to(window, {
				duration: 2,
				delay: 1,
				scrollTo: ".works",
				ease: "power2.inOut",
			});
		});
	}

	initFireworks() {
		this.canvas = document.querySelector("#fireworks");
		this.ctx = this.canvas.getContext("2d");

		this.resizeReset();
		this.animationLoop();
	}

	resizeReset() {
		this.w = this.canvas.width = window.innerWidth;
		this.h = this.canvas.height = window.innerHeight;
		this.ctx.fillStyle = "#222";
		this.ctx.fillRect(0, 0, this.w, this.h);
	}

	animationLoop() {
		if (
			this.fireworks.length < this.fireworksMax &&
			Math.random() < this.fireworksChance
		) {
			this.fireworks.push(new Fireworks(this.w, this.h, this.hue));
			this.hue += 10;
		}
		this.ctx.globalCompositeOperation = "source-over";
		this.ctx.fillStyle = "rgba(0, 0, 0, .1)";
		this.ctx.fillRect(0, 0, this.w, this.h);
		this.ctx.globalCompositeOperation = "lighter";

		this.drawScene();
		this.arrayCleanUp();
		requestAnimationFrame(this.animationLoop.bind(this));
	}

	drawScene() {
		this.fireworks.map((firework) => {
			firework.update(this.h);
			firework.draw(this.ctx);
		});
		this.particles.map((particle) => {
			particle.update();
			particle.draw(this.ctx);
		});
		this.circles.map((circle) => {
			circle.update();
			circle.draw(this.ctx);
		});
	}

	arrayCleanUp() {
		let dump1 = [];
		let dump2 = [];
		let dump3 = [];

		this.fireworks.map((firework) => {
			if (firework.alpha > 0) {
				dump1.push(firework);
			} else {
				this.createFireworks(firework.x, firework.y, firework.hue);
			}
		});
		this.fireworks = dump1;

		this.particles.map((particle) => {
			if (particle.size > 0) {
				dump2.push(particle);
			}
		});
		this.particles = dump2;

		this.circles.map((circle) => {
			if (circle.size < circle.endSize) {
				dump3.push(circle);
			}
		});
		this.circles = dump3;
	}

	createFireworks(x, y, hue) {
		for (let i = 0; i < 10; i++) {
			this.particles.push(new Particles(x, y, hue, i));
		}
		this.circles.push(new Circles(x, y, hue));
	}
}

$(() => {
	const app = new App();
	app.init();
});
