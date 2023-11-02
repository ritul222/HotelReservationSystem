import React,{useState} from 'react';
import { Form } from 'react-router-dom';
import './Login.scss'; // Link the CSS file for styling
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


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
      
          if (response.status !== 200) {
            // Handle login error (e.g., show an error message)
            alert("Invalid Username or Password");
          } else {
            // User login successful
          
            window.alert("Login Successful. Redirecting you to the Home page")
            navigate('/');
          }
        } catch (error) {
          // Handle any network or server errors
          alert('Inavlid Username or password:', error);
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
  


