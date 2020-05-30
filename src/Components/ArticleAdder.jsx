import React from 'react';
import styled from 'styled-components'
import { Link } from '@reach/router';

const ArticleAdder = () => {

    const Div = styled.div`
        text-align: right;
        margin-right: 0.3rem;

        i {
            color: darkolivegreen;
        }
    `
    return (
        <Div>
            <p> <Link to='/article_submission' ><i className="fas fa-plus"></i> NEW ARTICLE</Link></p>
        </Div>
    )
}

export default ArticleAdder;