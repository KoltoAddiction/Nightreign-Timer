var button;
var phase;
var timer;

document.addEventListener("DOMContentLoaded", () => {

    button = document.getElementById("button");
    phase = document.getElementById("phase");
    timer = document.getElementById("timer");

    button.addEventListener("click", startDay);

})

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function startDay() {
    
    let remaining = 270;
    let phaseCounter = 0;
    

    phase.innerHTML = "Ring One Forming";

    const interval = setInterval(() => {
        remaining--;

        timer.innerHTML = formatTime(remaining);

        if (remaining < 0) {
            if (phaseCounter == 0) {
                phase.innerHTML = "Ring One Closing";
                remaining = 180;
                phaseCounter++;
            } else if (phaseCounter == 1) {
                phase.innerHTML = "Ring Two Forming";
                remaining = 210;
                phaseCounter++;
            } else if (phaseCounter == 2) {
                phase.innerHTML = "Ring Two Closing";
                remaining = 180;
                phaseCounter++;
            } else if (phaseCounter == 3){
                phase.innerHTML = "Boss!"
                phaseCounter = 0;
                clearInterval(interval);
            }
        }
    }, 1000);

}