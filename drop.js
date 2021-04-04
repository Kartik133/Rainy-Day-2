class Drop {
    constructor(x,y) {
       var options = {
           restitution:1,
           density:1,
           friction:0.1
       };

       this.radius = 5;
       this.body = Bodies.circle(x,y,5,options);

       World.add(world,this.body);
    }

    display() {
      var pos = this.body.position;
      var Angle = this.body.angle;
 
      push();
       translate(pos.x,pos.y);
       rotate(Angle);
       fill(0, 4, 237);
       circle(0,0,this.radius);

       if(this.body.position.y>height) {
        Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,800)});
       }
      pop();
    }
}