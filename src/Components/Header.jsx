import React from 'react';
import NavBar from './NavBar';

const Header = ({ user }) => {
    return (
        <div>
            <header>
                <h1><span className='logo'></span>DYRT... </h1>
                <div className='chevron'></div>
                <NavBar />
            </header>
            <p>{new Date().toDateString()}</p>
            <p>Logged in as: {user}</p>
        </div>
    )
}

export default Header;