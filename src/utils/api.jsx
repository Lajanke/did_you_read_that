import axios from 'axios'
const baseURL = 'https://lk-news.herokuapp.com/api'

export const fetchArticles = ({ slug, author }) => {
    return axios.get(`${baseURL}/articles`, {
        params: { topic: slug,
                    author,
        },

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

export const fetchUserByUsername = (username) => {
    return axios.get(`${baseURL}/users/${username}`)
        .then(({ data: { user } }) => {
            return user;
        })
}

export const postNewComment = ({article_id, body, user}) => {
    const submittedComment = {'username': user, 'body': body}
    return axios.post(`${baseURL}/articles/${article_id}/comments`, submittedComment)
    .then(({data:{comment}}) => {
        return comment;
    })
}
