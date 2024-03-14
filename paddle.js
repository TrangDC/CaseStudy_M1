class Paddle {
    x;
    y;
    width;
    height;
    color;
    ctx;
    speed; //Tốc độ di chuyển

    constructor (x, y, width, height, color, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = speed;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
    }

    // Vẽ player
    drawPaddle() {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.stroke();
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    // Va chạm với bóng
    CollisionBall(Ball) {
        if (this.x <= Ball.x - Ball.radius && this.y < Ball.y + Ball.radius && this.x + this.width >= Ball.x + Ball.radius) {
            Ball.dy = -Ball.dy;
        }
    }

    moveRight() {
        this.x += this.speed;
    }
    moveLeft() {
        this.x -= this.speed;
    }

    fixedPosition () {
        if (this.x < 0) {
            this.x = 0;
        } else if(this.x + this.width > this.canvas.width) {
            this.x = this.canvas.width - this.width;
        }
    }
}