import React from 'react';
import * as api from '../utils/api';

class VotingButtons extends React.Component {
    state = {
        votesCast: 0,
        upvoteClicked: false,
        downvoteClicked: false,
    }

    handleUpVote = (event) => {
        const { id, type } = this.props
        const { upvoteClicked, downvoteClicked } = this.state
        if (!upvoteClicked && downvoteClicked) {
            const num = 2
            api.patchCommentVotes(num, id, type)
                .then(() => {
                    this.setState((currentState) => {
                        return {
                            votesCast: currentState.votesCast + 2,
                            upvoteClicked: !upvoteClicked,
                            downvoteClicked: !downvoteClicked,
                        }
                    })
                })
        } else if (!upvoteClicked && !downvoteClicked) {
            const num = 1
            api.patchCommentVotes(num, id, type)
                .then(() => {
                    this.setState((currentState) => {
                        return {
                            votesCast: currentState.votesCast + 1,
                            upvoteClicked: !upvoteClicked,
                        }
                    })
                })
        } else {
            const num = -1
            api.patchCommentVotes(num, id, type)
                .then(() => {
                    this.setState((currentState) => {
                        return {
                            votesCast: currentState.votesCast - 1,
                            upvoteClicked: !upvoteClicked,
                        }
                    })
                })
        }
    }

    handleDownVote = (event) => {
        const { id, type } = this.props
        const { downvoteClicked, upvoteClicked } = this.state
        if (!downvoteClicked && upvoteClicked) {
            const num = -2
            api.patchCommentVotes(num, id, type)
                .then(() => {
                    this.setState((currentState) => {
                        return {
                            votesCast: currentState.votesCast - 2,
                            downvoteClicked: !downvoteClicked,
                            upvoteClicked: !upvoteClicked,
                        }
                    })
                })
        } else if (!downvoteClicked && !upvoteClicked) {
            const num = -1
            api.patchCommentVotes(num, id, type)
                .then(() => {
                    this.setState((currentState) => {
                        return {
                            votesCast: currentState.votesCast - 1,
                            downvoteClicked: !downvoteClicked,
                        }
                    })
                })
        } else {
            const num = 1
            api.patchCommentVotes(num, id, type)
                .then(() => {
                    this.setState((currentState) => {
                        return {
                            votesCast: currentState.votesCast + 1,
                            downvoteClicked: !downvoteClicked,
                        }
                    })
                })
        }
    }

    render() {
        const { votes } = this.props
        const { votesCast, downvoteClicked, upvoteClicked } = this.state
        return (
            <div>
                <p>{votes + votesCast}</p>
                <button onClick={this.handleDownVote} className={`${downvoteClicked ? 'downClicked' : 'notClicked'}`}>˅</button>
                <button onClick={this.handleUpVote} className={`${upvoteClicked ? 'upClicked' : 'notClicked'}`}>˄</button>
            </div>
        )
    }
}

export default VotingButtons;