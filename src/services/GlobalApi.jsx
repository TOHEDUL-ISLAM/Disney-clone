import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'c5dbee9e27ba38f8f6ccc146f787069d';


const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

const GlobalApi = {

  getTrendingMovies: () => {
    return tmdbApi.get('/trending/all/week');
  },


  getMovieByGenreId: (genreId) => {
    return tmdbApi.get('/discover/movie', {
      params: {
        with_genres: genreId,
      },
    });
  },

};

export default GlobalApi;