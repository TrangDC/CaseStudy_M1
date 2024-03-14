class Ball {
    x;
    y;
    radius;
    ctx;
    color;
    dx; //Gia tốc quả bóng
    dy;

    constructor(x, y, radius, color, dx, dy) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.dx = dx;
        this.dy = dy;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
    }

    // Vẽ quả bóng
    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.stroke();
        this.ctx.fill();
        this.ctx.closePath();
    }

    // Xóa toàn màn hình canvas
    move() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    //Điều kiện bóng va chạm tường
    collisionWall() {
            if (this.x <= this.radius || this.x >= this.canvas.width - this.radius) {
                this.dx = -this.dx;
            }
            if (this.y <= this.radius) {
                // || this.y >= this.canvas.height - this.radius) {
                this.dy = -this.dy;
            }
        }


    update() {
        this.x += this.dx;
        this.y += this.dy;
    }

}