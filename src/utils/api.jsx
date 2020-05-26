import axios from 'axios'
const baseURL = 'https://lk-news.herokuapp.com/api'

export const fetchArticles = () => {
    return axios.get(`${baseURL}/articles`)
        .then(({data: {articles}}) => {
            return articles;
        })
    
}

