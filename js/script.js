function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
    return { total, days, hours, minutes, seconds };
}
  
function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const timeinterval = setInterval(() => {
        const t = getTimeRemaining(endtime);
  
        clock.innerHTML = `
            <span class="days">${t.days}</span> days
            <span class="hours">${t.hours}</span> hours
            <span class="minutes">${t.minutes}</span> minutes
            <span class="seconds">${t.seconds}</span> seconds
        `;
  
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }, 1000);
}

// Calculate the current date
const currentDate = new Date();

// Add 10 days to the current date
currentDate.setDate(currentDate.getDate() + 10);

// Format the deadline with the adjusted date
const deadline = currentDate.toISOString();

// Initialize the clock with the adjusted deadline
initializeClock('clockdiv', deadline);
