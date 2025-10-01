const timer = document.querySelector("#timer");
const startTimer = document.querySelector("#start");
const stopTimer = document.querySelector("#stop");
const resetTimer = document.querySelector("#reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function formatTime(timeInMs) {
  const totalSeconds = Math.floor(timeInMs / 1000);
  const hours = String(Math.floor(totalSeconds / 36000)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
    2,
    "0"
  );
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

function startTimeHandler() {
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 1000);
  }
}

function updateTimer() {
  stopTimer.disabled = false;
  const now = Date.now();
  elapsedTime = now - startTime;
  timer.textContent = formatTime(elapsedTime);
}

function stopTimeHandler() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimeHandler() {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  timer.textContent = "00:00:00";
  stopTimer.disabled = true;
}

startTimer.addEventListener("click", startTimeHandler);
stopTimer.addEventListener("click", stopTimeHandler);
resetTimer.addEventListener("click", resetTimeHandler);
