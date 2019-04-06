function Field() {
    // Field
    this.x = 100;
    this.y = 0;
    this.w = 520;
    this.h = 350;

    this.show = function () {
        fill(10);
        stroke(255);

        rect(this.x, this.y, this.w, this.h);

        strokeWeight(1);
        stroke(255);
        line(360, 0, 360, height);
        bezier(101, 40, 301, 40, 301, 310, 101, 310);
        bezier(620, 40, 420, 40, 420, 310, 620, 310);
        stroke(0);


    }

}
