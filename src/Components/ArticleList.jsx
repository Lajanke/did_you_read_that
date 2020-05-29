import React from 'react';
import * as api from '../utils/api';
import { Link } from '@reach/router';
import ArticleCard from './ArticleCard';
import SortingForm from './SortingForm';
import Loader from './Loader';
import ErrorDisplayer from './ErrorDisplayer';

class ArticleList extends React.Component {
    state = {
        articleList: [],
        total_count: null,
        isLoading: true,
        err: '',
    }

    componentDidMount() {
        this.getArticles()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.slug !== this.props.slug) {
            this.getArticles()
        }
    }

    getArticles = async (sort_by, order) => {
        try {
            const { articles, total_count } = await api.fetchArticles(this.props, sort_by, order)
            this.setState({ articleList: articles, total_count, isLoading: false })
        } catch (err) {
            this.setState({ err: err.response.data.msg, isLoading: false })
        }
    }

    render() {
        const { articleList, total_count, isLoading, err } = this.state
        const { slug } = this.props
        if (isLoading) return <Loader />
        if (err) return <ErrorDisplayer msg={err} />

        return (
            <React.Fragment>
                <h1>{slug ? `${slug}` : 'Articles'}</h1>
                <p>{total_count} articles total</p>
                <SortingForm getArticles={this.getArticles} />
                <ul>
                    {articleList.map((article) => {
                        const { article_id } = article
                        return <li key={article_id}><Link to={`/article/${article_id}`}><ArticleCard {...article} /></Link></li>
                    })}
                </ul>
            </React.Fragment>
        )
    }
}

export default ArticleList;