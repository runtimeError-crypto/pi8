import Auth from '../components/users/Auth';
const baseUrl = 'http://localhost:5000/hotels/details';

let getOptions = () => ({
    mode: 'cors',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'

    }

})

let handleResponseJson = (res) => res.json()

class ReviewData {
    static create (review, id) {
        const options = getOptions()
        options.method = 'POST'
        options.headers.Authroization = `bearer`  + Auth.getToken()
        options.body = JSON.stringify(review)
        return window.fetch(`${baseUrl}/${id}/reivews/create`,options).then(handleResponseJson)
    }
    static getAll (id) {
        const options = getOptions()
        options.headers.Authorization = `bearer ${Auth.getToken()}`
        options.method = 'GET'
        return window.fetch(`${baseUrl}/${id}/reviews`, options).then(handleResponseJson)
}

}
export default ReviewData