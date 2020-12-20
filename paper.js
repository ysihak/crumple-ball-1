class Paper{
    constructor(x,y,Radius) {
      var options={
     isStatic:false,
     restitution:0.8,
     friction:0.5,
     density:0.8     
      }
      this.body=Bodies.circle(x,y ,Radius,options)
      this.Radius= Radius;
      World.add(world, this.body)

    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse( 0, 0, this.Radius, this.Radius);
        pop();
    }
}

