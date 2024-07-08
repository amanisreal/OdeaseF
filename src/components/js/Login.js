import React, {useState} from 'react'
import "../css/login.css"
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios"

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
//https://odeasebackend.vercel.app/login

//ad kjsdvkjsbviu knsavuibaewv,bsv
//dkhjvsvchjas vyuegfug

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Logging in with:', { username, password });
        await axios.post(`https://odeasebackend.vercel.app/login`,{
            userName: username,
            tableNumber: password
        }).then(function(response){
            console.log(response);
            if(response.status === 201){
                    console.log(response.data)
                  localStorage.setItem('token', response.data.authToken);
                  navigate('/home')
            }
          })
          .catch(function(error){
            console.log(error);
            alert('Invalid Table number')
          })
        // setUsername('');
        // setPassword('');

        navigate('/home')

    };
  return (
    <div className='loginContainer'>
       <div className='oneMoreContainerLogin'>
       <div className='leftSide' id="leftSide">
        <form className="login-formLogin" 
        onSubmit={handleSubmit}
        >
            <h2>Login</h2>
            <div className="input-groupLogin">
                <label>Your Name:</label>
                <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                required
                />
            </div>
            <div className="input-groupLogin">
                <label>Table Number:</label>
                <input
                type="number"
                value={password}
                onChange={handlePasswordChange}
                required
                />
            </div>
                <button type="submit" className='loginButton'>Login</button>
            </form>
       </div>

       <div className='rightSide'>
            <h2>HELLO!</h2>
            <h3>Welcome to OrderEase!</h3>
       </div>
       </div>

       <p className='adminLogin'>Click <Link to='/adminLogin'>here</Link> for admin login</p>
    </div>
  )
}

export default Login