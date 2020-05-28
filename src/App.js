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
import ErrorDisplayer from './Components/ErrorDisplayer';
import FeaturedArticle from './Components/FeaturedArticle';

class App extends React.Component {
  state = {
    user: 'weegembump'
  }

  render() {
    const { user } = this.state
    return (
      <div>
        <Header user={this.state.user} />
        <ArticleAdder />
        <Router>
          <FeaturedArticle user={user} path='/' />
          <ArticleList path='/articles' />
          <ArticleList path='/articles/:slug' />
          <TopicsList path='/topics' />
          <Article user={user} path='/article/:article_id' />
          <ArticleAdderForm user={user} path='/article_submission' />
          <User path='/users/:username' />
          <ErrorDisplayer default />
        </Router>
      </div>
    )
  }
}

export default App;
