import React from 'react';
import { Link } from '@reach/router';

const ArticleAdder = () => {
    return (
        <Link to='/article_submission' >
            <p><i className="fas fa-plus"></i> NEW ARTICLE</p>
        </Link>
    )
}

export default ArticleAdder;