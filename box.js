class Box{
    constructor(x, y, width, height,fill){
      var options = {
        isStatic: false
    }
    this.fill = fill;
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.visibility = 255;

  }
  display(){
    if(this.body.speed < 8){ 
      push();
      var pos =this.body.position;
      rectMode(CENTER);
      fill(this.fill);
      rect(pos.x, pos.y, this.width, this.height);
      this.visibility = this.visibility -5
      tint(255,this.visibility);
      pop();
   }
   else{
    World.remove(world,this.body); 
   }
  }
} 