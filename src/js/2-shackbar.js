// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const submitBtn = document.querySelector("button[type='submit']");
const inputDelay = document.querySelector("input[name='delay']");
console.log(inputDelay);
// const stateValue = document.querySelector("input[name='state']");
// const form = document.querySelector('.form');
// stateValue.classList.add('.promise-state');
// submitBtn.disabled = true;
// let delay = 0;
// function onSubmit(event) {
//   event.preventDefault();
//   if (!inputDelay.value.trim() || !stateValue.value.trim()) {
//     submitBtn.disabled = true;
//     return;
//   } else {
//     delay = inputDelay.value;
//     submitBtn.disabled = true;
//     console.log(delay);
//   }
// }
// // let delay = inputDelay.value;
// // console.log(delay);
// const makePromise = new Promise(delay => {
//   setTimeout(() => {
//     if (stateValue.value === 'fulfilled') {
//       iziToast.success({
//         title: 'OK',
//         message: `Fulfilled promise in ${delay}ms`,
//         color: '#59A10D',
//         position: 'topRight',
//         iconUrl: '/img/success.svg',
//         iconColor: 'white',
//         messageColor: 'white',
//         timeout: 3000,
//         titleColor: 'white',
//       });
//     } else if (stateValue.value === 'rejected') {
//       iziToast.error({
//         title: 'Error',
//         message: `Rejected promise in ${delay}ms`,
//         color: '#EF4040',
//         position: 'topRight',
//         iconUrl: '/img/xmark.svg',
//         iconColor: 'white',
//         messageColor: 'white',
//         timeout: 3000,
//         titleColor: 'white',
//       });
//     }
//   }, delay);
// });

// form.addEventListener('input', onSubmit);
// submitBtn.addEventListener('click', makePromise);
