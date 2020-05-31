import styled from 'styled-components'

const Sty = {};

Sty.AppContainer = styled.div`
    width: 100%;
    height: 100vh;
    background: ${(props) => props.theme.colors.bg};
    * {
        color: ${(props) => props.theme.colors.text};
        p, h2, h3 {
            font-weight: ${(props) => props.theme.weights.weight};
        }

        h1 {
            color: #000;
        }

        select {
            color: #000;
        }
        
        option {
            color: #000;
        }
        
        textarea {
            background-color: #d2e4f1;
        }
    }
    
    button {
        color: #fff;
    }
`;

Sty.Header = styled.div`
    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    
    .logo {
        border-left: 4px solid #b81111;
        border-bottom: 4px solid #b81111;
        border-top: 4px solid #3f8c38;
        border-right: 4px solid #3f8c38;
        width: 20px;
        height: 20px;
        transform: rotate(-45deg);
        margin-right: 2rem;
        margin-top: 0.3rem;
    }

    h1 {
        background-color: #d2e4f1;
        padding: 0.2rem 4rem 0.2rem 2rem;
        color: #000;
      }
`;

Sty.NavButtons = styled.div`
     button: {
        margin-right: 1rem;
     }
`;

Sty.FeaturedArticle = styled.div`
      h1 {
          color: #000;
      }
`

Sty.Article = styled.div`
    .aTitle {
        grid-area: title;
        margin: 0.5rem 0.3rem 0.3rem 0.3rem;
        font-size: 1.3rem;
    }

    .aAuthor {
        grid-area: author;
        margin: 0.3rem;
        font-size: 1rem;
        font-style: italic;
        font-weight: 200;        
    }
        
    .aTopic {
        grid-area: topic;
        background-color: #2d3b40;
        color: #fff;
        align-self: center;
        margin: 0.3rem;
        font-size: 1rem;
        padding: 0.2rem 0.2rem 0.2rem 1rem;
    }

    .aTopic a {
        color: #fff;
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
        justify-self: left;
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

    @media only screen and (min-width: 800px) {
        section {
            border: none;
        }

        .aTopic {
            width: 50%;
            justify-self: right;
        }
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
        font-size: 1rem;
        font-style: italic;
        font-weight: 200;
    }
    
    .acTopic {
        grid-area: topic;
        background-color: #2d3b40;
        color: #fff;
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
        border: solid;
        border-width: 0 0 1px 0;
        border-color: #2d3b40;
        margin-bottom: 0.5rem;
    }

    @media only screen and (min-width: 800px) {
        section {
            border: none;
        }
    }
`;

Sty.CommentCard = styled.div`   
    .ccAuthor {
        grid-area: author;
        margin: 0.3rem;
        font-size: 1rem;
        font-style: italic;
        font-weight: 200;
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
        border: solid;
        border-width: 0 0 1px 0;
        border-color: #2d3b40;
        margin-bottom: 0.5rem;
    }

    @media only screen and (min-width: 800px) {
        section {
            border: none;
        }
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0.3rem;
    font-size: 1.3rem;

    .fa-plus {
        color: #3f8c38;
    }

    .fa-lightbulb {
        color: ${(props) => props.theme.colors.text};
        margin: 0 0.3rem 0 0.3rem;
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
    width: 80%;
    border-style: none;
    margin: 0.5rem 0 0.5rem 0;
}

.bodyTextArea {
    grid-area: articleText;
    font-size: 1rem;
    width: 80%;
    border-style: none;
    margin: 0.5rem 0 0.5rem 0;
}

select {
    grid-area: select;
    font-size: 1rem; 
    width: 80%;
    margin: 0.5rem 0 3rem 0;
    padding: 0.3rem 0 0.3rem 0;
}

.postButton {
    grid-area: post;
    font-size: 1rem;
    width: 80%;
    justify-self: right;
    margin: 0.5rem 0 0.5rem 0;
}

.resetInput {
    grid-area: reset;
    font-size: 1rem;
    width: 80%;
    justify-self: right;
    margin: 0.3rem 0 0.5rem 0; 
}

    p {
    grid-area: alerts;
    font-size: 1rem;
    width: 80%;
    justify-self: right;
    margin: 0.3rem 0 0.3rem 0;
}

    form {
        margin: auto;
        width: 80vw;
        max-width: 800px;
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
        color: #000;
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
        width: 50vw;
        max-width: 600px;
        border-style: none;
        margin: 0.5rem 0 0.5rem 0;
    }

    .postButton {
        grid-area: postButton;
        font-size: 1rem;
        width: 50vw;
        max-width: 600px;
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
        color: #000;
    }
`;

Sty.ArticleList = styled.div`
    h1 {
        color: #000;
    }

    p {
        margin: 0 0 1rem 0.3rem;
    }

`;

Sty.TopicCard = styled.div`    
    h2 {
        background-color: #2d3b40;
        padding: 0.2rem 0 0.2rem 1rem;
        margin: 0.3rem 0 0.3rem 0;
        color: #fff;
    }

    p {
        text-align: right;
        margin: 0.5rem 0.3rem 0.5rem 0.3rem;
    }
`;

Sty.SortForm = styled.div`
.sort_by {
    grid-area: sortBy;
    margin: 0.3rem;
    display: flex;
    justify-content: space-between;
}

.order {
    grid-area: order;
    margin: 0.3rem;
    display: flex;
    justify-content: space-between;
}

.sortButton {
    grid-area: sortButton;
    margin: 0.3rem;
}

form {
    margin: 0.3rem;
    border-width: 0 0 1px 0;
    padding-bottom: 0.5rem;
    border-style: dotted;
    border-color: #2d3b40;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 
        'sortBy sortBy .'
        'order order sortButton'
        ;
}

@media only screen and (min-width: 600px) {
    form {
        display: flex;
        justify-content: center;
        margin-bottom: 0.5rem;
    }

    * {
        margin: 0 0.5rem 0 0.5rem;
    }
}
`;

export default Sty;