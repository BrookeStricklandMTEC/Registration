import './login.css';
import React, { useState } from 'react';
import logo from "./IMG/Logo.jpg"
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import LoginScreen from './LoginScreen';
import Register from './Register';

function gotoReg() {
  window.location.href = "/Register"
}
function gotoLog() {
  window.location.href = "/Loginscreen"
}
function LoginSign() {
  return (
    <>
      <div id='body'>
        <div className='whiteScreen3'>
          <div className="inside">
            <img src={logo} alt="Logo" className='logo1' />
            <div className='buttons'>
              {/* these will be links, <Link id="start" className="button" to={'/category'} > Start Game </Link> */}
              <button className="button1" onClick={gotoLog}> Login </button>
              <button className='button2' onClick={gotoReg}> Sign Up </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default LoginSign;