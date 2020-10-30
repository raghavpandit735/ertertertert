class Circle{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':0,
            'density':0.5,
            'isStatic': false
        }
        this.body = Bodies.circle(x, y, radius,  options);
      this.radius = radius
       // this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //rectMode(CENTER);
        ellipse(0, 0, this.width, this.height);
        // imageMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}
