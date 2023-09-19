import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const SingleMovie = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=19f3d4d7159e523efbbbf49ec8bc328f&language=en-US`
      );
      const { data } = response;
      console.log(data);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <>
      <div className="container">
        {data && (
          <>
            <h2>{data.title}</h2>

            <img
              src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
              alt={`Poster for ${data.title}`}
            />
            <p>{data.overview}</p>
            <h3>Release Date :{data.release_date}</h3>
          </>
        )}
      </div>


        {' '}
        <Link to="/movie">back to search movie</Link>
     
    </>
  );
};

export default SingleMovie;
