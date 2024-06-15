let lapsArr = [];

let commands = document.getElementById("commands");
let startInp = document.getElementById("timer-start");
let lapInp = document.getElementById("timer-lap");
let stopInp = document.getElementById("timer-stop");
let restartInp = document.getElementById("timer-restart");
let clearInp = document.getElementById("timer-clear");
let minutes = document.getElementById("timer-minutes");
let seconds = document.getElementById("timer-seconds");
let milliseconds = document.getElementById("timer-milliseconds");

function stopTimer(minutesTimer, secondsTimer, millisecondsTimer) {
  clearInterval(minutesTimer);
  clearInterval(secondsTimer);
  clearInterval(millisecondsTimer);
}

function clearTimer(minutes, seconds, milliseconds) {
  minutes.innerHTML = "00";
  seconds.innerHTML = "00";
  milliseconds.innerHTML = "00";
}

startInp.addEventListener("click", () => {
  let minutesTimer = setInterval(function () {
    minutes.innerHTML++;
  }, 60000);
  let secondsTimer = setInterval(function () {
    seconds.innerHTML++;
  }, 1000);
  let millisecondsTimer = setInterval(function () {
    milliseconds.innerHTML++;
  }, 10);

  stopInp.addEventListener("click", () => {
    stopTimer(minutesTimer, secondsTimer, millisecondsTimer);
  });

  restartInp.addEventListener("click", () => {
    stopTimer(minutesTimer, secondsTimer, millisecondsTimer);
    setTimeout(function () {
      clearTimer(minutes, seconds, milliseconds);
    }, 10);
    minutesTimer = setInterval(function () {
      minutes.innerHTML++;
    }, 60000);
    secondsTimer = setInterval(function () {
      seconds.innerHTML++;
    }, 1000);
    millisecondsTimer = setInterval(function () {
      milliseconds.innerHTML++;
    }, 10);
    
    stopInp.addEventListener("click", () => {
      stopTimer(minutesTimer, secondsTimer, millisecondsTimer);
    });
  });

  clearInp.addEventListener("click", () => {
    stopTimer(minutesTimer, secondsTimer, millisecondsTimer);
    clearTimer(minutes, seconds, milliseconds);
  });
});
