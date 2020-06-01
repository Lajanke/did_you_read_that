import React from 'react';
import NavBar from './NavBar';

import Sty from './StyledComponents';

const Header = ({ user }) => {

    return (
        <React.Fragment>
            <Sty.Header>
                <header>
                    <h1><span className='logo'></span>DYRT... </h1>
                    <div className='chevron'></div>
                    <NavBar />
                </header>
            </Sty.Header>
            <Sty.Subheader>
                <p>{new Date().toDateString()}</p>
                <p>Logged in as: {user}</p>
            </Sty.Subheader>
        </React.Fragment>
    )
}

export default Header;