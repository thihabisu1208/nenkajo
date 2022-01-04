export default class Circles {
	constructor(x, y, hue) {
		this.x = x;
		this.y = y;
		this.hue = hue;
		this.size = 0;
		this.endSize = this.getRandomInt(100, 130);
	}

	getRandomInt(min, max) {
		return Math.round(Math.random() * (max - min)) + min;
	}

	draw(ctx) {
		if (this.size < this.endSize) {
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
			ctx.fillStyle = `hsla(${this.hue}, 100%, 60%, .2)`;
			ctx.fill();
			ctx.closePath();
		}
	}

	update() {
		this.size += 15;
	}
}
