import PropTypes from "prop-types";
// import Link from "react-router-dom"; => 이렇게 중괄호를 없이 import할 수 없다!
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
function Movie({ id, coverImg, title, year, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <h2 className={styles.movie__title}>
        {/** Link와 a href=""의 차이점은, a tag를 활용하면 홈페이지 전체가 reload되지만, Link는 그렇지 않다! */}
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <h3 className={styles.movie__year}>{year}</h3>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul className={styles.movie__genres}>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
