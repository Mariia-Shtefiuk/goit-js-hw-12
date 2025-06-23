import { Search } from './js/search';

const search = new Search();

console.log('search', search);

const form = document.querySelector('.form');
const input = form.querySelector('input[name="search-text"]');
const loadMore = document.querySelector('.loadMore');

input.addEventListener('change', event => search.handleSearchChange(event));
form.addEventListener('submit', event => search.handleSubmit(event));
loadMore.addEventListener('click', event => search.handleLoadMore(event));
