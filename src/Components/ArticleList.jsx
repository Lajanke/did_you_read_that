import React from 'react';
import * as api from '../utils/api';
import { Link } from '@reach/router';
import ArticleCard from './ArticleCard';
import SortingForm from './SortingForm';
import Loader from './Loader';

class ArticleList extends React.Component {
    state = {
        articleList: [],
        isLoading: true,
    }

    componentDidMount() {
        this.getArticles()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.slug !== this.props.slug) {
            this.getArticles()
        }
    }

    getArticles = (sort_by, order) => {   
        api.fetchArticles(this.props, sort_by, order)
            .then(articles => {
                this.setState({ articleList: articles, isLoading: false })
            })
    }

    render() {
        const { articleList, isLoading } = this.state
        if (isLoading) return <Loader />

        return (
            <React.Fragment>
            <h2>{this.props.slug ? `${this.props.slug}` : 'Articles'}</h2>
            <SortingForm getArticles={this.getArticles}/>
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