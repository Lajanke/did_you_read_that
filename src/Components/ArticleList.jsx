import React from 'react';
import ArticleCard from './ArticleCard';
import * as api from '../utils/api';
import { Link } from '@reach/router';

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

    getArticles = () => {
        api.fetchArticles(this.props)
            .then(articles => {
                this.setState({ articleList: articles, isLoading: false })
            })
    }

    render() {
        const { articleList, isLoading } = this.state
        if (isLoading) return <p>LOADING...</p>

        return (
            <ul>
                {articleList.map((article) => {
                    const { article_id } = article
                    return <li key={article_id}><Link to={`/article/${article_id}`}><ArticleCard {...article} /></Link></li>
                })}
            </ul>
        )
    }
}

export default ArticleList;