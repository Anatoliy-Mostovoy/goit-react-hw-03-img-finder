import axios from 'axios';

const KEY = '21944092-5843deb4113ddddf966c6ecb1';
const URL = 'https://pixabay.com/api';

export const fetchImgs = async () => {
  return await axios.get(
    `${URL}/?q=cat&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );
};
