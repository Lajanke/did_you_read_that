import React from 'react';
import * as api from '../utils/api';
import CommentCard from './CommentCard';
import CommentAdder from './CommentAdder';
import Loader from './Loader';
import ErrorDisplayer from './ErrorDisplayer';

class CommentList extends React.Component {
    state = {
        commentList: [],
        isLoading: true,
        err: '',
    }

    componentDidMount() {
        this.getComments()
    }

    getComments = async () => {
        try {
            const comments = await api.fetchComments(this.props)
            this.setState({ commentList: comments, isLoading: false })
        } catch (err) {
            this.setState({ err: err.response.data.msg, isLoading: false })
        }
    }

    addCommentToList = (comment) => {
        this.setState((currentState) => {
            return {
                commentList: [comment, ...currentState.commentList]
            }
        })
    }

    render() {
        const { commentList, isLoading, err } = this.state
        const { noInteraction, user, article_id } = this.props
        if (isLoading) return <Loader />
        if (err) return <ErrorDisplayer msg={err} />
        return (
            <div>
                <h3>comments</h3>
                {!noInteraction &&
                    <CommentAdder path='/article/:article_id' article_id={article_id} user={user} addCommentToList={this.addCommentToList} />
                }
                <ul>
                    {commentList.map((comment) => {
                        return <li key={comment.comment_id}><CommentCard {...comment} user={user} noInteraction={noInteraction} /></li>
                    })}
                </ul>
            </div>
        )
    }
}

export default CommentList;