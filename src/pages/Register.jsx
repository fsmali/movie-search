import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/input.css'

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword ) {
      setError("Passwords don't match");
      
      return;
    }
 

    const userData = {
      username,
      email,
      password,
      confirmPassword,
    };

    localStorage.setItem(username, JSON.stringify(userData));
    localStorage.setItem('isLoggedIn', 'true');

    navigate('/login');
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      {error && <p className="error">{error}</p>}

      <form className='input-form' onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          minLength={3}
          maxLength={25}
          required
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={6}
          maxLength={15}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button className='btn btnn' type="submit">Register</button>
      </form>

      <p> Already Sing Up please <Link to='/login'>Login</Link> </p>
    </div>
  );
}

export default Register;
