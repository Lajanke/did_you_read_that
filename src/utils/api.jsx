import axios from 'axios'
const baseURL = 'https://lk-news.herokuapp.com/api'

const request = axios.create({ baseURL: 'https://lk-news.herokuapp.com/api' })

export const fetchArticles = async ({ slug, author }, sort_by, order) => {
    const { data } = await request.get('/articles', {
        params: {
            topic: slug,
            author,
            sort_by,
            order,
        }
    })
    return data
}

export const fetchArticleById = async (article_id) => {
    const { data: { article } } = await request.get(`/articles/${article_id}`)
    return article
}

export const fetchComments = async ({ article_id, p, limit }) => {
    const { data: { comments } } = await request.get(`/articles/${article_id}/comments`, {params: {p, limit}})
    return comments
}

export const fetchTopics = async () => {
    const { data: { topics } } = await request.get(`/topics`)
    return topics;
}

export const fetchUserByUsername = async (username) => {
    const { data: { user } } = await request.get(`/users/${username}`)
    return user
}

export const postNewComment = async ({ article_id, body, user }) => {
    const submittedComment = { 'username': user, 'body': body }
    const { data: { comment } } = await request.post(`/articles/${article_id}/comments`, submittedComment)
    return comment
}

export const deleteById = async (id, type) => {
        const { data: { msg }} = await request.delete(`${baseURL}/${type}/${id}`)
        return msg
}

export const patchVotes = async (num, id, type) => {
    const data = await request.patch(`/${type}/${id}`, { inc_votes: num })
    return data.status
}

export const postNewArticle = async (title, topic, body, user) => {
    const submittedComment = { 'author': user, 'body': body, 'topic': topic, 'title': title }
        const { data: { article } } = await request.post('/articles', submittedComment)
        return article
}
