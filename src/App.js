import React from 'react';
import './App.css';
import Header from './Components/Header';
import ArticleList from './Components/ArticleList';

class App extends React.Component {
  state = {
    user: 'jessjelly'
  }

  render() {
    return (
      <div>
        <Header />
        <ArticleList />
      </div>
    )
  }
}

export default App;
