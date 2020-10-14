class Ground{

	constructor(x,y,width,height){
		this.width = width;
		this.height = height;

		var options = {friction:1,density:1.2,isStatic:true};

		this.body = Bodies.rectangle(x,y,width,height,options)
		rectMode(CENTER);

		this.pos =this.body.position;

		World.add(world,this.body)
	}

	display(){
		
		var angle = this.body.angle;
		push();
		fill("brown")
		translate(this.pos.x,this.pos.y);
		rotate(angle);
		rect(0,0,this.width,this.height)
		pop();

	}
}