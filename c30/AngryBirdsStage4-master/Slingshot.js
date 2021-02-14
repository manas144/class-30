class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.pointB = pointB
        
        this.sling = Constraint.create(options);
        this.image = loadImage ("sprites/sling1.png");
        this.image2 = loadImage ("sprites/sling2.png");
        this.image3 = loadImage ("sprites/sling3.png");

        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach (bodyA) {
     this.sling.bodyA = bodyA
    }
    display(){
        image(this.image,200,24)
        image(this.image2,172,15)
      



        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y)
            line(pointA.x - 20, pointA.y, pointB.x - 30, pointB.y);
            
            image(this.image3,pointA.x - 20,pointA.y - 20,10,30)
        }
    }
    
}
    
