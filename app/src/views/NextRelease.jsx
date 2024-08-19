import { useEffect, useState } from 'react'
import MoviesContainer from '../styles/MoviesContainer';
import MoviesList from '../components/MoviesList';
import MoviesService from '../api/MoviesService.js'

const NextRelease = () => {

  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
  const {data} = await MoviesService.getNextMovies();
    setMovies(data.results)
  }
  useEffect(() => {
    fetchMovies();
  }, [])

  return(
          <MoviesContainer>
          <MoviesList movies={movies}></MoviesList>
          </MoviesContainer>
  )
}

export default NextRelease;
