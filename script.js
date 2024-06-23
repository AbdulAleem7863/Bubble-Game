// let timer = 60
// let score = 0;
// let hitrn = 0

// function increaseScore() {
//     score+= 10;
//     document.querySelector('#scoreval').textContent = score
// }

// function makeBubble() {
//     let clutter = '';
//     for (let i = 1; i <= 168; i++) {
//         let rn = Math.floor(Math.random() * 30)
//         clutter += `<div class="bubble">${rn}</div> `
//     }

//     document.querySelector('#pbtm').innerHTML = clutter
// }
// makeBubble()


// document.querySelector('#pbtm').addEventListener('click',function(details){
//    let clickedNumber = Number(details.target.textContent);
//    if (clickedNumber ===hitrn) {
//       increaseScore()
//       makeBubble()
//       getNewHit()
//    }
// })


// function runTimer() {
//     let timerInterval = setInterval(function () {
//         if (timer > 0) {
//             timer--;
//             document.querySelector('#timerval').textContent = timer

//         }
//         else {
//             clearInterval(timerInterval)
//             document.querySelector('#pbtm').innerHTML = `<h1>Game Over</h1>
//             <h2>Your Score is ${score}</h2> `
//         }
//     }, 1000);
// }
// runTimer()


// function getNewHit() {
//     hitrn = Math.floor(Math.random() * 30)
//     document.querySelector('#hitval').textContent =hitrn
// }
// getNewHit()

let timer = 60;
let score = 0;
let hitrn = 0;

function increaseScore() {
    score += 10;
    document.querySelector('#scoreval').textContent = score;
}

function makeBubble() {
    const bubbleContainer = document.querySelector('#pbtm');
    bubbleContainer.innerHTML = ''; // Clear existing bubbles

    // Calculate number of bubbles based on screen dimensions
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const bubbleSize = 40; // Size of each bubble (adjust as needed)
    const bubblesPerRow = Math.floor(screenWidth / bubbleSize);
    const rows = Math.floor(screenHeight / bubbleSize);
    const totalBubbles = bubblesPerRow * rows;

    let clutter = '';
    for (let i = 1; i <= totalBubbles; i++) {
        let rn = Math.floor(Math.random() * 30);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    bubbleContainer.innerHTML = clutter;
}

document.querySelector('#pbtm').addEventListener('click', function (details) {
    let clickedNumber = Number(details.target.textContent);
    if (clickedNumber === hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

function runTimer() {
    let timerInterval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector('#timerval').textContent = timer;
        } else {
            clearInterval(timerInterval);
            document.querySelector('#pbtm').innerHTML = `<h1>Game Over</h1><h2>Your Score is ${score}</h2>`;
        }
    }, 1000);
}
runTimer();

function getNewHit() {
    hitrn = Math.floor(Math.random() * 30);
    document.querySelector('#hitval').textContent = hitrn;
}
getNewHit();

// Initial call to makeBubble()
makeBubble();

// Handle window resize events to adjust bubble count
window.addEventListener('resize', makeBubble);


