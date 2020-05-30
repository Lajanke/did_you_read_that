import React from 'react';
import * as api from '../utils/api';
import { Link } from '@reach/router';
import Loader from './Loader';
import ErrorDisplayer from './ErrorDisplayer';
import Article from './Article';
import styled from 'styled-components';

class FeaturedArticle extends React.Component {
    state = {
        article_id: 0,
        isLoading: true,
        err: '',
    }

    componentDidMount() {
        this.getArticleId()
    }

    getArticleId = async (sort_by, order) => {
        try {
            const { articles } = await api.fetchArticles(this.props, sort_by, order)
            this.setState({ article_id: articles[0].article_id, isLoading: false })
        } catch (err) {
            this.setState({ err: err.response.data.msg, isLoading: false })
        }
    }

    render() {
        const { isLoading, err, deleted } = this.state
        const { article_id } = this.state
        if (isLoading) return <Loader />
        if (deleted) return <p>Article deleted</p>
        if (err) return <ErrorDisplayer msg={err} />

        const P = styled.div`
            margin: 1rem 0.3rem 1rem 0.3rem;
        `;

        return (
            <article>
                <h1>Featured Article</h1>
                <P>See the full article and all comments <Link to={`/article/${article_id}`}>HERE</Link></P>
                <Article article_id={article_id} p={1} limit={3} noInteraction='noInteraction' />
            </article>
        )
    }
}


export default FeaturedArticle;