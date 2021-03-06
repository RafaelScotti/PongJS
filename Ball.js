function Ball() {
    this.x = 360;
    this.y = 175;
    this.r = 14;
    this.xSpeed = 4;
    this.ySpeed = 4;

    this.borderLeft = this.x - this.r;
    this.borderRight = this.x + this.r;
    this.borderTop = this.y - this.r;
    this.borderBot = this.y + this.r;

    this.reset = function () {
        this.x = 360;
        this.y = 175;
    };

    this.show = function () {
        fill(80);
        rectMode(CENTER);
        circle(this.x, this.y, this.r);
        rectMode(CORNER);
    };
    this.update = function () {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        this.offScreen();
    };

    this.offScreen = function () {
        if (this.y >= 347 || this.y <= 3) {
            this.ySpeed *= -1;
        }

        if (this.x > 617 || this.x <= 104) {
            this.reset();
        }
    };



}
