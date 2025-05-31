const windowHeight = window.innerHeight
const windowWidth = window.innerWidth
const ball = document.createElement('div')
document.body.appendChild(ball)
const LPaddle = document.createElement('div')
document.body.appendChild(LPaddle)
let LPaddleWidth =20
let LPaddleHeight = 200
let LPaddleSpeed = 12
let LPaddleYPosition = windowHeight / 2 - LPaddleHeight / 2;
let LPaddleXPosition = 70
const ballRadius = 30
let ballXPosition = windowWidth/2 - ballRadius
let ballYPosition = windowHeight/2 - ballRadius
let ballSpeed = 5
let ballXDirection =1
let ballYDirection = 1



setInterval(moveBall,10)

function moveBall(){
    ballXPosition = ballXPosition + ballSpeed*ballXDirection
    ballYPosition = ballYPosition + ballSpeed * ballYDirection;
    ball.style.left = `${ballXPosition}px`
    ball.style.top = `${ballYPosition}px`
    if (ballYPosition < 0 || ballYPosition > windowHeight - 2 * ballRadius) {
        ballYDirection = ballYDirection *-1
    }
    if(ballXPosition <0||ballXPosition > windowWidth-2*ballRadius){
        ballXDirection = ballXDirection *-1
    }

    let ballTop = ballYPosition
    let ballBottom = ballYPosition + 2* ballRadius
    let ballLeft = ballXPosition
    let LPaddleTop = LPaddleYPosition
    let LPaddleBottom = LPaddleYPosition + LPaddleHeight
    let LPaddleRight = LPaddleXPosition + LPaddleWidth

    if (ballXPosition < 0) {//game over
        ballradius = 0;
    }
    if (
        (ballBottom >= LPaddleTop) &&
        (ballTop < LPaddleBottom) &&
        (ballLeft <= LPaddleRight) &&
        (ballXDirection == -1)
    ) {
        ballXDirection = ballXDirection * -1
        score = score + 1
    }

}




createBall()

function createBall(){
    ball.style.height = "100px"
    ball.style.width = "100px"
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor="green"
    ball.style.position = "absolute"
    ball.style.top = `${ballYPosition}px`
    ball.style.left = `${windowWidth / 2 - ballRadius/2}px`
}

createLPaddle();


function createLPaddle() {
    LPaddle.style.height = `${LPaddleHeight}px`
    LPaddle.style.width = `${LPaddleWidth}px`
    LPaddle.style.background = 'blue'
    LPaddle.style.position = 'absolute'
    LPaddle.style.left = "70px"
    LPaddle.style.top = `${LPaddleYPosition}px`
}

wKey = false
sKey = false

document.addEventListener('keydown', (event) => {
    if (event.key == 'w') {
        wKey = true
    }
    if (event.key == 's') {
        sKey = true
    }

})
document.addEventListener('keyup', (event) => {
    if (event.key == 'w') {
        wKey = false
    }
    if (event.key == 's') {
        sKey = false
    }
})

function moveLPaddle() {
    if (wKey == true && LPaddleYPosition > 0) {
        LPaddleYPosition = LPaddleYPosition - LPaddleSpeed
    }
    if (sKey == true && LPaddleYPosition < windowHeight - LPaddleHeight) {
        LPaddleYPosition = LPaddleYPosition + LPaddleSpeed
    }
    LPaddle.style.top = `${LPaddleYPosition}px`
}

function animate() {
    moveBall()
    moveLPaddle()
    requestAnimationFrame(animate)
}
animate()
