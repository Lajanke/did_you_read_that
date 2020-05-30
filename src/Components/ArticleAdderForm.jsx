import React from 'react';
import * as api from '../utils/api';
import { Link } from '@reach/router';
import ErrorDisplayer from './ErrorDisplayer';
import Sty from './StyledComponents';

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
        this.setState({
            [name]: value,
        })
    }

    handleClearForm = () => {
        this.setState({
            title: '',
            topic: 'coding',
            body: '',
            submitted: false,
            article_id: 0,
            err: '',
            formInvalid: false,
        })
    }

    handleSubmitForm = async (event) => {
        event.preventDefault()
        const { title, topic, body } = this.state
        const { user } = this.props

        if (body.match(/^\s*$/) || title.match(/^\s*$/)) {
            this.setState({ formInvalid: true })
        } else {
            try {
                const article = await api.postNewArticle(title, topic, body, user)
                this.setState({ title: '', topic: 'coding', body: '', submitted: true, article_id: article.article_id, formInvalid: false })
            } catch (err) {
                this.setState({ err: err.response.data.msg, isLoading: false })
            }
        }
    }

    render() {
        const { err } = this.state;
        if (err) return <ErrorDisplayer msg={err} />
        const { submitted, article_id, formInvalid, title, topic, body } = this.state

        return (
            <Sty.ArticleForm>
                <form onSubmit={this.handleSubmitForm} className='articleForm'>
                    <label className='titleLabel'>Title:
                    <textarea type="textarea" name='title' required='required' onChange={this.handleInputChange} placeholder='Something snappy...' value={title} className='titleTextArea' />
                    </label>
                    <label className='topicLabel'>Topic:
                    <select className='select' name='topic' onChange={this.handleInputChange} value={topic}>
                            <option value='coding'>Coding</option>
                            <option value='football'>Football</option>
                            <option value='cooking'>Cooking</option>
                        </select>
                    </label>
                    <label className='articleLabel'>Article:
                    <textarea type="textarea" name='body' required='required' onChange={this.handleInputChange} placeholder='What do you have to say...' value={body} rows='10' className='bodyTextArea' />
                    </label>
                    <button onClick={this.handleClearForm} className='resetInput'>Clear Form</button>
                    <button className='postButton'>POST ARTICLE</button>
                    {submitted &&
                        <p>Article submitted. See it <Link to={`/article/${article_id}`}>HERE</Link></p>
                    }
                    {formInvalid &&
                        <p>Inputs cannot be only spaces!</p>
                    }
                </form>
            </Sty.ArticleForm>
        )
    }
}

export default ArticleAdderForm;