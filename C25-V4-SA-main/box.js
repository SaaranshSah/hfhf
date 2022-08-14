class Fan{
constructor(x,y,w,h)
{
var options={isStatic:true}
World.add(world,this.body);
this.x=x   
 this.y=y
 this.w=w
 this.h=h
 
 this.body = Bodies.rectangle(x,y,w,h,options)
}
show()
{
push();
  translate(this.position.x,this.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();
  
  angle +=0.1;
}
}







