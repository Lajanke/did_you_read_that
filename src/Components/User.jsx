import React from 'react';
import * as api from '../utils/api';
import ArticleList from './ArticleList';
import Loader from './Loader';
import ErrorDisplayer from './ErrorDisplayer';

class User extends React.Component {
    state = {
        user: {},
        isLoading: true,
        err: '',
    }

    componentDidMount() {
        this.getUserByUsername()
    }

    getUserByUsername = async () => {
        const { username } = this.props;
            try {
                const user = await api.fetchUserByUsername(username)
                this.setState({ user: user, isLoading: false })
            } catch(err) {
                this.setState({err: err.response.data.msg, isLoading: false})
            }
    }

    render() {
        const { isLoading, err } = this.state
        const { username, avatar_url } = this.state.user
        if (isLoading) return <Loader />
        if (err) return <ErrorDisplayer msg={ err } />

        return (
            <React.Fragment>
                <h2>{username}</h2>
                <img src={avatar_url} alt={`${username} avatar`} />
                <ArticleList author={username} />
            </React.Fragment>
        )
    }
}

export default User;