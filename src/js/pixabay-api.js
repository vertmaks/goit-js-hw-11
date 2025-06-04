import axios from 'axios';
import { showError } from './notifications';

export default async function getImagesByQuery(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '50658945-6d505dd3b22d0da0b5135219d';
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    orientation: 'horizontal',
    safesearch: true,
    image_type: 'photo',
  });

  const url = `${BASE_URL}?${searchParams.toString()}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    showError('Failed to fetch images');
    throw error;
  }
}
