import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';

const Header = ({ user }) => {

    const Subheader = styled.div`
        display: flex;
        justify-content: space-between;
        margin: 0 0.3rem 0 0.3rem;

        p {
           margin: 0;
           font-size: 0.8rem; 
        }
    `

    return (
        <div>
            <header>
                <h1><span className='logo'></span>DYRT... </h1>
                <div className='chevron'></div>
                <NavBar />
            </header>
            <Subheader>
                <p>{new Date().toDateString()}</p>
                <p>Logged in as: {user}</p>
            </Subheader>
        </div>
    )
}

export default Header;