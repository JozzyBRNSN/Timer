

let commands = document.getElementById("commands");

let startInp = document.createElement("input");
let lapInp = document.createElement("input");
let stopInp = document.createElement("input");
let restartInp = document.createElement("input");
let clearInp = document.createElement("input");

startInp.value = "START";
lapInp.value = "LAP";
stopInp.value = "STOP";
restartInp.value = "RESTART";
clearInp.value = "CLEAR LAPS";

startInp.classList.add("input");
lapInp.classList.add("input");
stopInp.classList.add("input");
restartInp.classList.add("input");
clearInp.classList.add("input");

startInp.type = "button";
lapInp.type = "button";
stopInp.type = "button";
restartInp.type = "button";
clearInp.type = "button";

commands.appendChild(startInp);
commands.appendChild(lapInp);
commands.appendChild(stopInp);
commands.appendChild(restartInp);
commands.appendChild(clearInp);

let minutes = document.getElementById("timer__minutes");
let seconds = document.getElementById("timer__seconds");
let milliseconds = document.getElementById("timer__milliseconds");

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
    clearInterval(minutesTimer);
    clearInterval(secondsTimer);
    clearInterval(millisecondsTimer);
  });
});
