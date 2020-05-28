


const upVoteCalculator = (upvoteClicked, downvoteClicked) => {
    if (!upvoteClicked && downvoteClicked) {
        return 2
    } else if (!upvoteClicked && !downvoteClicked) {
        return 1
    } else {
        return -1
    }
}

const downVoteCalculator = (upvoteClicked, downvoteClicked,) => {
    if (!downvoteClicked && upvoteClicked) {
        return -2
    } else if (!downvoteClicked && !upvoteClicked) {
        return -1
    } else {
        return 1
    }
}

module.exports = {upVoteCalculator, downVoteCalculator}