import MovieItem from "./MovieItem";

const MoviesList = ({ movies }) => {
  return (
    <section>
      <ul>
        {movies.map((m, index) => <MovieItem key={m.id || index} movie={m} baseRoute="/"/>)}
      </ul>
    </section>
    )
}
export default MoviesList;
