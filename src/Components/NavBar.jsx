import React from 'react';
import { Link } from '@reach/router';
import Sty from './StyledComponents';

class NavBar extends React.Component {
  state = {
    navOpen: false,
  }

  handleNavClick = () => {
    const { navOpen } = this.state
    this.setState({ navOpen: !navOpen })
  }

  render() {
    const { navOpen } = this.state;
    
    return (
      <nav>
        <div className='smallScreenNav'>

          {!navOpen &&
            <Sty.NavButtons>
              <i onClick={this.handleNavClick} className="fas fa-ellipsis-h fa-2x"></i>
            </Sty.NavButtons>
          }

          {navOpen &&
            <div className={`navDrawer${navOpen}`}>
              <i onClick={this.handleNavClick} className="fas fa-times fa-2x"></i>
              <ul>
                <Link to='/' onClick={this.handleNavClick}>
                  <li>HOME</li>
                </Link>
                <Link to='/articles' onClick={this.handleNavClick}>
                  <li>ARTICLES</li>
                </Link>
                <Link to='/topics' onClick={this.handleNavClick}>
                  <li>TOPICS</li>
                </Link>
              </ul>
            </div>
          }
        </div>
        <div className='bigScreenNav'>
          <ul>
            <Link to='/'>
              <li>HOME</li>
            </Link>
            <Link to='/articles'>
              <li>ARTICLES</li>
            </Link>
            <Link to='/topics'>
              <li>TOPICS</li>
            </Link>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar;
