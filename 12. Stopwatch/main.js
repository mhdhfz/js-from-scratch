// grab elements

const buttonStart = document.querySelector('[data-action="start"]');
const buttonStop = document.querySelector('[data-action="stop"]');
const buttonReset = document.querySelector('[data-action="reset"]');
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
let timerTime = 00;
let isRunning = false;
let interval;

// functions
function incrementTimer() {
  timerTime++;

  const numOfMinutes = Math.floor(timerTime / 60);
  const numOfSeconds = timerTime % 60;

  minutes.innerText = pad(numOfMinutes);
  seconds.innerText = pad(numOfSeconds);
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  interval = setInterval(incrementTimer, 1000);
}
function stopTimer() {
  if (!isRunning) return;
  isRunning = false;
  clearInterval(interval);
}
function resetTimer() {
  stopTimer();

  timerTime = 0;
  minutes.innerText = "00";
  seconds.innerText = "00";
}
function pad(number) {
  return number < 10 ? "0" + number : number;
  //   if (number < 10) {
  //     return "0" + number;
  //   } else {
  //     return number;
  //   }
}

// add event listener
buttonStart.addEventListener("click", startTimer);
buttonStop.addEventListener("click", stopTimer);
buttonReset.addEventListener("click", resetTimer);
