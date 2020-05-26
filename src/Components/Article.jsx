import React from 'react';
import * as api from '../utils/api';
import { Link } from '@reach/router';
import CommentList from './CommentList';
import VotingButtons from './VotingButtons';

class Article extends React.Component {
    state = {
        article: {},
        isLoading: true,
    }

    componentDidMount() {
        this.getArticleById()
    }

    getArticleById = () => {
        const { article_id } = this.props;
        api.fetchArticleById(article_id)
            .then(article => {
                this.setState({ article: article, isLoading: false })
            })
    }

    render() {
        const { isLoading } = this.state
        const { title, topic, author, body, created_at, comment_count, article_id } = this.state.article
        if (isLoading) return <p>LOADING...</p>

        return (
            <article>
                <h2>{title}</h2>
                <Link to={`/articles/${topic}`}>{topic}</Link>
                <p>✎{author}</p>
                <p>{body}</p>
                <p>created at: {new Date(created_at).toDateString()}</p>
                <p>{comment_count} comments</p>
                <VotingButtons />
                <CommentList article_id={article_id} />
            </article>
        )
    }
}

export default Article;