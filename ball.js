class Ball{
    constructor(x,y,radius){
        var options = {
            'restitiution':0.8,
            'friction':1.0,
            'density':1.0,
        }
        this.image = loadImage("polygon.png");
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
        
    }
    display(){
        var pos = this.body.position;
        fill(176, 219, 83);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius);
    }
}