// Бібліотека Іzitoast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Бібліотека SimpleLightbox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getItemsBySearch } from './js/pixabay-api';
import { createGalleryCardTemplate } from './js/render-functions';

const formEl = document.querySelector('.js-search-form');
const inputEl = document.querySelector('.js-search-input');
const galleryEl = document.querySelector('.js-gallery');
const loader = document.querySelector('.loader');

loader.style.display = 'none';

const galleryModal = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionsDelay: 250,
  animationSpeed: 500,
  fadeSpeed: 500,
  zoom: true,
  scaleImageToRatio: true,
  enableKeyboard: true,
});

formEl.addEventListener('submit', event => {
  event.preventDefault();
  loader.style.display = 'inline-block';

  const searchQuery = inputEl.value.trim();

  if (searchQuery === '') {
    return iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no empty strings allowed in search field. Please, try again!',
      messageColor: '#fafafb;',
      position: 'topRight',
      backgroundColor: '#ef4040',
    });
  }

  getItemsBySearch(searchQuery)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.show({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please, try again!',
          messageColor: '#fafafb;',
          position: 'topRight',
          backgroundColor: '#ef4040',
        });

        galleryEl.innerHTML = '';
      }

      const galleryTemplate = data.hits
        .map(el => createGalleryCardTemplate(el))
        .join('');
      galleryEl.innerHTML = galleryTemplate;
      galleryModal.refresh();
    })
    .catch(err => {
      iziToast.error({
        message: 'Error fetching images. Please try again later.',
        position: 'topRight',
      });
    })
    .finally(() => {
      formEl.reset();
      loader.style.display = 'none';
    });
});
