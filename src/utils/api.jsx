import axios from 'axios'
const baseURL = 'https://lk-news.herokuapp.com/api'

export const fetchArticles = ({ slug }) => {
    return axios.get(`${baseURL}/articles`, {
        params: { topic: slug },
    })
        .then(({ data: { articles } }) => {
            return articles;
        })
}

export const fetchArticleById = (article_id) => {
    return axios.get(`${baseURL}/articles/${article_id}`)
        .then(({ data: { article } }) => {
            return article;
        })
}

export const fetchComments = ({article_id}) => {
    return axios.get(`${baseURL}/articles/${article_id}/comments`)
        .then(({ data: { comments } }) => {
            return comments;
        })
}

export const fetchTopics = () => {
    return axios.get(`${baseURL}/topics`)
        .then(({ data: { topics } }) => {
            return topics;
        })
}

