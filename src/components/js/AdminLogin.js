import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/adminlogin.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

function AdminLogin() {
  const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      //console.log('Logging in with:', username, password);
      await axios.post(`https://odeasebackend.vercel.app/adminLogin`, {
        headers:{
          "Access-Control-Allow-Origin": "*"
        }
      }, {
        email: username,
        password: password
      }).then(function(response){
        //console.log(response);
        if(response.status === 200){
               // console.log(response.data)
              //localStorage.setItem('token', response.data.authToken);
              navigate('/adminHome')
        }
      })
      .catch(function(error){
        //console.log(error);
        alert('Invalid Table number')
      })
      // Here you can add logic to authenticate the user
    };

    const handleForgotPassword = () => {
    // Logic to handle forgot password link, e.g., show a modal or navigate to a forgot password page
   // console.log('Forgot Password clicked');
  };
  
    return (
      <div className='adminLoginContainer'>
        <form className="login-form" onSubmit={handleSubmit}>
        <h2>Administration Login</h2>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className='adminLoginButton'>Login</button>
        <div className="forgot-password">
        <span onClick={handleForgotPassword}>Forgot Password?</span>
      </div>
      </form>
      <p className='adminLogin'>Click <Link to='/'>here</Link> for user login</p>
    
      </div>
    );
  };
  
export default AdminLogin