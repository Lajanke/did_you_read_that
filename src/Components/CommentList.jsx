import React from 'react';
import CommentCard from './CommentCard';
import * as api from '../utils/api';
import CommentAdder from './CommentAdder';

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

    addCommentToList = (comment) => {
        this.setState((currentState) => {
            return {
                commentList: [comment, ...currentState.commentList]
            }
        })
    }

    render() {
        const { commentList, isLoading } = this.state
        if (isLoading) return <p>LOADING...</p>

        return (
            <div>
                <h3>comments</h3>
                <CommentAdder article_id={this.props.article_id} user={this.props.user} addCommentToList={this.addCommentToList}/>
                <ul>
                    {commentList.map((comment) => {
                        return <li key={comment.comment_id}><CommentCard {...comment} user={this.props.user}/></li>
                    })}
                </ul>
            </div>
        )
    }
}

export default CommentList;