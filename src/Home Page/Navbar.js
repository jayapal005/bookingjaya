import React from 'react';
import { UserOutlined, AndroidOutlined } from '@ant-design/icons';
import './Navbar.css'
import Login from './Login';
import { Link } from 'react-router-dom';
// import React, { useState } from "react";



function Navbar(props) {
    return (
        <div className='Nav'>
            <div className='list'>
                <img id='src' src='https://cdn3.ticketnew.com/tn/tn_logo/tn-logo-01.svg'></img>
                <a href='#' style={{color:"#bdbdbd"}}>HOME</a>
                <a href='#'style={{color:"#bdbdbd"}}>MOVIES</a>
                <a href='#'style={{color:"#bdbdbd"}}>THEATRAS</a>
                <Link to={'/Login/'}style={{color:"#bdbdbd"}} >Login /Sing Up</Link>
                <a href='#'style={{color:"#bdbdbd"}}>OFFERS</a>
                <a href='#'style={{color:"#bdbdbd"}}><AndroidOutlined />APP</a>
                <Login/>
                

            </div>

        </div>

    );
}

export default Navbar;