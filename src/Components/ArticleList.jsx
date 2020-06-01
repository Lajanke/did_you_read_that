import React from 'react';
import * as api from '../utils/api';
import { Link } from '@reach/router';
import ArticleCard from './ArticleCard';
import SortingForm from './SortingForm';
import Loader from './Loader';
import ErrorDisplayer from './ErrorDisplayer';
import Sty from './StyledComponents';

class ArticleList extends React.Component {
    state = {
        articleList: [],
        total_count: null,
        isLoading: true,
        err: '',
        p: 1,
        limit: 10,
        sort_by: 'created_at',
        order: 'desc',
        fetchingMore: false,
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
        this.getArticles()
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    setSortState = (sort_by, order) => {
        if (sort_by !== this.state.sort_by || order !== this.state.order) {
            this.setState({ sort_by, order, p: 1, articleList: [] })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { p, sort_by, order } = this.state
        if (prevProps.slug !== this.props.slug) {
            this.getArticles();
        }

        if (prevState.p !== p) {
            this.getArticles();
        }

        if (prevState.sort_by !== sort_by) {
            this.getArticles();
        }

        if (prevState.order !== order) {
            this.getArticles();
        }
    }

    getArticles = async () => {
        this.setState({ fetchingMore: true });
        const { sort_by, order, p, limit, articleList } = this.state;
        try {
            const { articles, total_count } = await api.fetchArticles(this.props, sort_by, order, p, limit);
            const updatedList = [...articleList, ...articles];
            this.setState({ articleList: updatedList, total_count, isLoading: false, fetchingMore: false })
        } catch (err) {
            this.setState({ err: err.response.data.msg, isLoading: false, fetchingMore: false })
        }
    }

    onScroll = () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            this.nextPage();
        }
    }

    nextPage = () => {
        const { fetchingMore, articleList, total_count } = this.state;

        if (fetchingMore) {
            return;
        }
        if (articleList.length >= total_count) {
            return;
        }
        this.setState((currentState) => {
            return { p: currentState.p + 1 };
        });
    }

    render() {
        const { articleList, total_count, isLoading, err } = this.state
        const { slug } = this.props
        if (isLoading) return <Loader />
        if (err) return <ErrorDisplayer msg={err} />

        return (
            <Sty.ArticleList>
                <h1>{slug ? `${slug}` : 'Articles'}</h1>
                <p>{total_count} articles</p>
                <SortingForm setSortState={this.setSortState} />
                <ul>
                    {articleList.map((article) => {
                        const { article_id } = article
                        return <li key={article_id}><Link to={`/article/${article_id}`}><ArticleCard {...article} /></Link></li>
                    })}
                </ul>
                <p>{this.state.fetchingMore ? 'Loading more articles...' : 'All articles loaded.'}</p>
            </Sty.ArticleList>
        )
    }
}

export default ArticleList;