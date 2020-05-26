import React from 'react';
//import axios from 'axios';
import ArticleCard from './ArticleCard';

class ArticleList extends React.Component {
  state = {
      articleList: [{
        "author": "weegembump",
        "title": "Seafood substitutions are increasing",
        "article_id": 33,
        "topic": "cooking",
        "created_at": "2018-05-30T15:59:13.341Z",
        "votes": 0,
        "comment_count": "6"
      },
      {
        "author": "happyamy2016",
        "title": "High Altitude Cooking",
        "article_id": 28,
        "topic": "cooking",
        "created_at": "2018-05-27T03:32:28.514Z",
        "votes": 0,
        "comment_count": "5"
      }]
  }

  render() {
      const { articleList } = this.state
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