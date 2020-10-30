class Box2 extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.Visibility = 255;
      this.image = loadImage("red final.png");
      this.image = this.body;
    }
    display(){
      if(this.body.speed < 2){
        super.display();
        fill(248, 255, 63);
       }
       else{
        World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();
       }
    }
  }
