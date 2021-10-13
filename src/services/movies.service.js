import { apiKey, defaultUrl } from '../configurations';
import { axiosInstance } from '../helpers';

export class MoviesService {
  static getMovies() {
    return axiosInstance.get(`${defaultUrl}/popular?api_key=${apiKey}&language=en-US&page=1`);
  }

  static getMovieById(id) {
    return axiosInstance.get(`${defaultUrl}/${id}?api_key=${apiKey}&language=en-US`);
  }
}
