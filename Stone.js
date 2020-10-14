class Stone{

	constructor(x,y){

		var options = {restitution:0,friction:1,density:1}
		this.width = 40;
		this.height = 40;
		this.image = loadImage("Sprites/stone.png");
		this.body = Bodies.circle(x,y,15);
		this.r = 30;

		this.pos = this.body.position;

		World.add(world,this.body);
	}

	display(){
		var angle = this.body.angle;
		push();
		translate(this.pos.x,this.pos.y);
		rotate(angle);
		//ellipse(0,0,this.width,this.height)
		image(this.image,0,0,this.width,this.height);
		pop();
	}
}