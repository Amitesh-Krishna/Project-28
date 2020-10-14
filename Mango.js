class Mango{

	constructor(x,y,width,height){

		this.width = width;
		this.height = height;
		this.image = loadImage("Sprites/mango.png");
		this.body = Bodies.circle(x,y,15,{isStatic:true});

		this.r = 30;
		this.pos = this.body.position;

		World.add(world,this.body);
	}

	display(){

		image(this.image,this.pos.x,this.pos.y,this.width,this.height);
	}
}