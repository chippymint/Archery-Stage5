class Board {
    constructor(x,y,width,height) {
        const options = {
            isStatic: true
          };
      
          this.body = Matter.Bodies.rectangle(x, y, width, height, options);
          this.width = width;
          this.height = height;
          this.collapse = false;
          this.image = loadImage("./assets/board.png");
      
          World.add(world, this.body);
      

    }

    display() {
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}