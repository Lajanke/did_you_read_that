import styled from 'styled-components'

const Sty = {};

Sty.Article = styled.div`
          .aTitle {
            grid-area: title;
            margin: 0.3rem;
            font-size: 1.3rem;
          }

          .aAuthor {
            grid-area: author;
            margin: 0.3rem;
            font-size: 0.9rem;
          }
          
          .aTopic {
            grid-area: topic;
            border-style: dotted;
            border-color: #d2e4f1;
            border-width: 1px 0 1px 1px;
            align-self: center;
            margin: 0.3rem;
            font-size: 1rem;
            padding: 0.2rem;
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
            margin-bottom: 1rem;
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
            font-size: 1rem;
            justify-self: left;
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
          }
        `;

export default Sty;