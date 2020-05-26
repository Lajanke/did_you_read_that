import React from 'react';
import NavBar from './NavBar';

const Header = (props) => {
    return (
        <div>
        <header>
            <h1>DYRT...</h1>
            <NavBar />
        </header>
        <p>{new Date().toDateString()}</p> 
        <p>Logged in as: {props.user}</p>
        </div>
    )
}

export default Header;