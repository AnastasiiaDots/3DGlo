const timer = (deadline) => {
    console.log(deadline);
    const timerHours = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-seconds')
    const timerContainer = document.getElementById('timer')

    const timerDays = document.createElement('span');
    timerDays.id = 'timer-days';
    timerDays.className = 'timer__item';
    timerContainer.insertBefore(timerDays, timerHours);

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000

        if (timeRemaining < 0) {
            timeRemaining = 0;
        }
        let days = Math.floor(timeRemaining / 60 / 60 / 24)
        let hours = Math.floor((timeRemaining / 60 / 60) % 24)
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)

        days = String(hours).padStart(2, '0');
        hours = String(hours).padStart(2, '0');
        minutes = String(minutes).padStart(2, '0');
        seconds = String(seconds).padStart(2, '0');

        return { timeRemaining, days, hours, minutes, seconds }
    }

    const updateClock = () => {
        setInterval(() => {
            let getTime = getTimeRemaining();
            timerDays.textContent = getTime.days + ' д : ';
            timerHours.textContent = getTime.hours;
            timerMinutes.textContent = getTime.minutes;
            timerSeconds.textContent = getTime.seconds;
        }, 1000);
    }
    updateClock()
}

export default timer
