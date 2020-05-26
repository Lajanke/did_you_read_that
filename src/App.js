import React from 'react';
import './App.css';
import Header from './Components/Header';

class App extends React.Component {
  state = {
    user: 'jessjelly'
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

export default App;
