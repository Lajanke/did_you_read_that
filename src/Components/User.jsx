import React from 'react';
import * as api from '../utils/api';
import ArticleList from './ArticleList';
import Loader from './Loader';
import ErrorDisplayer from './ErrorDisplayer';
import Sty from './StyledComponents';

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
        } catch (err) {
            this.setState({ err: err.response.data.msg, isLoading: false })
        }
    }

    render() {
        const { isLoading, err } = this.state
        const { username, avatar_url } = this.state.user
        if (isLoading) return <Loader />
        if (err) return <ErrorDisplayer msg={err} />

        return (
            <Sty.User>
                <h1>{username}</h1>
                <img src={avatar_url} alt={`${username} avatar`} />
                <ArticleList author={username} />
            </Sty.User>
        )
    }
}

export default User;