function scoreGame(frames) {

    function frameReducer(total, item, i, arr) {
        return total + scoreFrame(arr[i], arr[i+1], arr[i+2] )
    }

    return frames.reduce(frameReducer, 0)

}

function scoreFrame(currentFrame, nextFrame = [0,0], followingFrame = [0,0]) {
    const ball1 = currentFrame[0]
    const ball2 = currentFrame[1]

    const ball3 = nextFrame[0]
    const ball4 = nextFrame[1] || followingFrame[0]
    
    if (currentFrame[2]) {
        //final frame has an extra ball
        console.log("Hitting the final frame!!")
        return ball1+ball2+currentFrame[2]
    } else if (ball1 == 10 && !currentFrame[2]) {
        //Strike case
        return ball1 + ball3 + ball4
    } else if (ball1+ball2 == 10 && !currentFrame[2]) {
        //Spare case
        return ball1+ball2+ball3
    } else {
        //simple case
        return ball1+ball2
    }
}

module.exports = {
    scoreFrame,
    scoreGame
}