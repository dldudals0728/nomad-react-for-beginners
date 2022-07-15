import PropTypes from "prop-types";
// import Link from "react-router-dom"; => 이렇게 중괄호를 없이 import할 수 없다!
import { Link } from "react-router-dom";
function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        {/** Link와 a href=""의 차이점은, a tag를 활용하면 홈페이지 전체가 reload되지만, Link는 그렇지 않다! */}
        <Link to="/movie">{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
