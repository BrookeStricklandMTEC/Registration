import './login.css';
import React, { useState } from 'react';
import logo from "./IMG/Logo.jpg"
import { Link } from 'react-router-dom';
import LoginScreen from './LoginScreen'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Register() {
  const [username, setUsername] = useState()
  const [firstname, setFirstname] = useState()
  const [lastname, setLastname] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  function Submit() {
    if (document.getElementById("username").value !== "") {
      if (document.getElementById("firstName").value !== "") {
        if (document.getElementById("lastName").value !== "") {
          if (document.getElementById("email").value !== "") {
            if (document.getElementById("password").value !== "") {
              if (password.length < 7) {
                toast.error('Your Password Must Be At Least 7 Characters Long', {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                });
              } else {
                fetch("/addUser", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    username,
                    firstname,
                    lastname,
                    email,
                    password
                  })

                }).then((res) => res.json())
                  .then(data => {
                    console.log(data)
                    window.location.href = "/Loginscreen";
                  })
              }

            } else {
              toast.error('Please Input Your Password', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
            }
          } else {
            toast.error('Please Input Your Email', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
        } else {
          toast.error('Please Input Your Last Name', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      } else {
        toast.error('Please Input Your First Name', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } else {
      toast.error('Please Input Your Username', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }
  return (
    <>
      <div className='whiteScreen1'>
        <div className="inside">
          <p className="welcomeText">Create a Account, To Get Started</p>
          <div className='inputs'>
            <input placeholder="Username" id="username" className='input1' required onChange={(e) => { setUsername(e.target.value) }}></input>
            <input placeholder="First Name" id="firstName" className='input1 padtop' required onChange={(e) => { setFirstname(e.target.value) }}></input>
            <input placeholder="Last Name" id="lastName" className='input1 padtop' required onChange={(e) => { setLastname(e.target.value) }}></input>
            <input type='email' placeholder="Email" id="email" className='input1 padtop' required onChange={(e) => { setEmail(e.target.value) }}></input>
            <input type="password" placeholder="Password" id="password" className='input1 padtop' required onChange={(e) => { setPassword(e.target.value) }}></input>
          </div>
          <button className='button1 padtop2' onClick={Submit}>Sign Up</button>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}



export default Register