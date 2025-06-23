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
      // input can't be empty
    }

    // make sure that we clean results from previous search term
    if (this.page === DEFAULT_PAGE) {
      this.loadedImages = 0;
      clearGallery();
    }

    showLoader();

    try {
      const data = await getImagesByQuery(this.query, this.page);

      if (!data.hits.length) {
        // no images for your query
        return;
      }

      this.loadedImages += data.hits.length;
      this.totalHits = data.totalHits;

      createGallery(data.hits);

      if (this.loadedImages < this.totalHits) {
        showLoadMoreButton();
      } else {
        hideLoadMoreButton();
      }
    } finally {
      hideLoader();
    }
  }

  async handleLoadMore(event) {
    this.page += 1;

    await this.handleSubmit(event);
  }
}
