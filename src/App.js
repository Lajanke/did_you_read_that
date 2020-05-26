import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './Components/Header';
import ArticleList from './Components/ArticleList';
import TopicsList from './Components/TopicsList';
import Article from './Components/Article';

class App extends React.Component {
  state = {
    user: 'jessjelly'
  }

  render() {
    return (
      <div>
        <Header />
        <Router>
          <ArticleList path='/' />
          <ArticleList path='/articles' />
          <ArticleList path='/articles/:slug' />
          <TopicsList path='/topics' />
          <Article path='/article/:article_id' />
        </Router>
      </div>
    )
  }
}

export default App;
