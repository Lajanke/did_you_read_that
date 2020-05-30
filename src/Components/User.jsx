import React from 'react';
import * as api from '../utils/api';
import ArticleList from './ArticleList';
import Loader from './Loader';
import ErrorDisplayer from './ErrorDisplayer';
import styled from 'styled-components';

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

        const User = styled.div`
            img {
                max-height: 100px;
                max-width: 100px;
                margin-left: 0.5rem;
            }
        `;

        return (
            <User>
                <h1>{username}</h1>
                <img src={avatar_url} alt={`${username} avatar`} />
                <ArticleList author={username} />
            </User>
        )
    }
}

export default User;