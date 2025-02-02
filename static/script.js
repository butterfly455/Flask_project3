// Clock
function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondHand = document.getElementById('second-hand');
    const minuteHand = document.getElementById('minute-hand');
    const hourHand = document.getElementById('hour-hand');

    const secondDegrees = ((seconds / 60) * 360) + 90;
    const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(updateClock, 1000);
updateClock();

// Timer
let timerInterval;
function startTimer() {
    const minutes = parseInt(document.getElementById('timerMinutes').value);
    if (isNaN(minutes) || minutes <= 0) {
        alert('Please enter a valid number of minutes.');
        return;
    }

    let timeLeft = minutes * 60;
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert('Time is up!');
            document.getElementById('timerDisplay').textContent = '00:00';
        } else {
            timeLeft--;
            const displayMinutes = Math.floor(timeLeft / 60);
            const displaySeconds = timeLeft % 60;
            document.getElementById('timerDisplay').textContent =
                `${String(displayMinutes).padStart(2, '0')}:${String(displaySeconds).padStart(2, '0')}`;
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    document.getElementById('timerDisplay').textContent = '00:00';
}

// Alarm
let alarmInterval;
function setAlarm() {
    const alarmTime = document.getElementById('alarmTime').value;
    if (!alarmTime) {
        alert('Please set a valid alarm time.');
        return;
    }

    const [alarmHour, alarmMinute] = alarmTime.split(':').map(Number);
    alarmInterval = setInterval(() => {
        const now = new Date();
        if (now.getHours() === alarmHour && now.getMinutes() === alarmMinute) {
            clearInterval(alarmInterval);
            alert('Alarm! Time to focus!');
        }
    }, 1000);
}

function stopAlarm() {
    clearInterval(alarmInterval);
}