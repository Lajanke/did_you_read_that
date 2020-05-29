import React from 'react';
import TopicCard from './TopicCard';
import * as api from '../utils/api';
import { Link } from '@reach/router';
import Loader from './Loader';
import ErrorDisplayer from './ErrorDisplayer';

class TopicList extends React.Component {
    state = {
        topicList: [],
        isLoading: true,
        err: '',
    }

    componentDidMount() {
        this.getTopics()
    }

    getTopics = async () => {
        try {
            const topics = await api.fetchTopics()
            this.setState({ topicList: topics, isLoading: false, })
        } catch (err) {
            this.setState({ err: err.response.data.msg, isLoading: false })
        }
    }

    render() {
        const { topicList, isLoading, err } = this.state
        if (isLoading) return <Loader />
        if (err) return <ErrorDisplayer msg={err} />
        return (
            <ul>
                {topicList.map((topic) => {
                    const { slug } = topic;
                    return <li key={slug}><Link to={`/articles/${slug}`}><TopicCard {...topic} /></Link></li>
                })}
            </ul>
        )
    }
}

export default TopicList;