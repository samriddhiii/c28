class slingshot {
    constructor(body1, point2){
        var options = {
            bodyA : body1,
            pointB : point2,
            stiffness : .03,
            length : 10
        }
        this.sling= Constraint.create(options)
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA){
        var startxy= this.sling.bodyA.position;
        var endxy= this.sling.pointB;
        line(startxy.x,startxy.y,endxy.x,endxy.y);
        }
    }
    fly(){
        this.sling.bodyA= null;
    }

}
