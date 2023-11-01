import React,{useState} from 'react';
import { Form } from 'react-router-dom';
import './Login.scss'; // Link the CSS file for styling
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// const Login = () => {
//     const navigate = useNavigate();

//     const navigateToUserS = () => {
     
//       navigate('/userS');
//     };
//         // const[passwordVisible,setPasswordVisible]=useState(false);
//         // const togglePasswordVisibility=()=>{
//         //     setPasswordVisible(!passwordVisible);
        
    
//     return (
//         <div className="main-form">
//             <span className="heading">
//                 <h1>Login</h1>
//             </span>

//             <div className="form-content">
//                 <label htmlFor="username" className="small-head1">
//                     Username or email address<span className="required">*</span>
//                 </label><br />
//                 <span className='inputt'>
//                     <input type="text" id="username" className="input-field" />
//                 </span>
//                 <br />
//                 <label htmlFor="Password" class="small-head1">
//                     Password<span className="required">*</span>
//                 </label><br />
//                 <span className='inputt'>
//                     <input type="text" id="username" className="input-field" />
//                 </span><br />
//                 <button>Log in</button> <br />
//                 <span class='lost' onClick={navigateToUserS}>New User?</span>

//             </div>
//             {/* Add more necessary fields with labels and asterisks as needed */}
//         </div>
//     );
// }

// export default Login;


const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
  
    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };
    const navigateToUserS = () => {
        navigate('/userS'); // Navigate to the registration page
      };
    const handleLogin = async () => {
      try {
        // Make a POST request to the "/user/login" endpoint
        const response = await axios.post('http://localhost:5000/user', {
          username: username,
          password: password,
        });
  
        if (response.status === 200) {
          // User login successful
          console.log('User logged in successfully');
          // Redirect to a different page (e.g., the home page) using React Router
          navigate('/home');
        } else {
          // Handle login error (e.g., show an error message)
          console.error('Login failed');
        }
      } catch (error) {
        // Handle any network or server errors
        console.error('Error during login:', error);
      }
    };
  
    return (
      <div className="main-form">
        <span className="heading">
          <h1>Login</h1>
        </span>
  
        <div className="form-content">
          <label htmlFor="username" className="small-head1">
            Username or email address<span className="required">*</span>
          </label>
          <br />
          <span className="inputt">
            <input
              type="text"
              id="username"
              className="input-field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </span>
          <br />
          <label htmlFor="password" className="small-head1">
            Password<span className="required">*</span>
          </label>
          <br />
          <span className="inputt">
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FontAwesomeIcon
              icon={passwordVisible ? faEye : faEyeSlash}
              onClick={togglePasswordVisibility}
            />
          </span>
          <br />
          <button onClick={handleLogin}>Log in</button>
          <br />
          <span className="lost" onClick={navigateToUserS}>
            New User?
          </span>
        </div>
      </div>
    );
  };
  
  export default Login;
  


