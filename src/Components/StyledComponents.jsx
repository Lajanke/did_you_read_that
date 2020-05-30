import styled from 'styled-components'

const Sty = {};

Sty.Article = styled.div`
    .aTitle {
        grid-area: title;
        margin: 0.5rem 0.3rem 0.3rem 0.3rem;
        font-size: 1.3rem;
    }

    .aAuthor {
        grid-area: author;
        margin: 0.3rem;
        font-size: 0.9rem;
    }
        
    .aTopic {
        grid-area: topic;
        background-color: #2d3b40;
        align-self: center;
        margin: 0.3rem;
        font-size: 1rem;
        padding: 0.2rem 0.2rem 0.2rem 1rem;
    }
        
    .aDate {
        grid-area: date;
        margin: 0.3rem;
        font-size: 0.8rem;
        justify-self: right;
    }
        
    .aComments {
        grid-area: comments;
        margin: 0.3rem;
        font-size: 0.9rem;
    }
        
    .aVotingButtons {
        grid-area: votes;
        margin: 0.3rem;
        justify-self: right;
    }
        
    .aBody {
        grid-area: body;
        margin: 0.3rem;
        font-size: 1rem;
        justify-self: right;
    }
        
    .aDelete {
        grid-area: delete;
        margin: 0.3rem;
        font-size: 0.8rem;
        justify-self: left;
        padding: 0.3rem;
        background-color: #2d3b40;
        color: #d2e4f1;
    }
    
    .articleGrid {
        border-style: dotted;
        border-width: 1px 0 0 0;
        margin: auto;
        display: grid;
        margin: 0.1rem;
        grid-template-columns: 50% auto;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas: 
            'title title'
            'author topic'
            'body body'
            'delete date'
            'comments votes'
        ;
        border: solid;
        border-width: 1px 0 1px 0;
        margin-bottom: 0.5rem;
    }
`;

Sty.ArticleCard = styled.div`
    .acTitle {
        grid-area: title;
        margin: 0.3rem;
        font-size: 1.3rem;
    }
    
    .acAuthor {
        grid-area: author;
        margin: 0.3rem;
        font-size: 0.9rem;
    }
    
    .acTopic {
        grid-area: topic;
        background-color: #2d3b40;
        align-self: center;
        margin: 0.3rem;
        font-size: 1rem;
        padding: 0.2rem 0.2rem 0.2rem 1rem;
    }
    
    .acDate {
        grid-area: date;
        margin: 0.3rem;
        font-size: 0.8rem;
        justify-self: right;
    }
    
    .acComments {
        grid-area: comments;
        margin: 0.3rem;
        font-size: 0.9rem;
        margin-bottom: 1rem;
    }
    
    .acVotes {
        grid-area: votes;
        margin: 0.3rem;
        font-size: 1rem;
        justify-self: right;
    }
    
    section {
        border-style: dotted;
        border-width: 1px 0 0 0;
        margin: auto;
        display: grid;
        margin: 0.1rem;
        grid-template-columns: 50% auto;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas: 
        'title title'
        'author topic'
        '. date'
        'comments votes'
        ;
        border: dotted;
        border-width: 0 0 1px 0;
        margin-bottom: 0.5rem;
    }
`;

Sty.CommentCard = styled.div`   
    .ccAuthor {
        grid-area: author;
        margin: 0.3rem;
        font-size: 0.9rem;
    }
    
    .ccDate {
        grid-area: date;
        margin: 0.3rem;
        font-size: 0.8rem;
        justify-self: right;
    }

    .ccBody {
        grid-area: body;
        margin: 0.4rem 0.3rem 0.4rem 0.3rem;
        font-size: 1rem;
        justify-self: left;
    }
    
    .ccDelete {
        grid-area: delete;
        margin: 0.3rem;
        font-size: 0.8rem;
        justify-self: left;
        padding: 0.3rem;
        background-color: #2d3b40;
        color: #d2e4f1;
    }

    .voting {
        grid-area: votes;
        justify-self: right;
    }

    .cVotingButtons {
        margin: 0.3rem;
        justify-self: right;
        align-self: center;
    }

    section {
        border-style: dotted;
        border-width:  0 1px 0;
        margin: auto;
        display: grid;
        margin: 0.1rem;
        grid-template-columns: 50% auto;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas: 
        'author date'
        'body body'
        'null votes'
        'delete votes'
        ;
        border: dotted;
        border-width: 0 0 1px 0;
        margin-bottom: 0.5rem;
    }
`;

Sty.Subheader = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0.3rem 0 0.3rem;

    p {
        margin: 0;
        font-size: 0.8rem; 
    }
`;

Sty.ArticleAdder = styled.div`
    text-align: right;
    margin-right: 0.3rem;

    i {
        color: darkolivegreen;
    }
`;

Sty.ArticleForm = styled.div`

* {
    padding: 0;
}

button {
    padding: 0.3rem 0 0.3rem 0;
}

.titleLabel {
    grid-area: title;
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    
}

.articleLabel {
    grid-area: article;
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
}

.topicLabel {
    grid-area: topic;
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
}

.titleTextArea {
    grid-area: titleText;
    font-size: 1rem;
    width: 225px;
    border-style: none;
    margin: 0.5rem 0 0.5rem 0;
}

.bodyTextArea {
    grid-area: articleText;
    font-size: 1rem;
    width: 225px;
    border-style: none;
    margin: 0.5rem 0 0.5rem 0;
}

select {
    grid-area: select;
    font-size: 1rem; 
    width: 225px;
    margin: 0.5rem 0 0.5rem 0;
}

.postButton {
    grid-area: post;
    font-size: 1rem;
    width: 225px;
    justify-self: right;
    margin: 0.5rem 0 0.5rem 0;
}

.resetInput {
    grid-area: reset;
    font-size: 1rem;
    width: 225px;
    justify-self: right;
    margin: 0.3rem 0 0.3rem 0;
}

    p {
    grid-area: alerts;
    font-size: 1rem;
    width: 225px;
    justify-self: right;
    margin: 0.3rem 0 0.3rem 0;
}

    form {
        margin: auto;
        width: 300px;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(1fr, 6);
        grid-template-rows: auto;
        grid-template-areas: 
            'title titleText'
            'article articleText'
            'topic select'
            'reset .'
            'post .'
            'alerts .'
            ;
        }

    textarea {
        resize: none;
        color: #272a2b;
    }
`;

Sty.CommentForm = styled.div`
    * {
        padding: 0;
    }

    button {
        padding: 0.3rem 0 0.3rem 0;
    }

    .commentText {
        grid-area: commentText;
        font-size: 1rem;
        width: 250px;
        border-style: none;
        margin: 0.5rem 0 0.5rem 0;
    }

    .postButton {
        grid-area: postButton;
        font-size: 1rem;
        width: 250px;
        justify-self: right;
        margin: 0.5rem 0 0.5rem 0;
    }

    p {
        grid-area: alerts;
        font-size: 1rem;
        width: 250px;
        justify-self: right;
        margin: 0.3rem 0 0.3rem 0;
    }

    form {
        display: grid;
        grid-template-rows: repeat(1fr, 3);
        grid-template-rows: auto;
        grid-template-areas: 
            'commentText'
            'postButton'
            'alerts'
    }

    display: flex;
    flex-direction: column;

    textarea {
        resize: none;
        color: #272a2b;
    }
`;

export default Sty;