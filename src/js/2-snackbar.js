import { createPromise } from './promise-generator';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const taskForm = document.querySelector('.form');

function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const delay = parseInt(form.elements.delay.value, 10);
  const state = form.elements.state.value;

  if (isNaN(delay) || !state) {
    iziToast.warning({
      message: `Please, fill all fields`,
      position: 'topRight',
    });
    return;
  }

  createPromise(delay, state)
    .then(delay =>
      iziToast.success({
        message: `Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      })
    )
    .catch(delay =>
      iziToast.error({
        message: `Rejected promise in ${delay}ms`,
        position: 'topRight',
      })
    );

  form.reset();
}

taskForm.addEventListener('submit', handleFormSubmit);
