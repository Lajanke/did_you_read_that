import React from 'react';
import { Link } from '@reach/router';

const ArticleAdder = (props) => {
    return (
        <Link to='/article_submission' >
            <p><span role='img' aria-label='plus sign'>➕</span>NEW ARTICLE</p>
        </Link>
    )
}

export default ArticleAdder;