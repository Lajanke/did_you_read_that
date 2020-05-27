import React from 'react';
import * as api from '../utils/api';
import ArticleList from './ArticleList';

class User extends React.Component {
    state = {
        user: {},
        isLoading: true,
    }

    componentDidMount() {
        this.getUserByUsername()
    }

    getUserByUsername = () => {
        const { username } = this.props;
        api.fetchUserByUsername(username)
            .then(user => {
                this.setState({ user: user, isLoading: false })
            })
    }

    render() {
        const { isLoading } = this.state
        const { username, avatar_url } = this.state.user
        if (isLoading) return <p>LOADING...</p>

        return (
            <React.Fragment>
                <h2>{username}</h2>
                <img src={avatar_url} alt={`${username} avatar`}/>
                <ArticleList author={username} />
            </React.Fragment>
        )
    }
}

export default User;