import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  const [loadingDetail, setLoadingDetail] = useState(true);

  const getMovieDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovieDetail(json.data.movie);
    setLoadingDetail(false);
  };
  useEffect(() => {
    getMovieDetail();
  }, []);

  console.log(movieDetail);
  const { title, medium_cover_image, rating } = movieDetail;
  return (
    <div>
      <h1>{title}</h1>
      <img src={medium_cover_image} />
      <p>{rating}</p>
    </div>
  );
};

export default Detail;
