const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '39546203-6f24950b6bb132fcbecdbd78e';

function fetchPixabay(searchText, currentPage) {
  return fetch(
    `${BASE_URL}?q=${searchText}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
}
export default fetchPixabay;