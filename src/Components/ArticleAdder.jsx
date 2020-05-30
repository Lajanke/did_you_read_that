import React from 'react';
import { Link } from '@reach/router';
import Sty from './StyledComponents';

const ArticleAdder = () => {

    return (
        <Sty.ArticleAdder>
            <p> <Link to='/article_submission' ><i className="fas fa-plus"></i> NEW ARTICLE</Link></p>
        </Sty.ArticleAdder>
    )
}

export default ArticleAdder;