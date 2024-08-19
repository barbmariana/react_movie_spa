import { useState, useEffect} from 'react'
import MoviesService from '../api/MoviesService.js'
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
        const { id } = useParams();
        const [movie, setMovie] = useState([]);
        const fetchMovies = async () => {
        const {data} = await MoviesService.getMovieById(id);
          setMovie(data)
        }
        useEffect(() => {
          fetchMovies();
        }, [])
  
        return (
                <>
                <h1>{movie.title}</h1>
                <article>{movie.overview}</article>
                </>

        )
}

export default MovieDetail
