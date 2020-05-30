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

export default Sty;