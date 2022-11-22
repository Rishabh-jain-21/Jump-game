console.log("js connected");
cross = true;

document.onkeydown = function (e) {
    // console.log(e.keyCode);
    var jumper = document.querySelector('.jumper');
    if (e.keyCode == 38 || e.keyCode == 32 || e.keyCode == 87) {
        jumper.classList.add('animateJumper');
        setTimeout(function () {
            jumper.classList.remove('animateJumper');
        }, 700);
    }
};

setInterval(function () {
    var audio = document.getElementById('gameOverSound');
    var gameOver = document.querySelector('.gameOver');
    var jumper = document.querySelector('.jumper');
    var obstacle = document.querySelector('.obstacle');

    console.log(cross);

    // getting position of the object
    var obx = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    var oby = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    var jux = parseInt(window.getComputedStyle(jumper, null).getPropertyValue('left'));
    var juy = parseInt(window.getComputedStyle(jumper, null).getPropertyValue('top'));

    var offsetX = Math.abs(jux - obx);
    var offsetY = Math.abs(juy - oby);


    // game over Logic
    if (offsetX < 100 && offsetY < 70) {
        obstacle.classList.remove('animateObstacle');
        gameOver.classList.add('gameOver_1');
        gameOver.classList.add('over');
        audio.play();
    } else if (offsetX < 100 && cross) {
        setScore();
        cross = false;
        setTimeout(() => { cross = true }, 1000);
    }
}, 100);

function setScore() {
    var score = document.querySelector('.newScore');
    score.innerHTML = parseInt(score.innerHTML) + 5;
    console.log(score);
}