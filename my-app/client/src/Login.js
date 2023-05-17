import './login.css';
import React from 'react';
import logo from "./IMG/Logo.jpg"
function LoginSign() {
  return (
    <>
      <div className='whiteScreen'>
          <div class="inside">
          <img src={logo} alt="Logo" className='logo' />
            <div className='buttons'>
                <button className="button1" >Login</button>
                <button className='button2'>Sign Up</button>
            </div>
          </div>
      </div>
    </>
  );
}

function Login() {
  return (
    <>
      <div className='whiteScreen'> 
          <div className="inside">
              <p className="welcomeText">Welcome,{"\n"}Glad to See You</p>
              <div className='inputs'>
                  <input placeholder="Username" className='input' required></input>
                  <input type="password" placeholder="Password" className='input padtop' required></input>
              </div>
              <p className='forgotPass'>Forgot Password</p>

              <button className='button1 padtop1'>Login</button>
          </div>
      </div>
    </>
  );
}

function Sign() {
  return (
    <> 
      <div className='whiteScreen1'> 
          <div className="inside">
              <p className="welcomeText">Create a Account, To Get Started</p>
              <div className='inputs'>
                  <input placeholder="Username" className='input' required></input>
                  <input placeholder="First Name" className='input padtop' required></input>
                  <input placeholder="Last Name" className='input padtop' required></input>
                  <input type='email'placeholder="Email" className='input padtop' required></input>
                  <input type="password" placeholder="Password" className='input padtop' required></input>
              </div>

              <button className='button1 padtop2'>Sign Up</button>
          </div>
      </div>
    </>
  );
}

export default LoginSign;

