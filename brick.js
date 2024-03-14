class Brick {
    row;
    column;
    width;
    height;
    marginTop; //Lề trên
    marginLeft; //Lề trái
    distance;  //Khoảng cách giữa các brick
    score;
    ctx;
    i;
    j;

    constructor(row, column, width, height, marginTop, marginLeft, distance, score, color, i, j) {
        this.width = width;
        this.height = height;
        this.marginTop = marginTop;
        this.marginLeft = marginLeft;
        this.distance = distance;
        this.score = score;
        this.row = row;
        this.column = column;
        this.canvas = document.getElementById('myCanvas')
        this.ctx = this.canvas.getContext('2d')
        this.color = color;
        this.i= i;
        this.j = j;
    }

   draw(brickX, brickY) {
       ctx.beginPath();
       ctx.rect(brickX, brickY, this.width, this.height);
       ctx.fillStyle = brick.color;
       ctx.fill();
       ctx.closePath();
   }




}