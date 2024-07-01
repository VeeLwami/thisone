const ball = document.getElementById('ball');
const mazeContainer = document.getElementById('maze-container');
let ballPosition = { x: 0, y: 0 };

function moveBall(dx, dy) {
    const newX = ballPosition.x + dx;
    const newY = ballPosition.y + dy;

    if (newX >= 0 && newX < 10 && newY >= 0 && newY < 10) {
        ballPosition.x = newX;
        ballPosition.y = newY;
        ball.style.transform = `translate(${ballPosition.x * 50}px, ${ballPosition.y * 50}px)`;
    }
}

if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function(event) {
        let tiltX = event.beta;  // In degree in the range [-180,180]
        let tiltY = event.gamma; // In degree in the range [-90,90]

        if (tiltX > 90) { tiltX = 90 };
        if (tiltX < -90) { tiltX = -90 };

        tiltX += 90;
        tiltY += 90;

        let moveX = 0;
        let moveY = 0;

        if (tiltY > 100) moveX = 1; // move right
        else if (tiltY < 80) moveX = -1; // move left

        if (tiltX > 100) moveY = 1; // move down
        else if (tiltX < 80) moveY = -1; // move up

        moveBall(moveX, moveY);
    });
}
