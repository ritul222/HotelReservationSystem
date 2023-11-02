import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };



  const handleSignUp = async () => {
    if (password === confirmPassword) {
      const response = await fetch('http://localhost:5000/userS', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.status === 201) {
        // User registered successfully
        console.log('User registered successfully');
        window.alert('Sign Up Successful');
        navigate('/');
      } else {
        // Handle registration error
        console.error('Error in user registration');
      }
    } else {
      // Passwords do not match
      console.error('Passwords do not match');
    }
  };
  

  // const handleSignUp = async () => {
  //   if (password === confirmPassword) {
  //       const response = await fetch('http://localhost:5000/userS', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ username, password }),
  //     });

  //     if (response.status === 201) {
  //       // User registered successfully, handle it as needed
  //       console.log('User registered successfully');
  //     } else {
  //       // Handle registration error
  //       console.error('Error in user registration');
  //     }
  //   } else {
  //     // Passwords do not match, handle it as needed
  //     console.error('Passwords do not match');
  //   }
  // };

  return (
    <div className="main-form">
      <span className="heading">
        <h1>Sign Up</h1>
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
        <label htmlFor="confirmPassword" className="small-head1">
          Confirm Password<span className="required">*</span>
        </label>
        <br />
        <span className="inputt">
          <input
            type={passwordVisible ? 'text' : 'password'}
            id="confirmPassword"
            className="input-field"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </span>
        <br />
        <button  onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default SignUp;
