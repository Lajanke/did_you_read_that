import React from 'react';
import NavBar from './NavBar';
//import styled from 'styled-components';

import Sty from './StyledComponents';

const Header = ({ user }) => {

    return (
        <div>
            <header>
                <h1><span className='logo'></span>DYRT... </h1>
                <div className='chevron'></div>
                <NavBar />
            </header>
            <Sty.Subheader>
                <p>{new Date().toDateString()}</p>
                <p>Logged in as: {user}</p>
            </Sty.Subheader>
        </div>
    )
}

export default Header;