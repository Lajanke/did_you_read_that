import React from 'react';

class NavBar extends React.Component {
  state = {
      navOpen: false,
  }

  handleNavClick = () => {
      const { navOpen } = this.state
    this.setState({navOpen: !navOpen})
  }

  render() {
    return (
      <nav>
          {!this.state.navOpen &&
            <button onClick={this.handleNavClick}>MENU</button>
          }
          
          { this.state.navOpen &&
            <div>
            <button onClick={this.handleNavClick}>X</button>
            <ul>
                <li>Home</li>
                <li>Articles</li>
                <li>Topics</li>
            </ul>
            </div>
          }
        </nav>
    )
  }
}

export default NavBar;
