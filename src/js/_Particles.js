export default class Particles {
	constructor(x, y, hue, i) {
		this.x = x;
		this.y = y;
		this.hue = hue;
		this.size = this.getRandomInt(2, 3);
		this.speed = this.getRandomInt(30, 40) / 10;
		this.angle = this.getRandomInt(0, 36) + 36 * i;
	}

	getRandomInt(min, max) {
		return Math.round(Math.random() * (max - min)) + min;
	}

	draw(ctx) {
		if (this.size > 0) {
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
			ctx.fillStyle = `hsla(${this.hue}, 100%, 50%, 1)`;
			ctx.fill();
			ctx.closePath();
		}
	}

	update() {
		this.radian = (Math.PI / 180) * this.angle;
		this.x += this.speed * Math.sin(this.radian);
		this.y += this.speed * Math.cos(this.radian);
		this.size -= 0.05;
	}
}
