export default class Fireworks {
	constructor(w, h, hue) {
		this.x = this.getRandomInt(w * 0.2, w * 0.9);
		this.y = h;
		this.targetY = this.getRandomInt(h * 0.2, h * 0.4);
		this.hue = hue;
		this.alpha = 1;
		this.tick = 0;
		this.ttl = this.getRandomInt(120, 180);
	}

	getRandomInt(min, max) {
		return Math.round(Math.random() * (max - min)) + min;
	}

	easeOutQuart(x) {
		return 1 - Math.pow(1 - x, 4);
	}

	draw(ctx) {
		if (this.tick <= this.ttl) {
			ctx.beginPath();
			ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
			ctx.fillStyle = `hsla(${this.hue}, 100%, 50%, ${this.alpha})`;
			ctx.fill();
			ctx.closePath();
		}
	}

	update(h) {
		let progress = 1 - (this.ttl - this.tick) / this.ttl;

		this.y = h - (h - this.targetY) * this.easeOutQuart(progress);
		this.alpha = 1 - this.easeOutQuart(progress);
		this.tick++;
	}
}
