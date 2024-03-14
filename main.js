let paddle = new Paddle (250, 480, 120, 15, 'blue', 40);
let ball = new Ball(150, 280, 10, 'red', 3, 3);
let brick = new Brick (6, 10, 54, 18, 40, 33, 12, 0, 'green');

let canvas =document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');


let brickArr = [];
for (let i=0; i < brick.column; i++) {
    brickArr[i] = [];
    for (let j=0; j < brick.row; j++) {
        //Đặt tọa độ của brick
        brickArr[i][j] = {
            x: 0,
            y: 0,
            isBroken: false
        }
    }
}


function drawBrick() {
    for (let i=0; i < brick.column; i++) {
        for (let j=0; j < brick.row; j++) {
            if (brickArr[i][j].isBroken === false) {
                let brickX = (brick.width + brick.distance) * i + brick.marginLeft;
                let brickY = (brick.height + brick.distance) * j + brick.marginTop;
                brickArr[i][j].x = brickX;
                brickArr[i][j].y = brickY;
                brick.draw(brickX, brickY);
            }
        }
    }
}
console.log(brickArr);

// Kiểm tra va chạm
function hitDetection() {
    for (let i = 0; i < brick.column; i++) {
        for (let j = 0; j < brick.row; j++) {
            let b = brickArr[i][j];
            if(b.isBroken === false) {
                if (ball.x > b.x && ball.x < b.x + brick.width && ball.y > b.y && ball.y < b.y + brick.height) {
                    ball.dy = -ball.dy;
                    b.isBroken = true;
                    brick.score++;
                        if (brick.score === brick.row * brick.column) {
                        alert("BẠN THẮNG RỒI! ĐỈNH CỦA CHÓP!");
                        document.location.reload();
                    }
                }
            }
        }
    }
}

// Hàm hiện điểm số
function trackScore() {
    ctx.font = '20px sans-serif';
    ctx.fillStyle = 'black';
    ctx.fillText('Điểm số: ' + brick.score*10, 8,30,)
}

// Hàm reset game
function resetgame() {
    let reset = document.getElementById('reset');
    reset.addEventListener('click', function() {
        window.location.reload();
    })
}

// Kiểm tra game kết thúc chưa
let Gameover = false;

// Main function
function play() {
    if (!Gameover) {
        ball.move();                    //Di chuyển bóng bằng xóa màn canvas
        ball.draw();                    //Vẽ bóng
        paddle.drawPaddle();            //Vẽ người chơi
        drawBrick();                    //Vẽ hàng gạch
        paddle.fixedPosition();
        ball.collisionWall();           //Bóng chạm tường
        paddle.CollisionBall(ball);     //Người chơi chạm bóng
        hitDetection()                  //Bóng chạm gạch
        trackScore()                    //Tính điểm và hiển thị
        ball.update();                  //Cập nhật tọa độ bóng
        resetgame();                    //Reset game bằng nút

        requestAnimationFrame(play);

        // Điều kiện thua game
        if (ball.y > ball.canvas.height - ball.radius) {
            Gameover = true;
        }
    } else {
        alert('Thua rồi bạn ơi!');
        document.location.reload();
    }
}
play();





window.addEventListener('keyup', function(event) {
        switch (event.keyCode) {
            case 37:
                paddle.moveLeft();
                break;
            case 39:
                paddle.moveRight();
                break;
        }
})