import axios from 'axios';

const api_key = '3366547464e8c8a280f5c46d5939b2c0'
const base_url = 'https://api.themoviedb.org/3/';
const movie = 'https://image.tmdb.org/t/p/w500'

function montaUrl(base, path){
        return `${base}${path}?api_key=${api_key}`;
}

class MoviesService{

        static getMovies()
        {
                return axios(montaUrl(base_url, 'movie/now_playing'));

        }
        static getNextMovies()
        {
                return axios(montaUrl(base_url, 'movie/upcoming'));

        }
        static getMovieById(id)
        {
                return axios(montaUrl(base_url, `movie/${id}`))
        }
        static getImage(id)
        {
                return axios(montaUrl(base_url, `movie/${id}/images`))
        }

}
export default MoviesService;