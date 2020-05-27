import React from 'react';
import ArticleCard from './ArticleCard';
import * as api from '../utils/api';
import { Link } from '@reach/router';
import SortingForm from './SortingForm';

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
        if (isLoading) return <p>LOADING...</p>

        return (
            <React.Fragment>
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