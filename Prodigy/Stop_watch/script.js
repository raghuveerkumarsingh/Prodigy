let timer;
let running = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
  if (running) {
    clearInterval(timer);
    document.getElementById("startStopBtn").textContent = "Start";
  } else {
    timer = setInterval(updateDisplay, 1000);
    document.getElementById("startStopBtn").textContent = "Stop";
  }
  running = !running;
}

function reset() {
  clearInterval(timer);
  running = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("startStopBtn").textContent = "Start";
}

function updateDisplay() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
  let displayString = 
    (hours < 10 ? "0" : "") + hours + ":" +
    (minutes < 10 ? "0" : "") + minutes + ":" +
    (seconds < 10 ? "0" : "") + seconds;
  document.getElementById("display").textContent = displayString;
}
