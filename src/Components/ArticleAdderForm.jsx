import React from 'react';
import * as api from '../utils/api';
import { Link } from '@reach/router';
import ErrorDisplayer from './ErrorDisplayer';

class ArticleAdderForm extends React.Component {
    state = {
        title: '',
        topic: 'coding',
        body: '',
        submitted: false,
        article_id: 0,
        err: '',
        formInvalid: false,
    }

    handleInputChange = (event) => {
        const { value, name } = event.target
        console.log(event.target.value)
        this.setState({
            [name]: value,
        })
    }

    handleSubmitForm = (event) => {
        event.preventDefault()
        const { title, topic, body } = this.state
        const { user } = this.props

        if (body.match(/^\s*$/) || title.match(/^\s*$/)) {  
            this.setState({formInvalid: true})
        } else { 
            api.postNewArticle(title, topic, body, user)
            .then((article) => {
                this.setState({ title: '', topic: 'coding', body: '', submitted: true, article_id: article.article_id, formInvalid: false })
            })
            .catch(err => {
                this.setState({err: err.response.data.msg, isLoading: false})
            })}
    }

    render() {
        const { err } = this.state;
        if (err) return <ErrorDisplayer msg={ err }/>
        const { submitted, article_id, formInvalid } = this.state
        return (
            <form onSubmit={this.handleSubmitForm} className='articleForm'>
                <label>Title:
                    <input type="text" name='title' required='required' onChange={this.handleInputChange} placeholder='Something snappy...' value={this.state.title} />
                </label>
                <label>Topic:
                    <select className='select' name='topic' onChange={this.handleInputChange} value={this.state.topic}>
                        <option value='coding'>Coding</option>
                        <option value='football'>Football</option>
                        <option value='cooking'>Cooking</option>
                    </select>
                </label>
                <label>Article:
                    <input type="text" name='body' required='required' onChange={this.handleInputChange} placeholder='What do you have to say...' value={this.state.body} />
                </label>
                <button>POST</button>
                {submitted &&
                    <p>Article submitted. See it <Link to={`/article/${article_id}`}>HERE</Link></p>
                }
                {formInvalid &&
                    <p>Inputs cannot be only spaces!</p>
                }
            </form>
        )
    }
}

export default ArticleAdderForm;