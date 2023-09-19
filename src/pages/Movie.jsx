import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/input.css'

const Movie = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/movie');
  };

  const fetchData = async (searchQuery = '') => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=19f3d4d7159e523efbbbf49ec8bc328f&include_adult=false&language=en-US&page=1&query=${searchQuery}`
      );
      const { data } = response;
      console.log(data);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(search); 
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <button className="btn" onClick={handleLogout}>
        Logout
      </button>
      <div className="container">
        <div className="search-bar">
          <input
          className='input'
            type="text"
            placeholder="Search for a movie by name"
            value={search}
            onChange={handleSearch}
          />
        </div>

        <ul className="movie-ul">
          {data.results &&
            data.results.map((movie) => (
              <li className="movie-li" key={movie.id}>
                <h2>{movie.title}</h2>

                {movie.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={`Poster for ${movie.title}`}
                  />
                )}
                <Link to={`/movie/${movie.id}`}>See more detail</Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Movie;
