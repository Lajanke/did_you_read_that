import React from 'react';
import Sty from './StyledComponents';

const ErrorDisplayer = ({ msg }) => {
    const err = msg ? msg : 'Path not found!'

    return (
        <Sty.ErrorDisplay>
            <p>{err}</p>
            <img src="https://media.giphy.com/media/3o6fIX5mC1mSgNU0BW/giphy.gif" alt="The good place, bad place gif"/>
        </Sty.ErrorDisplay>
    )
}

export default ErrorDisplayer;