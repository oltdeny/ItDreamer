var cvs;
var ctx;
var gap;
var pipe = [];
var score;
var xPos;
var yPos;
var grav;
var bird;
var bg;
var fg;
var pipeUp;
var wasted;
var pipeBottom;
var fly;
var score_audio;

function init() {
    pipe = [];
    bird = new Image();
    bg = new Image();
    fg = new Image();
    pipeUp = new Image();
    pipeBottom = new Image();
    fly = new Audio();
    score_audio = new Audio();
    wasted = new Audio();
    $('#append').empty();
    cvs = document.getElementById("canvas");
    ctx = cvs.getContext("2d");
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    bird.src = "img/bird.png";
    bg.src = "img/bg.png";
    fg.src = "img/fg.png";
    pipeUp.src = "img/pipeUp.png";
    pipeBottom.src = "img/pipeBottom.png";
    fly.src = "audio/fly.mp3";
    score_audio.src = "audio/score.mp3";
    wasted.src = "audio/wasted.mp3";
    gap = 90;
    pipe[0] = {
        x : cvs.width,
        y : 0
    };
    score = 0;
    xPos = 10;
    yPos = 150;
    grav = 1.5;
    pipeBottom.onload = draw();
}

// При нажатии на какую-либо кнопку
document.addEventListener("keydown", moveUp);

function moveUp() {
    yPos -= 30;
    fly.play();
}

$("#play").bind("click", function () {
     init();
 });
function draw() {
    ctx.drawImage(bg, 0, 0);
    for(var i = 0; i < pipe.length; i++) {
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);
        pipe[i].x -=2;
        if(pipe[i].x == 126) {
            pipe.push({
                x : cvs.width,
                y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            });
        }
        // Отслеживание прикосновений
        if(xPos + bird.width >= pipe[i].x
            && xPos <= pipe[i].x + pipeUp.width
            && (yPos <= pipe[i].y + pipeUp.height
            || yPos + bird.height >= pipe[i].y + pipeUp.height + gap)
            || yPos + bird.height >= cvs.height - fg.height) {
            wasted.play();
                $('#append').append("<div style='width: auto' class=\"reg_form\">\n" +
                "        <div>\n" +
                "            Упс.. Вы проиграли! Ваш счет: "+score+ ". Хотите сыграть еще?\n" +
                "        </div>\n" +
                "        <input type='button' id='yes' class=\"buttons\" value='Да!' onclick='init();'>\n" +
                "        <input type='button' id='no' class=\"buttons\" value='Нет, выхожу!' onclick='location.reload();'>\n" +
                "    </div>");
            return;
        }

        if(pipe[i].x == 6) {
            score++;
            score_audio.play();
        }
    }

    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, xPos, yPos);

    yPos += grav;

    ctx.fillStyle = "#000";
    ctx.font = "24px Verdana";
    ctx.fillText("Счет: " + score, 10, cvs.height - 20);

    requestAnimationFrame(draw);
}
