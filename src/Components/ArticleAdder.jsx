import React from 'react';
import { Link } from '@reach/router';
import Sty from './StyledComponents';

const ArticleAdder = ({ swapTheme, theme }) => {

    return (
        <Sty.ArticleAdder>
            <p>{(theme === 'dark') ? 'Light Theme' : 'Dark Theme'}<i onClick={swapTheme} className="fas fa-lightbulb"></i></p>
            <p><Link to='/article_submission' ><i className="fas fa-plus"></i> NEW ARTICLE</Link></p>
        </Sty.ArticleAdder>
    )
}

export default ArticleAdder;