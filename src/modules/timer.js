const timer = (deadline) => {
  console.log(deadline);
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;

    if (timeRemaining < 0) {
      timeRemaining = 0;
    }

    let hours = Math.floor(timeRemaining / 60 / 60);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    return { timeRemaining, hours, minutes, seconds };
  };

  const updateClock = () => {
    const getTime = getTimeRemaining();

    timerHours.textContent = getTime.hours;
    timerMinutes.textContent = getTime.minutes;
    timerSeconds.textContent = getTime.seconds;

    const intervalId = setInterval(() => {
      let getTime = getTimeRemaining();
      timerHours.textContent = getTime.hours;
      timerMinutes.textContent = getTime.minutes;
      timerSeconds.textContent = getTime.seconds;

      if (getTime.timeRemaining <= 0) {
        clearInterval(intervalId);
      }
    }, 1000);
  };
  updateClock();
};

export default timer;
