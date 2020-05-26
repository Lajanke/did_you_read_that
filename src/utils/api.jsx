import axios from 'axios'
const baseURL = 'https://lk-news.herokuapp.com/api'

export const fetchArticles = ({ slug }) => {
    return axios.get(`${baseURL}/articles`, {
        params: { topic: slug }
    })
        .then(({ data: { articles } }) => {
            return articles;
        })
}

export const fetchTopics = () => {
    return axios.get(`${baseURL}/topics`)
        .then(({ data: { topics } }) => {
            return topics;
        })
}

