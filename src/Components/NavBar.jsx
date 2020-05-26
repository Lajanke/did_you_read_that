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
          <div>
            <button onClick={this.handleNavClick}>X</button>
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
        }
      </nav>
    )
  }
}

export default NavBar;
