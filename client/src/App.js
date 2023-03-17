import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';

import LoginSign from './LoginSign';
import Login from './LoginScreen.js';
import LoginScreen from './LoginScreen';
import Register from './Register.js';
import Dashboard from './user';
import AdminDashboard from './Admin'

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

 return (
  <Router> 
  {loading ? (
    <div className='image-parent'> 
      <div className='loader-container'>
        <div id='spinner'> </div>
      </div>
    </div>
    ) : (
    <Routes>
      <Route path='/' element={<div className='whiteScreen'> <LoginSign> </LoginSign>  </div>} > </Route>
      <Route path='/LoginScreen' element={ <div className='whiteScreen'> <LoginScreen> </LoginScreen> </div>} > </Route>
      <Route path='/Register' element={ <div className='whiteScreen1'> <Register> </Register> </div>} > </Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}> </Route>
      <Route path='/dashboard-admin' element={<AdminDashboard></AdminDashboard>}> </Route>
    </Routes>
 )} 
 </Router>
)}

export default App