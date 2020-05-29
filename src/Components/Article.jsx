import React from 'react';
import * as api from '../utils/api';
import { Link } from '@reach/router';
import CommentList from './CommentList';
import VotingButtons from './VotingButtons';
import Loader from './Loader';
import ErrorDisplayer from './ErrorDisplayer';

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

        return (
            <article>
                <h2>{title}</h2>
                <Link to={`/articles/${topic}`}>{topic}</Link>
                <p><Link to={`/users/${author}`}>✎{author}</Link></p>
                <p>{body}</p>
                <p>created at: {new Date(created_at).toDateString()}</p>
                {!noInteraction &&
                    <VotingButtons votes={votes} id={article_id} type={'articles'} />
                }
                {user === author &&
                    <button onClick={this.handleDeleteArticle}>DELETE</button>
                }
                <p><span role='img' aria-label='speech bubble'>💬 </span>{comment_count}</p>
                <CommentList article_id={article_id} user={user} p={p} limit={limit} noInteraction={noInteraction} />
            </article>
        )
    }
}

export default Article;