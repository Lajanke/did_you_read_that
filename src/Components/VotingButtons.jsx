import React from 'react';
//import * as api from '../utils/api';

class VotingButtons extends React.Component {
    state = {
        upVoteClicked: false,
        downVoteClicked: false,
    }

    render() {
        return (
            <div>
                <button>˅</button>
                <button>˄</button>
            </div>
        )
    }
}

export default VotingButtons;