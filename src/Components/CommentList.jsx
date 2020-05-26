import React from 'react';
import CommentCard from './CommentCard';
import * as api from '../utils/api';

class CommentList extends React.Component {
    state = {
        commentList: [],
        isLoading: true,
    }

    componentDidMount() {
        this.getComments()
    }

    getComments = () => {
        api.fetchComments(this.props)
            .then(comments => {
                this.setState({ commentList: comments, isLoading: false })
            })
    }

    render() {
        const { commentList, isLoading } = this.state
        if (isLoading) return <p>LOADING...</p>

        return (
            <div>
                <h3>comments</h3>
                <ul>
                    {commentList.map((comment) => {
                        return <li key={comment.comment_id}><CommentCard {...comment} /></li>
                    })}
                </ul>
            </div>
        )
    }
}

export default CommentList;