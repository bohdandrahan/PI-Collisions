class Block {
	constructor(x, w, v, m) {
		this.x = x;
		this.y = height - w - 2;
		this.w = w;
		this.velocity = velocity;
		this.mass = mass;
	}

	collide(otherBlock) {
		if (this.x + this.w < otherBlock.x || this.x > otherBlock.x + other.w) {
			return False;
		} else {
			return True;
		}
	}
	bounce(otherBlock) {
		let totalMass = this.mass + otherBlock.mass;
		let newVelocity = (this.mass - otherBlock.mass) / totalMass * this.velocity;
		newVelocity += (2 * other.mass / totalMass) * otherBlock.velocity;
		return newVelocity;
	}
	hitWall() {
		return (this.x < 0);
	}

	update() {
		this.x += this.velocity;
	}
	render() {
		nostroke();
		fill(255, 0, 0);
		rect(this.x, this.y, this.w, this.w)
	}
}