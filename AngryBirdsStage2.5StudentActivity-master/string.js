class String{
    constructor(a,b){
var string ={bodyA:b,pointB:a,length:200,stiffness:0.2}
this.str=Matter.Constraint.create(string) 
World.add(world,this.str)
    }
    display(){
        if(this.str.bodyA)
        line (this.str.bodyA.position.x,this.str.bodyA.position.y,this.str.pointB.x,this.str.pointB.y)
    }
    detach(){
        this.str.bodyA=null;
    }
}