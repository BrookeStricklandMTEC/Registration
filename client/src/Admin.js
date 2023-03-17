import './user.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faArrowsLeftRight,
  faSearch,
  faCalendar,
  faA,
  faPlus,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import logo from "./IMG/Logo.jpg"
import userLogo from "./IMG/userLogo.png"
import Calendar from './DCGI/calendar';
import Inbox from './DCGI/inbox';
import MainScreen from './DCGI/dashboard';

var open = false;

function Dashboard() {
  const [dashboardScreen, setDashboardScreen] = useState("1")
  function updateDashboardScreen({ currentTarget }) {
    setDashboardScreen(currentTarget.id)
    console.log(currentTarget.id)
    running()
  }
  function running() {
    if (dashboardScreen === "1") {
      return (
        <MainScreen />
      )
    } else if (dashboardScreen === "2") {
      return (
        <Calendar startingDate={new Date} />
      )
    } else if (dashboardScreen === "4") {
      return (
        <Inbox />
      )
    }
  }
  function Logout(){
    window.location.href = '/';
  } 

  return (
    <>
      <div className='sidebar' id="mysidebar">
        <div className="top">
          <div className='a' id="1" onClick={updateDashboardScreen} >
            <FontAwesomeIcon icon={faHouse} className="icon" /> <a className="text" >Dashboard</a>
          </div>
          <div className='a' id="2" onClick={updateDashboardScreen}>
            <FontAwesomeIcon icon={faCalendar} className="icon" /> <a className="text" > Calendar</a>
          </div>
          <div className='a' id="4" onClick={updateDashboardScreen}>
            <FontAwesomeIcon icon={faEnvelope} className="icon" /> <a className="text" > Contact Us </a>
          </div>
        </div>
        <div className="bottom" id="bottom">
          <FontAwesomeIcon icon={faArrowsLeftRight} className="arrow" onClick={openClose} />
        </div>
      </div>
      <div className="topbar">
        <div className="left">
          <img src={logo} alt="Logo" className='logo' />
        </div>
        <div className="right">
          <div className='search'>
            <FontAwesomeIcon icon={faSearch} className="searchIcon" />
            <input className='input' placeholder='Search'></input>
          </div>
          <div className="dropdown">
            <img src={userLogo} alt="Logo" className='user dropbtn' onClick={myFunction} />
            <div id="myDropdown" className="dropdown-content">
              <a href="#profile"> Profile </a>
              <a href="#edit"> Edit </a>
              <a href="#logout" onClick={Logout}>Logout</a>
            </div>
          </div>
        </div>
      </div>
      <div id="main">
        {running()}
      </div>
    </>
  )
}
function openClose() {
  if (open === false) {
    document.getElementById("mysidebar").style.width = "75px";
    document.getElementById("main").style.marginLeft = "95px";
    document.querySelectorAll(".text").forEach(element => {
      element.innerHTML = ""
    })
    open = true
  } else if (open === true) {
    document.getElementById("mysidebar").style.width = "200px";
    document.getElementById("main").style.marginLeft = "220px";
    var run = 1
    delay(700).then(() =>
      document.querySelectorAll(".text").forEach(element => {
        if (run === 1) {
          element.innerHTML = " Dashboard"
        } else if (run === 2) {
          element.innerHTML = " Calendar"
        } else if (run === 3) {
          element.innerHTML = " Contact Us"
        }
        run++
      })
    )
    open = false
  }
}
function myFunction() {
  console.log("Hello")
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
export default Dashboard;