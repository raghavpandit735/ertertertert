class Hexagon extends BaseClass {
  constructor(x,y){
    super(x,y,100,100);
    this.image = loadImage("ball.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
  }
}
