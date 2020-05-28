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

    getComments = () => {
        api.fetchComments(this.props)
            .then(comments => {
                this.setState({ commentList: comments, isLoading: false })
            })
            .catch(err => {
                this.setState({err: err.response.data.msg, isLoading: false})
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
        const { commentList, isLoading, err } = this.state
        if (isLoading) return <Loader />
        if (err) return <ErrorDisplayer msg={ err } />
        return (
            <div>
                <h3>comments</h3>
                <CommentAdder article_id={this.props.article_id} user={this.props.user} addCommentToList={this.addCommentToList}/>
                <ul>
                    {commentList.map((comment) => {
                        return <li key={comment.comment_id}><CommentCard {...comment} user={this.props.user} /></li>
                    })}
                </ul>
            </div>
        )
    }
}

export default CommentList;