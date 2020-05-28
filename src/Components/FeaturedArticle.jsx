import React from 'react';
import * as api from '../utils/api';
import { Link } from '@reach/router';
import Loader from './Loader';
import ErrorDisplayer from './ErrorDisplayer';
import Article from './Article';

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
        const {articles} = await api.fetchArticles(this.props, sort_by, order)
       
        this.setState({ article_id: articles[0].article_id, isLoading: false })
        } catch(err) {
            this.setState({err: err.response.data.msg, isLoading: false})
        }
    }

    render() {
        const { isLoading, err } = this.state
        const { article_id } = this.state
        if (isLoading) return <Loader />
        if (this.state.deleted) return <p>Article deleted</p>
        if (err) return <ErrorDisplayer msg={err} />

        return (
            <article>
                <h1>Featured Article</h1>
                <p>See the full article and all comments <Link to={`/article/${article_id}`}>HERE</Link></p>
                <Article article_id={article_id} p={1} limit={3} noInteraction='noInteraction'/>
                
            </article>
        )
    }
}


export default FeaturedArticle;