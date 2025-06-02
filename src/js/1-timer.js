import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const datePicker = document.getElementById('datetime-picker');
const startBtn = document.querySelector('.start-btn');
const restartBtn = document.querySelector('.restart-btn');
const timerData = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let initTime;
let intervalId;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    initTime = selectedDates[0];
    if (initTime < Date.now()) {
      iziToast.error({
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
      // alert('Please choose a date in the future');
      startBtn.setAttribute('disabled', '');
    }
    if (initTime > Date.now()) startBtn.removeAttribute('disabled');
    startBtn.addEventListener('click', handleUserStart);
  },
};

function handleUserStart(e) {
  intervalId = setInterval(() => {
    datePicker.setAttribute('disabled', '');
    startBtn.setAttribute('disabled', '');
    startBtn.classList.add('hide');
    startBtn.classList.add('visually-hidden');
    restartBtn.classList.remove('visually-hidden');
    restartBtn.classList.add('on-screen');
    const currentTime = new Date();
    const diffMs = initTime - currentTime;
    const { days, hours, minutes, seconds } = convertMs(diffMs);
    timerData.days.textContent = days;
    timerData.hours.textContent = hours;
    timerData.minutes.textContent = minutes;
    timerData.seconds.textContent = seconds;
    if (diffMs <= 0) resetForm();
  }, 1000);
}

function handleUserRestart(e) {
  resetForm();
}

restartBtn.addEventListener('click', handleUserRestart);

flatpickr(datePicker, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day)
    .toString()
    .padStart(2, '0');
  const hours = Math.floor((ms % day) / hour)
    .toString()
    .padStart(2, '0');
  const minutes = Math.floor(((ms % day) % hour) / minute)
    .toString()
    .padStart(2, '0');
  const seconds = Math.floor((((ms % day) % hour) % minute) / second)
    .toString()
    .padStart(2, '0');

  return { days, hours, minutes, seconds };
}

function resetForm() {
  clearInterval(intervalId);
  datePicker.removeAttribute('disabled');
  startBtn.removeAttribute('disabled');
  startBtn.classList.remove('hide');
  startBtn.classList.remove('visually-hidden');
  restartBtn.classList.remove('on-screen');
  restartBtn.classList.add('visually-hidden');
  clearInterval(intervalId);
  timerData.days.textContent = '00';
  timerData.hours.textContent = '00';
  timerData.minutes.textContent = '00';
  timerData.seconds.textContent = '00';
}
