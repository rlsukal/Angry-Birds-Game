// create class
class Ground {
    constructor(x, y, width, height) {
// store the ground's state as static, with no change (json format)  
        var options = {
          isStatic: true
      }
// give the ground a body with x, y , width, and height values (parameters)
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
// add the ground to the world
      World.add(world, this.body);
    }

    display(){
// create the variable for the ground body's position
      var pos =this.body.position;
// center the rectangle body of the ground
      rectMode(CENTER);
// fill the ground's body with a color
      fill(255);
// set the position of the ground's body
      rect(pos.x, pos.y, this.width, this.height);
// reset the changes made
      pop();
    }
  };
  