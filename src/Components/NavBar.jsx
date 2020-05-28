import React from 'react';
import { Link } from '@reach/router';

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
        {!navOpen &&
          <button onClick={this.handleNavClick}>MENU</button>
        }

        {navOpen &&
          <div className='navDrawer'>
            <button onClick={this.handleNavClick}>X</button>
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
      </nav>
    )
  }
}

export default NavBar;
