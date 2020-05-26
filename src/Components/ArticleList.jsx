import React from 'react';
import ArticleCard from './ArticleCard';
import * as api from '../utils/api';

class ArticleList extends React.Component {
  state = {
      articleList: [],
      isLoading: true,
  }

  componentDidMount() {
      this.getArticles()
  }

  getArticles = () => {
      api.fetchArticles()
      .then(articles => {
          this.setState({articleList: articles, isLoading: false})
      })
  }

  render() {

      const { articleList, isLoading } = this.state
      if (isLoading) return <p>LOADING...</p>
      
    return (
        <ul>
            {articleList.map((article) => {
                return <li key={article.article_id}><ArticleCard {...article} /></li>
            })}
        </ul>
    )
  }
}

export default ArticleList;