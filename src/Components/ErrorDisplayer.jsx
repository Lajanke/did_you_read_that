import React from 'react';

const ErrorDisplayer = ({ msg }) => {
    const err = msg ? msg : 'Oh no, that path doesn\'t exist'
    return (
        <div>
            <p>{err}</p>
        </div>
    )
}

export default ErrorDisplayer;