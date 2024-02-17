import axios from '@/api/axios'

const getArticle = slug => {
    return axios.get(`/articles/${slug}`)
        // .then(response => {
        //    response.data.article
        // })
        // .catch( error => console.log('articale', error))
}

export default {
    getArticle
}