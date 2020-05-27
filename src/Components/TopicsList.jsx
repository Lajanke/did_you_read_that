import React from 'react';
import TopicCard from './TopicCard';
import * as api from '../utils/api';
import { Link } from '@reach/router';
import Loader from './Loader';

class TopicList extends React.Component {
    state = {
        topicList: [],
        isLoading: true,
    }

    componentDidMount() {
        this.getTopics()
    }

    getTopics = () => {
        api.fetchTopics()
            .then(topics => {
                this.setState({ topicList: topics, isLoading: false, })
            })
    }

    render() {
        const { topicList, isLoading } = this.state
        if (isLoading) return <Loader />
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