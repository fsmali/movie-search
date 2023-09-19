import '../styles/home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="center-container">
      <Link to="/movie">
        <button className="btn">movie search</button>
      </Link>
    </div>
  );
};

export default Home;
