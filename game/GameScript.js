var cvs;
var ctx;
var score;
var xPos;
var yPos;
var drawFonY;
var drawShot;
var cosmolet;
var meteor;
var meteors = [];
var space;
var wasted;
var shot;
var shotSound;
var shots = [];
var explosion;
var is_shot = false;
var is_splice = false;
var is_add = true;
var is_add_extra = false;
var fly;
var score_audio;
var current_time = 0;
/** function init()
 * @param null
 * Функция инициализации всех переменных, звуковых файлов, изображений.
 * Вызывает функцию отрисовки после загрузки файлов.
 * @return null
 * */
function init() {
    current_time = 0;
    meteors = [];
    shots = [];
    cosmolet = new Image();
    meteor = new Image(10, 10);
    shot = new Image();
    shotSound = new Audio();
    space = new Image();
    explosion = new Image();
    fly = new Audio();
    score_audio = new Audio();
    wasted = new Audio();
    is_shot = false
    $('#append').empty();
    cvs = document.getElementById("canvas");
    ctx = cvs.getContext("2d");
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    cosmolet.src = "img/cosmo.gif";
    meteor.src = "img/meteor.png";
    space.src = "img/kosmos12.png";
    explosion.src = "img/explosion.png";
    shot.src = "img/piu.png";
    shotSound.src = "audio/shot.mp3";
    fly.src = "audio/fly.wav";
    score_audio.src = "audio/score.mp3";
    wasted.src = "audio/wasted.mp3";
    meteors[0] = {
        x : 30,
        y : 30
    };
    score = 0;
    xPos = 225;
    yPos = cvs.height - 100;
    drawFonY = 0;
    drawShot = 0;
    shots[0] = {
        x: 0,
        y: 0
    };
    wasted.onload = draw();
}
/* При нажатии на какую-либо кнопку */
document.addEventListener("keydown", function (ev) {
    if(ev.keyCode == 37){
        moveLeft();
    }
    else if(ev.keyCode == 39){
        moveRight();
    }
    else if(ev.keyCode == 38){
        Shot();
    }
});
/** function moveLeft()
 * @param null
 * Функция меняющая коордынаты космолета для перемещения влево
 * @return null
 * */
function moveLeft() {
    var step = 0;
    var firstpos = xPos;
    if(!(xPos - 3 < 5)){
        setInterval(function () {
            if(step < 50){
                xPos = firstpos - step;
                step += 3;
            }
            return false;
        }, 30);
    }
    fly.play();
}
/** function moveRight()
 * @param null
 * Функция меняющая коордынаты космолета для перемещения вправо
 * @return null
 * */
function moveRight() {
    var step = 0;
    var firstpos = xPos;
    if(xPos + 60 < cvs.width - 5){
        setInterval(function () {
            if(step < 50){
                xPos = firstpos + step;
                step += 5;
            }
            return false;
        }, 30);
    }
    fly.play();
}
/** function Shot()
 * @param null
 * Функция отвечающая за выпуск ракеты
 * @return null
 * */
function Shot() {
    is_shot = true;
    shotSound.play();
}
/* Запуск игры по нажатию на кнопку "Играть" */
$("#play").bind("click", function () {
     init();
 });
/** function draw()
 * @param null
 * Функция отвечающая за отрисовку изображений на canvas
 * В ней также проверяется попадание космолета в метеор и ракеты в метеор.
 * Также происходит подсчет сбитых метеоров
 * @return null
 * */
function draw() {
    var yFon = cvs.height - 1919 + drawFonY;
    if(yFon > 0){
        drawFonY = 0;
    }
    current_time++;
    ctx.drawImage(space, 0, yFon);
    for(var i = 0; i < meteors.length; i++) {
        ctx.drawImage(meteor, meteors[i].x, meteors[i].y, 70, 70);
        meteors[i].y += 5;
        if(current_time == 30){
            meteors.push({
                x : Math.floor(Math.random() * 500) - meteor.width,
                y : 10
            });
            current_time = 0;
        }
        if(((xPos >= meteors[i].x
            && xPos <= meteors[i].x + 70)||(xPos + 60 < meteors[i].x + 70 && xPos + 60 >= meteors[i].x))&&((yPos + 112 > meteors[i].y)&&(yPos < meteors[i].y))){
            wasted.play();
            ctx.drawImage(cosmolet, xPos, yPos);
            ctx.drawImage(explosion, xPos - 30, yPos - 20);
                $('#append').append("<div style='width: auto' class=\"reg_form\">\n" +
                "        <div>\n" +
                "            Упс.. Вы проиграли! Ваш счет: "+score+ ". Хотите сыграть еще?\n" +
                "        </div>\n" +
                "        <input type='button' id='yes' class=\"buttons\" value='Да!' onclick='init();'>\n" +
                "        <input type='button' id='no' class=\"buttons\" value='Нет, в меню!' onclick='location.reload();'>\n" +
                "    </div>");
            return;
        }
    }
    for (var i = 0; i < shots.length; i++){
        ctx.drawImage(shot, shots[i].x, shots[i].y);
        shots[i].y -= 5;
        if(is_shot){
            shots.push({
                x : xPos,
                y : yPos - 50
            });
            is_shot = false;
        }
        for(var j = 1; j < meteors.length; j++){
            if(((shots[i].x >= meteors[j].x && shots[i].x <= meteors[j].x + 70)||(shots[i].x + 72 < meteors[j].x + 70 && shots[i].x + 72 >= meteors[j].x))&&((shots[i].y + 70 > meteors[j].y)&&(shots[i].y < meteors[j].y))){
                ctx.drawImage(explosion, shots[i].x, shots[i].y);
                meteors.splice(j, 1);
                score++;
            }
        }
    }
    drawFonY += 3;
    ctx.drawImage(cosmolet, xPos, yPos);
    ctx.fillStyle = "white";
    ctx.font = "24px Verdana";
    ctx.fillText("Счет: " + score, 10, cvs.height - 20);
    requestAnimationFrame(draw);
}
