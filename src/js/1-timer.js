// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
const selectedDateItem = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysItem = document.querySelector('[data-days]');
const hoursItem = document.querySelector('[data-hours]');
const minutesItem = document.querySelector('[data-minutes]');
const secondsItem = document.querySelector('[data-seconds]');

let userSelectedDate = '';
startBtn.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    validateDates(selectedDates);
  },
};

function validateDates(selectedDates) {
  userSelectedDate = selectedDates[0].getTime();
  if (userSelectedDate <= Date.now()) {
    iziToast.error({
      title: 'Error',
      message: 'Please choose a date in the future',
      color: '#EF4040',
      position: 'topRight',
      iconUrl: '/img/xmark.svg',
      iconColor: 'white',
      messageColor: 'white',
      timeout: 3000,
      titleColor: 'white',
    });
    return;
  } else {
    startBtn.disabled = false;
  }
}

flatpickr('#datetime-picker', options);

function start() {
  const intervalId = setInterval(() => {
    if (userSelectedDate <= Date.now()) {
      clearInterval(intervalId);
      selectedDateItem.disabled = false;
      return;
    }
    const currentTime = Date.now();
    let deltaTime = userSelectedDate - currentTime;
    daysItem.textContent = convertMs(deltaTime).days;
    hoursItem.textContent = convertMs(deltaTime).hours;
    minutesItem.textContent = convertMs(deltaTime).minutes;
    secondsItem.textContent = convertMs(deltaTime).seconds;
    startBtn.disabled = true;
    selectedDateItem.disabled = true;
  }, 1000);
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

startBtn.addEventListener('click', start);
// ==== for styles like in Figma=====
selectedDateItem.classList.add('user-input');
startBtn.classList.add('button-start');
