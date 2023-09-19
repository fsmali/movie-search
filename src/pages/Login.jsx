// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [error, setError] = useState('');
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//   });

//   const onChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const navigate = useNavigate();

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         'https://www.themoviedb.org/login',
//         formData
//       );
//       const { data } = response;
//       const token = data.token;
//       localStorage.setItem('token', token);
//       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//       navigate('/movie');
//     } catch (err) {
//       console.error('Error:', err);
//       setError(err.response.data.message);
//     }
//   };

//   return (
//     <>
//       <div className="back-form">
//         <h1 className="form-title">Login</h1>
//         <form onSubmit={onSubmit}>
//           <input
//             type="text"
//             placeholder="user name"
//             name="username"
//             value={formData.email}
//             onChange={onChange}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             name="password"
//             value={formData.password}
//             onChange={onChange}
//           />
//           <button>Login</button>
//           {error && <h4 className="error">{error}</h4>}
//         </form>
//       </div>
//     </>
//   );
// };

// export default Login;
