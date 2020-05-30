import React from 'react';
import * as api from '../utils/api';
import { Link } from '@reach/router';
import CommentList from './CommentList';
import VotingButtons from './VotingButtons';
import Loader from './Loader';
import ErrorDisplayer from './ErrorDisplayer';
import styled from 'styled-components';

class Article extends React.Component {
  state = {
    article: {},
    isLoading: true,
    deleted: false,
    err: '',
  }

  componentDidMount() {
    this.getArticleById()
  }

  getArticleById = async () => {
    const { article_id } = this.props;
    try {
      const article = await api.fetchArticleById(article_id)
      this.setState({ article: article, isLoading: false })
    } catch (err) {
      this.setState({ err: err.response.data.msg, isLoading: false })
    }
  }

  handleDeleteArticle = () => {
    this.deleteArticle()
  }

  deleteArticle = () => {
    const { article_id } = this.props
    api.deleteById(article_id, 'articles')
      .then(() => {
        this.setState({ deleted: true })
      })
      .catch(err => {
        this.setState({ err: err.response.data.msg, isLoading: false })
      })
  }

  render() {
    const { isLoading, err, deleted } = this.state
    const { title, topic, votes, author, body, created_at, comment_count, article_id } = this.state.article
    const { p, limit, noInteraction, user } = this.props
    if (isLoading) return <Loader />
    if (deleted) return <p>Article deleted</p>
    if (err) return <ErrorDisplayer msg={err} />

    const Div = styled.div`
          .aTitle {
            grid-area: title;
            margin: 0.3rem;
            font-size: 1.3rem;
          }

          .aAuthor {
            grid-area: author;
            margin: 0.3rem;
            font-size: 0.9rem;
          }
          
          .aTopic {
            grid-area: topic;
            border-style: dotted;
            border-color: #d2e4f1;
            border-width: 1px 0 1px 1px;
            align-self: center;
            margin: 0.3rem;
            font-size: 1rem;
            padding: 0.2rem;
          }
          
          .aDate {
            grid-area: date;
            margin: 0.3rem;
            font-size: 0.8rem;
            justify-self: right;
          }
          
          .aComments {
            grid-area: comments;
            margin: 0.3rem;
            font-size: 0.9rem;
            margin-bottom: 1rem;
          }
          
          .aVotingButtons {
            grid-area: votes;
            margin: 0.3rem;
            justify-self: right;
          }
          
          .aBody {
            grid-area: body;
            margin: 0.3rem;
            font-size: 1rem;
            justify-self: right;
          }
          
          .aDelete {
            grid-area: delete;
            margin: 0.3rem;
            font-size: 1rem;
            justify-self: left;
          }
          
          .articleGrid {
            border-style: dotted;
            border-width: 1px 0 0 0;
            margin: auto;
            display: grid;
            margin: 0.1rem;
            grid-template-columns: 50% auto;
            grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
            grid-template-rows: auto;
            grid-template-areas: 
              'title title'
              'author topic'
              'body body'
              'delete date'
              'comments votes'
            ;
          }
        `

    return (
      <article>
        <Div>
          <div className='articleGrid'>
            <h2 className='aTitle'>{title}</h2>
            <p className='aTopic'><Link to={`/articles/${topic}`}>{topic}</Link></p>
            <p className='aAuthor'><Link to={`/users/${author}`}>✎{author}</Link></p>
            <p className='aBody'>{body}</p>
            <p className='aDate'>created at: {new Date(created_at).toDateString()}</p>

            {user === author &&
              <button onClick={this.handleDeleteArticle} className='aDelete'>DELETE</button>
            }
            <p className='aComments'><span role='img' aria-label='speech bubble'>💬 </span>{comment_count}</p>
            {!noInteraction &&
              <div className='aVotingButtons'>
                <VotingButtons votes={votes} id={article_id} type={'articles'} />
              </div>
            }
          </div>
        </Div>
        <CommentList article_id={article_id} user={user} p={p} limit={limit} noInteraction={noInteraction} />
      </article>
    )
  }
}

export default Article;