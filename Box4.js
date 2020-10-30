class Box4 extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.Visibility = 255;
      this.image = loadImage("pink final.png")
      this.image = this.body;
    }
    display(){
     
      if(this.body.speed < 2){
        super.display();
        fill(255,0,255);
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



/*
  class Pig extends BaseClass {
    constructor(x, y){
      super(x,y,50,50);
      this.image = loadImage("sprites/enemy.png");
      this.Visiblity = 255;
    }
  
   display(){
     console.log(this.body.speed);
     if(this.body.speed < 3){
      super.display();
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
  
  
  
  };
  */