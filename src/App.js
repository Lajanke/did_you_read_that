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
import { ThemeProvider } from 'styled-components';
import themes from './Components/Themes'
import Sty from './Components/StyledComponents';

class App extends React.Component {
  state = {
    user: 'jessjelly',
    theme: 'dark',
  }

  swapTheme = () => {
    const { theme } = this.state;
    if (theme === "dark") {
      this.setState({ theme: "light" });
    } else {
      this.setState({ theme: "dark" });
    }
  };

  render() {
    const { user, theme } = this.state
    return (
      <ThemeProvider theme={themes[theme]}>
        <Sty.AppContainer>
          <Header user={user} />
          <ArticleAdder swapTheme={this.swapTheme} theme={theme} />
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
        </Sty.AppContainer>
      </ThemeProvider>
    )
  }
}

export default App;
