class bluebox{
    constructor(xPosition, yPosition, width, height) {
        var object_options = {
            friction: 1.0,
            restitution: 0.01
        }
        this.body = Bodies.rectangle(xPosition, yPosition, width, height,object_options);
        this.width = width;
        this.height = height;
        World.add(world, this.body)
    }

    // Function
    display() {
        push();
        var pos = this.body.position;
        rectMode(CENTER);
        fill("blue")
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}
