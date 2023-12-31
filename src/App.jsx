import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';
import Movie from './pages/Movie';
import SingleMovie from './pages/singleMovie';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" exact element={<Login />} /> */}
        {/* <Route path="/register" exact element={<Register />} /> */}
        <Route path='/' element={<Home />}/>
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/:id" element={<SingleMovie />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
