class Paper {
    constructor(x,y,radius) {
        var options = {
            isStatic: false,
            'restitution': 0.3,
            density : 0.1
        }
        
        this.body = Bodies.circle(x,y,radius, options);
        this.radius = radius
        this.image = loadImage("paper.png");
        

        World.add(world, this.body);
    }
    display(){
        
        imageMode(RADIUS);

        fill("pink");

        image(this.image,this.body.position.x, this.body.position.y, this.radius,this.radius);

    }       
};