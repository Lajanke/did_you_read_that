import React from 'react';

const ErrorDisplayer = ({ msg }) => {
    const err = msg ? msg : 'Oh no, that path doesn\'t exist'

    return (
        <div>
            <p>{err}</p>
            <img style={{width: '400px'}} src="https://media.giphy.com/media/zuzqMRmyVesMg/giphy.gif" alt="firefly gif you can't"/>
        </div>
    )
}

export default ErrorDisplayer;