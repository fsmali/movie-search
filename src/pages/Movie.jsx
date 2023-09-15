import { useEffect, useState } from 'react';
import axios from 'axios';
import { DATA } from '../data';
import { useNavigate } from 'react-router-dom';

const Movie = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');

    navigate('/login');
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(DATA);
      const { data } = response;
      // console.log(data);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    if (search === '') {
      fetchData();
    } else {
      const filteredMovies = data.results.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      );

      setData((prevData) => ({
        ...prevData,
        results: filteredMovies,
      }));
    }
  };

  return (
    <>
      <button className="btn" onClick={handleLogout}>
        Logout
      </button>
      <div className="container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for a movie by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <ul className="movie-ul">
          {data.results &&
            data.results.map((movie) => (
              <li className="movie-li" key={movie.id}>
                <h2>{movie.title}</h2>
{movie.poster_path&&  <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={`Poster for ${movie.title}`}
                />


}
              

                <p>{movie.release_date}</p>
                <p>{movie.overview}</p>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Movie;
