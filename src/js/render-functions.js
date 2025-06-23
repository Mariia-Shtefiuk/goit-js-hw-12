import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a');
const loader = document.querySelector('.loader');
const loadMore = document.querySelector('.loadMore');

export const createGallery = images => {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return ` 
  <li class="gallery-item">
        <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" width="360" height="200">
        </a>
        <div class="img-info">
            <div class="img-stat">
                <span class="sub-title">Likes</span>
                <span class="value">${likes}</span>
            </div>
            <div class="img-stat">
                <span class="sub-title">Views</span>
                <span class="value">${views}</span>
            </div>
            <div class="img-stat">
                <span class="sub-title">Comments</span>
                <span class="value">${comments}</span>
            </div>
            <div class="img-stat">
                <span class="sub-title">Downloads</span>
                <span class="value">${downloads}</span>
            </div>
        </div>
    </li>
  `;
      }
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
};

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}

export const showLoadMoreButton = () => {
  loadMore.classList.remove('hidden');
};

export const hideLoadMoreButton = () => {
  loadMore.classList.add('hidden');
};
