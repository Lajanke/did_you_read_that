import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './Components/Header';
import ArticleList from './Components/ArticleList';
import TopicsList from './Components/TopicsList';

class App extends React.Component {
  state = {
    user: 'jessjelly'
  }

  render() {
    return (
      <div>
        <Header />
        <Router>
          <ArticleList path='/articles' />
          <ArticleList path='/articles/:slug' />
          <TopicsList path='/topics' />
        </Router>
      </div>
    )
  }
}

export default App;
