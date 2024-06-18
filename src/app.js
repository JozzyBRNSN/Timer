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
let lapsMin = document.getElementById("laps-min");
let lapsSec = document.getElementById("laps-sec");
let lapsMill = document.getElementById("laps-mill");

function formatTimer(value) {
  if (value.innerHTML < 60) {
    value.innerHTML++;
  } else {
    value.innerHTML = "00";
    value.innerHTML++;
  }
  if (value.innerHTML < 10) {
    value.innerHTML = "0" + value.innerHTML;
  }
  return value.innerHTML;
}

function stopTimer(minutesTimer, secondsTimer, millisecondsTimer) {
  clearInterval(minutesTimer);
  clearInterval(secondsTimer);
  clearInterval(millisecondsTimer);
}

function createLap(minutes, seconds, milliseconds) {
  let lapsMinResults = document.createElement("span");
  laps.appendChild(lapsMinResults);
  lapsMinResults.innerHTML = minutes.innerHTML;
}

function clearTimer(minutes, seconds, milliseconds) {
  minutes.innerHTML = "00";
  seconds.innerHTML = "00";
  milliseconds.innerHTML = "00";
}

startInp.addEventListener("click", () => {
  let minutesTimer = setInterval(function () {
    formatTimer(minutes);
  }, 60000);
  let secondsTimer = setInterval(function () {
    formatTimer(seconds);
  }, 1000);
  let millisecondsTimer = setInterval(function () {
    milliseconds.innerHTML = Math.floor(new Date().getMilliseconds() / 10);
    if (milliseconds.innerHTML < 10) {
      milliseconds.innerHTML = "0" + milliseconds.innerHTML;
    }
    return milliseconds.innerHTML;
  }, 10);

  stopInp.addEventListener("click", () => {
    stopTimer(minutesTimer, secondsTimer, millisecondsTimer);
    lapsArr.push(minutes, seconds, milliseconds);
  });

  restartInp.addEventListener("click", () => {
    stopTimer(minutesTimer, secondsTimer, millisecondsTimer);
    setTimeout(function () {
      clearTimer(minutes, seconds, milliseconds);
    }, 10);
    minutesTimer = setInterval(function () {
      formatTimer(minutes);
    }, 60000);
    secondsTimer = setInterval(function () {
      formatTimer(seconds);
    }, 1000);
    millisecondsTimer = setInterval(function () {
      milliseconds.innerHTML = Math.floor(new Date().getMilliseconds() / 10);
      if (milliseconds.innerHTML < 10) {
        milliseconds.innerHTML = "0" + milliseconds.innerHTML;
      }
      return milliseconds.innerHTML;
    }, 10);

    stopInp.addEventListener("click", () => {
      stopTimer(minutesTimer, secondsTimer, millisecondsTimer);
    });
  });

  lapInp.addEventListener("click", () => {
    let lapsMinResults = document.createElement("span");
    lapsMin.appendChild(lapsMinResults);
    lapsMinResults.innerHTML = minutes.innerHTML + " :";
    let lapsSecResults = document.createElement("span");
    lapsSec.appendChild(lapsSecResults);
    lapsSecResults.innerHTML = seconds.innerHTML + " :";
    let lapsMillResults = document.createElement("span");
    lapsMill.appendChild(lapsMillResults);
    lapsMillResults.innerHTML = milliseconds.innerHTML;

    clearInp.addEventListener("click", () => {
      stopTimer(minutesTimer, secondsTimer, millisecondsTimer);
      clearTimer(minutes, seconds, milliseconds);
      lapsMin.removeChild(lapsMinResults);
      lapsSec.removeChild(lapsSecResults);
      lapsMill.removeChild(lapsMillResults);
    });
  });
});
