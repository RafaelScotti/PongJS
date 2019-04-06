function Paddle(side) {
    this.yChange = 0;
    frameRate(2000);

    if (side == "RIGHT") {
        this.x = 590;
    } else if(side == "LEFT"){
        this.x = 130;
    }
    this.y = height/2;
    this.w = 12;
    this.h = 70;

    this.show = function () {
        fill(255);
        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h, 90, 90, 90, 90);
        rectMode(CORNER);
    };

    this.update = function () {
        this.y += this.yChange;
        this.y = constrain(this.y, this.h/2, height-this.h/2);
    };

    this.play = function (step) {
        this.yChange = step;
    };



}
