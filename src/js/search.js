import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './render-functions.js';

const DEFAULT_PAGE = 1;
export class Search {
  query;
  page;
  loadedImages;
  totalHits;

  constructor() {
    this.query = '';
    this.page = DEFAULT_PAGE;
    this.loadedImages = 0;
    this.totalHits = 0;
  }

  handleSearchChange(event) {
    const newQuery = event.target.value.trim();

    if (this.query !== newQuery) {
      this.page = DEFAULT_PAGE;
    }

    this.query = newQuery;
  }

  async handleSubmit(event) {
    event.preventDefault();

    if (!this.query) {
      iziToast.warning({
        title: 'Caution',
        message: "Input can't be empty!",
        position: 'topRight',
      });
    }

    if (this.page === DEFAULT_PAGE) {
      this.loadedImages = 0;
      clearGallery();
    }

    showLoader();

    try {
      const data = await getImagesByQuery(this.query, this.page);

      if (!data.hits.length) {
        iziToast.error({
          title: 'Error',
          message: 'Sorry, no images for your search',
          position: 'topRight',
        });
        return;
      }

      this.loadedImages += data.hits.length;
      this.totalHits = data.totalHits;

      createGallery(data.hits);

      if (this.loadedImages < this.totalHits) {
        showLoadMoreButton();
      } else {
        hideLoadMoreButton();
        iziToast.info({
          title: 'Info',
          message: "We're sorry, but you've reached the end of search results.",
          position: 'topRight',
        });
      }
    } catch (error) {
      iziToast.error({
        title: 'Error',
        message: 'Sorry, something went wrong. Please try again later',
        position: 'topRight',
      });
    } finally {
      hideLoader();
    }
  }

  async handleLoadMore(event) {
    this.page += 1;

    await this.handleSubmit(event);
  }
}
