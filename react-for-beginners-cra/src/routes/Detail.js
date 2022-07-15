// url에서 변경되는 부분(like :id)의 값을 object 형태로 반환해주는 함수
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  // const x = useParams();
  // 값을 바로 받아오는 방법 ! 단, url에 명시된 변수명으로 사용해야 한다.
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState([]);
  const getMovie = async () => {
    // await은 async 함수 내에 존재해야만 사용 가능하다!
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setMovieDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <h1>Detail</h1>
          <img src={movieDetail.medium_cover_image} alt={movieDetail.title} />
          <h2>{movieDetail.title}</h2>
          <strong>genres</strong>
          <ul>
            {movieDetail.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <strong>summary</strong>
          <p>{movieDetail.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
