
var field;
var paddle1;
var paddle2;
var ball;

function setup() {
    pixelDensity(1);
    createCanvas(900, 350); // 720x350


    field = new Field();
    paddle1 = new Paddle("LEFT");
    paddle2 = new Paddle("RIGHT");
    ball = new Ball();


}

function draw() {
    background(20);
    field.show();

    paddle1.show();
    paddle2.show();
    paddle1.update();
    paddle2.update();

    ball.show();
    ball.update();
    if(checkCollisionPaddle2(ball, paddle2)){
        ball.xSpeed*=-1;
    }
    if(checkCollisionPaddle1(ball, paddle1)){
        ball.xSpeed*=-1;
    }

    textSize(32);
    text('Pong', 10, height/2);

}

function keyReleased() {
    paddle2.play(0);
    paddle1.play(0);
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        paddle2.play(-10);
    } else if (keyCode === DOWN_ARROW) {
        paddle2.play(+10);
    }

    if (key === 'a') {
        paddle1.play(-10);
    } else if (key === 'z') {
        paddle1.play(+10);
    }

    return false; // prevent default
}

function checkCollisionPaddle2(ball, paddleRight) {
    if(ball.x >= paddleRight.x && ball.y < paddleRight.y + paddleRight.h/2 && ball.y > paddleRight.y - paddleRight.h/2){
        return true;
    }
}

function checkCollisionPaddle1(ball, paddleLeft) {
    if(ball.x <= paddleLeft.x && ball.y < paddleLeft.y + paddleLeft.h/2 && ball.y > paddleLeft.y - paddleLeft.h/2){
        return true;
    }
}

