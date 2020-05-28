import axios from 'axios'
const baseURL = 'https://lk-news.herokuapp.com/api'

export const fetchArticles = ({ slug, author }, sort_by, order) => {
    return axios.get(`${baseURL}/articles`, {

        params: {
            topic: slug,
            author,
            sort_by,
            order,
        },

    })
        .then(({ data }) => {
            return data;
        })
}

export const fetchArticleById = (article_id) => {
    return axios.get(`${baseURL}/articles/${article_id}`)
        .then(({ data: { article } }) => {
            return article;
        })
}

export const fetchComments = ({ article_id }) => {
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

export const postNewComment = ({ article_id, body, user }) => {
    const submittedComment = { 'username': user, 'body': body }
    return axios.post(`${baseURL}/articles/${article_id}/comments`, submittedComment)
        .then(({ data: { comment } }) => {
            return comment;
        })
}

//refactor deletes to use same function like patchVotes

export const deleteCommentById = (comment_id) => {
    return axios.delete(`${baseURL}/comments/${comment_id}`)
        .then(({ data: { msg } }) => {
            return msg;
        })
}

export const deleteArticleById = (article_id) => {
    return axios.delete(`${baseURL}/articles/${article_id}`)
        .then(({ data: { msg } }) => {
            return msg;
        })
}

export const patchVotes = (num, id, type) => {
    return axios.patch(`${baseURL}/${type}/${id}`, { inc_votes: num })
}

export const postNewArticle = (title, topic, body, user) => {
    const submittedComment = { 'author': user, 'body': body, 'topic': topic, 'title': title }
    console.log(submittedComment)
    return axios.post(`${baseURL}/articles/`, submittedComment)
        .then(({ data: { article } }) => {
            return article;
        })
}
