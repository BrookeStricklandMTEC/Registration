import React, {useState} from 'react';
import logo from "./IMG/Logo.jpg"
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'; 
import { useState } from 'react';

import { Link } from 'react-router-dom';

function Student() {
    return (
      <>
        <div className='whiteScreen'> 
            <div className="inside">
                <p className="welcomeText">Welcome Student, {"\n"}Glad to See You</p>
            </div>
        </div>
      </>
    );
  }