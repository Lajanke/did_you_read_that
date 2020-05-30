import React from 'react';
import * as api from '../utils/api';
import ErrorDisplayer from './ErrorDisplayer';
const { upVoteCalculator, downVoteCalculator } = require('../utils/utils')

class VotingButtons extends React.Component {
    state = {
        votesCast: 0,
        upvoteClicked: false,
        downvoteClicked: false,
        err: '',
    }

    handleUpVote = (event) => {
        const { id, type } = this.props
        const { upvoteClicked, downvoteClicked } = this.state
        const num = upVoteCalculator(upvoteClicked, downvoteClicked)
        if (num === 2) {
            this.setState((currentState) => {
                return {
                    votesCast: currentState.votesCast + 2,
                    upvoteClicked: !upvoteClicked,
                    downvoteClicked: !downvoteClicked,
                }
            })
        } else if (num === 1) {
            this.setState((currentState) => {
                return {
                    votesCast: currentState.votesCast + 1,
                    upvoteClicked: !upvoteClicked,
                }
            })
        } else {
            this.setState((currentState) => {
                return {
                    votesCast: currentState.votesCast - 1,
                    upvoteClicked: !upvoteClicked,
                }
            })

        }
        api.patchVotes(num, id, type)
            .catch(err => {
                this.setState({ err: err.response.data.msg, isLoading: false })
            })
    }

    handleDownVote = (event) => {
        const { id, type } = this.props
        const { downvoteClicked, upvoteClicked } = this.state
        const num = downVoteCalculator(upvoteClicked, downvoteClicked)
        if (num === -2) {
            this.setState((currentState) => {
                return {
                    votesCast: currentState.votesCast - 2,
                    downvoteClicked: !downvoteClicked,
                    upvoteClicked: !upvoteClicked,
                }
            })
        } else if (num === -1) {
            this.setState((currentState) => {
                return {
                    votesCast: currentState.votesCast - 1,
                    downvoteClicked: !downvoteClicked,
                }
            })
        } else {
            this.setState((currentState) => {
                return {
                    votesCast: currentState.votesCast + 1,
                    downvoteClicked: !downvoteClicked,
                }
            })
        }
        api.patchVotes(num, id, type)
            .catch(err => {
                this.setState({ err: err.response.data.msg, isLoading: false })
            })
    }

    render() {
        const { votes, type } = this.props
        console.log(type)
        const { votesCast, downvoteClicked, upvoteClicked, err } = this.state
        if (err) return <ErrorDisplayer msg={err} />
        
        return (
            <div className='voting'>
                <p className={(type === 'articles') ? 'aVotingButtons' : 'cVotingButtons'}>{votes + votesCast}</p>
                <div className={`${downvoteClicked ? 'downClicked' : 'notClicked'}`}>
                <i className='fas fa-chevron-down' onClick={this.handleDownVote}></i>
                </div>
                <div className={`${upvoteClicked ? 'upClicked' : 'notClicked'}`}>
                <i className='fas fa-chevron-up' onClick={this.handleUpVote}></i>
                </div>
            </div>
        )
    }
}

export default VotingButtons;