

import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();


    if (email === email && password === password) {

      localStorage.setItem('isLoggedIn', 'true');
      navigate('/movie'); 

    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="register-container">
      <h1>Login</h1>
      <form className="input-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className='btn' type="submit">Login</button>
      </form>

      {error && <p className="error">{error}</p>}

      <p>
        Not registered yet? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;



