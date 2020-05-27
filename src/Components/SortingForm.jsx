import React from 'react';

class SortingForm extends React.Component {
    state = {
        sort_by: 'created_at',
        order: 'desc',
    }

    handleInputChange = (event) => {
        const { value, name } = event.target
        this.setState({
            [name]: value,
        })
    }

    handleSubmitForm = (event) => {
        const { sort_by, order } = this.state
        event.preventDefault()
        this.props.getArticles(sort_by, order)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmitForm}>
                <label className='sort_by'>Sort by:
                    <select className='select' name='sort_by' onChange={this.handleInputChange} >
                        <option value='created_at'>Date</option>
                        <option value='votes'>Votes</option>
                        <option value='comment_count'>Comments</option>
                    </select>
                </label>
                <label className='order'>Order:
                    <select className='select' name='order' onChange={this.handleInputChange} >
                        <option value='desc'>Descending / Newest</option>
                        <option value='asc'>Ascending / Oldest</option>
                    </select>
                </label>
                <button>SORT</button>
            </form>
        )
    }
}

export default SortingForm;