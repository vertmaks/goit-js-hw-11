import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';
import { showError } from './js/notifications';

const form = document.querySelector('.form');

form.addEventListener('submit', handleFormSubmit);

async function handleFormSubmit(e) {
  e.preventDefault();

  const currentForm = e.currentTarget;
  const searchQuery = currentForm.elements['search-text'].value.trim();

  if (!searchQuery) {
    showError('Please, fill search field');
    currentForm.reset();
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(searchQuery);

    if (!data.hits.length) {
      showError(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      // gallery.innerHTML = '';
      return;
    }

    createGallery(data.hits);
  } catch (error) {
    console.log(error);
    showError('Ooops... Something went wrong. Please try again.');
  } finally {
    hideLoader();
    currentForm.reset();
  }
}
