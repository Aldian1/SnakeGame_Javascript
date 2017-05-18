

//define where canvas is
var myCanvas = document.getElementById("myCanvas");
var scoreDetails = document.getElementById("scoreDetails");
var scoreCtx = scoreDetails.getContext("2d");
var ctx = myCanvas.getContext("2d");

//Global modifiers
var bodyPart = [];
var size = 5;
var xPosition = 0;
var yPosition = 0;
var startingPosition = xPosition + size;

//draw a snake based on size
drawSnake();

//called every 1/2 second to update the snake position
setInterval(drawUpdate, 500);

function drawSnake() {
    for (var i = 0; i < size; i++) {

        var tempx = size * 10 - i * 10;
        ctx.fillRect(tempx, 0, 10, 10);
        bodyPart.push(tempx);
    }
}
function drawUpdate() {

    for (var i = 0; i <= size; i++) {
        ctx.clearRect(bodyPart[i], 0, 10, 10);
        ctx.fillRect(bodyPart[i], 10, 10, 10);
        bodyPart[i] = bodyPart[i] + 10;
        if (bodyPart[i] >= myCanvas.clientWidth) {
            bodyPart[i] = -10;
        }
    }
    console.log(bodyPart[0])
}



//add event listeners
//key events must be in lower case
document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case "w":
            drawSnake();
            break;
        case "a":

            break;
        case "s":

            break;
        case "d":

            break;
        default:
            return; // Quit when this doesn't handle the key event.
    }
}, true);
