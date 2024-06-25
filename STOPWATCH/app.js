const watchDays = document.querySelector(".days");
const watchHours = document.querySelector(".hours");
const watchMinutes = document.querySelector(".minutes");
const watchSeconds = document.querySelector(".seconds");

// BUTTONS
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const clearBtn = document.querySelector(".clear");

eventListeners();

function eventListeners() {
  startBtn.addEventListener("click", startTimer);
  stopBtn.addEventListener("click", stopTimer);
  clearBtn.addEventListener("click", clearTimer);
}

let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;
function startTimer() {
  startBtn.disabled = true;
  //SECOND
  counterSeconds = setInterval(() => {
    seconds++;
    watchSeconds.textContent = `Seconds : ${seconds}`;

    if (seconds === 60) {
      seconds = 0;
      watchSeconds.textContent = `Seconds : ${seconds}`;
    }
  }, 1000);
  // MINUTE
  counterMinute = setInterval(() => {
    minutes++;
    watchMinutes.textContent = `Minutes : ${minutes}`;

    if (minutes === 60) {
      minutes = 0;
      watchMinutes.textContent = `Minutes : ${minutes}`;
    }
  }, 60000);
  // HOURS
  counterHours = setInterval(() => {
    hours++;
    watchHours.textContent = `Hours : ${hours}`;

    if (hours === 24) {
      hours = 0;
      watchHours.textContent = `Hours : ${hours}`;
    }
  }, 3600000);
  //DAYS
  counterDays = setInterval(() => {
    days++;
    watchDays.textContent = `Days : ${days}`;
  }, 86400000);
}

function stopTimer() {
  startBtn.disabled = false;

  clearInterval(counterSeconds);
  clearInterval(counterMinute);
  clearInterval(counterHours);
  clearInterval(counterDays);
}

function clearTimer() {
  startBtn.disabled = false;

  watchSeconds.textContent = `Second : 0`;
  watchMinutes.textContent = "Minutes : 0";
  watchHours.textContent = "Hours : 0";
  watchDays.textContent = "Days : 0";

  clearInterval(counterSeconds);
  clearInterval(counterMinute);
  clearInterval(counterHours);
  clearInterval(counterDays);
}
