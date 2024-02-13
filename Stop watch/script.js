let second = document.getElementById("second");
let minute = document.getElementById("minute");
let hours = document.getElementById("hours");

let SecondTimer = 0;
let minuteTimer = 0;
let hoursTimer = 0;
let timerInterval;

second.innerHTML = SecondTimer + "0";
minute.innerHTML = minuteTimer + "0";
hours.innerHTML = hoursTimer + "0";

function startSecondTimer() {
  SecondTimer++;

  if (SecondTimer < 10) second.innerHTML = "0" + SecondTimer;
  else second.innerHTML = SecondTimer;

  if (SecondTimer == 60) {
    SecondTimer = 0;
    second.innerHTML = SecondTimer + "0";
    minuteTimer++;
    if (minuteTimer < 10) minute.innerHTML = "0" + minuteTimer;
    else minute.innerHTML = minuteTimer;
  }
  if (minuteTimer == 60) {
    minuteTimer = 0;
    minute.innerHTML = minuteTimer + "0";
    hoursTimer++;
    if (hoursTimer < 10) hours.innerHTML = "0" + hoursTimer;
    else hours.innerHTML = hoursTimer;
  }

  if (hoursTimer == 24) {
    hoursTimer = 0;
    hours.innerHTML = "0" + hoursTimer;
  }
}

function startTimer(stop) {
  if (stop) {
    clearInterval(timerInterval);
  } else {
    timerInterval = setInterval(startSecondTimer, 1000);
  }
}

function restartTimer() {
  SecondTimer = 0;
  hoursTimer = 0;
  minuteTimer = 0;
  second.innerHTML = 0 + "0";
  minute.innerHTML = 0 + "0";
  hours.innerHTML = 0 + "0";
}
