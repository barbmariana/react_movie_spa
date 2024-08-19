import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import MoviesService from '../api/MoviesService.js'

const MovieItem = ({ movie }) => {

    const [url, setUrl] = useState();
    const [image, setImage] = useState();

    const fetchMovies = async () => {
        const {data} = await MoviesService.getImage(movie.id);
        const file_path = data.posters[0].file_path;
        setUrl(file_path)
    }
    useEffect(() => {
      fetchMovies();

    }, [])
    const movieLink = `/movie/${movie.id}`;
    
    return (<>
    <li>
        <Link to={movieLink}> {movie.title.length < 20 ? movie.title : `${movie.title.substring(0, 20)} ...` } </Link>
        <img src={`https://image.tmdb.org/t/p/w500${url}`}/>
        <p>{movie.overview.length > 80
                        ? `${movie.overview.substring(0, 80)} ...`
                        : movie.overview}
        </p>
        {movie.overview.length > 80 && (
                    <Link to={`movie/${movie.id}`}><span>Leia mais</span></Link>
                )}
    </li>
    </>)
}

export default MovieItem