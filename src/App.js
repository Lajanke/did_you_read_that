import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './Components/Header';
import ArticleList from './Components/ArticleList';
import TopicsList from './Components/TopicsList';
import Article from './Components/Article';
import User from './Components/User';
import ArticleAdder from './Components/ArticleAdder';
import ArticleAdderForm from './Components/ArticleAdderForm';

class App extends React.Component {
  state = {
    user: 'jessjelly'
  }

  render() {
    return (
      <div>
        <Header user={this.state.user} />
        <ArticleAdder />
        <Router>
          <ArticleList path='/' />
          <ArticleList path='/articles' />
          <ArticleList path='/articles/:slug' />
          <TopicsList path='/topics' />
          <Article user={this.state.user} path='/article/:article_id' />
          <ArticleAdderForm user={this.state.user} path='/article_submission' />
          <User path='/users/:username' />
        </Router>
      </div>
    )
  }
}

export default App;
