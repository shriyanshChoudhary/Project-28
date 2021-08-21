class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.SlingShot1= Constraint.create(options);
        World.add(world, this.SlingShot1);
    }

    fly(){

        this.SlingShot1.bodyA = null;
    }

      display(){
            if(this.SlingShot1.bodyA){
              var pointA = this.SlingShot1.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            fill("black");
            line(pointA.x, pointA.y, pointB.x, pointB.y);

            }
            
        
    }
    
}



