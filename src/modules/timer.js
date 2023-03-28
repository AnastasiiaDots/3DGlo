const timer = (deadline) => {
  console.log(deadline);
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  // Function to calculate the remaining time until the deadline
  const getTimeRemaining = () => {
    // Get the deadline and current time in milliseconds
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;

    if (timeRemaining < 0) {
      timeRemaining = 0;
    }

    let hours = Math.floor(timeRemaining / 60 / 60);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    // Pad the numbers with leading zeros and return an object with the values
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    return { timeRemaining, hours, minutes, seconds };
  };

  // Function to update the timer countdown in the DOM
  const updateClock = () => {
    // Get the current time remaining and update the countdown in the DOM
    const getTime = getTimeRemaining();

    timerHours.textContent = getTime.hours;
    timerMinutes.textContent = getTime.minutes;
    timerSeconds.textContent = getTime.seconds;

    // Update the countdown every second until the deadline is reached
    const intervalId = setInterval(() => {
      let getTime = getTimeRemaining();
      timerHours.textContent = getTime.hours;
      timerMinutes.textContent = getTime.minutes;
      timerSeconds.textContent = getTime.seconds;

      // Stop the interval when the deadline is reached
      if (getTime.timeRemaining <= 0) {
        clearInterval(intervalId);
      }
    }, 1000);
  };
  updateClock();
};

export default timer;
