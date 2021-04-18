class launcher{
    constructor(bodyA,pointB)
    {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.launcherObj = Constraint.create(options);
        World.add(world,this.launcherObj);

    }
    fly(){
        this.launcherObj.bodyA = none;
    }
    display()
    {
        if(this.launcherObj.bodyA){

        
        var pointA = this.launcherObj.bodyA.position;
        var pointB = this.launcherObj.pointB;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}