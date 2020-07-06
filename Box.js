class Box{
    constructor(x,y,width,height,color){
        var options = {
            'restitution':0.5,
            'density':0.7,
            'friction':0.35,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.color = color;
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(world, this.body);    
    }

    score(){
        if(this.visibility < 0 && this.visibility > -105){
            score++;
        }
    }
    display(){
        push();
        if (this.body.speed < 3){
            var angle = this.body.angle;
            var pos = this.body.position;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            strokeWeight(2);
            stroke(0);
            fill(this.color);
            rect(0,0,this.width,this.height);
            pop();
        }
        else{
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility - 5;
            tint(255,this.visibility);
            rectMode(CENTER);
            strokeWeight(0);
            pop();
        push();
        }
    }
}