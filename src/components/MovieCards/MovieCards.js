import SingleMovieCard from "../singleMovieCard/SingleMovieCard";
import styles from "./MovieCards.module.css";

const MovieCards = ({ data, searchTerm }) => {
  return (
    <div className={styles.MovieCardsContainer}>
      <SingleMovieCard movieData={data} searchTerm={searchTerm} />
    </div>
  );
};
export default MovieCards;
