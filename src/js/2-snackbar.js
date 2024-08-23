// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const inputDelay = document.querySelector("input[name='delay']");
inputDelay.classList.add('delay-input');
inputDelay.setAttribute('step', '500');
inputDelay.setAttribute('value', '');
inputDelay.setAttribute('min', '500');
const form = document.querySelector('.form');

function onSubmit(event) {
  event.preventDefault();
  let isSuccess = null;
  const delay = Number(inputDelay.value);
  console.log(delay);
  const getSelectedRadio = document.querySelector(
    'input[name="state"]:checked'
  );
  if (delay <= 0) {
    return;
  } else {
    if (getSelectedRadio !== null) {
      if (getSelectedRadio.value === 'fulfilled') {
        isSuccess = true;
      } else {
        isSuccess = false;
      }
    }
  }

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  })
    .then(value => {
      iziToast.success({
        title: 'OK',
        message: `Fulfilled promise in ${delay}ms`,
        color: '#59A10D',
        position: 'topRight',
        iconUrl: '../img/success.svg',
        iconColor: 'white',
        messageColor: 'white',
        timeout: 4000,
        titleColor: 'white',
        progressBar: 'false',
      });
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: `Rejected promise in ${delay}ms`,
        color: '#EF4040',
        position: 'topRight',
        iconUrl: '../img/xmark.svg',
        iconColor: 'white',
        messageColor: 'white',
        timeout: 4000,
        titleColor: 'white',
        progressBar: 'false',
      });
    });
  event.target.reset();
}

form.addEventListener('submit', onSubmit);
