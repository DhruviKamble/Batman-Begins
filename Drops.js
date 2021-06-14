class Drops {
    constructor(x, y, r) {
        var options={
        //  isStatic: false,
         restitution: 0.1,
         friction: 0.001
      }
      var radius = 7; 
      this.r = radius;
      this.body = Bodies.circle(x, y, this.r,options);       
      World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
              
        fill(0, 0, 255)
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.r,this.r);
       
    }
     update(){
       if(this.body.position.y > height){
          Matter.Body.setPosition(this.body,{x: random(0,1000),
          y: random(-10,0)
          });
        }
     }
}