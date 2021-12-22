const baseUrl = 'http://localhost:5000/hotels/auth';

let getOptions = () => ({
    method: 'POST',
    mode: 'cors',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'

    }

})

let handleResponseJson = (res) => res.json()

class UserData {
    static register (user) {
        const options = getOptions()
        options.body = JSON.stringify(user)
        return window.fetch(`${baseUrl}/signup`, options).then(handleResponseJson)
    }

    static login (user) {
        const options = getOptions()
        options.body = JSON.stringify(user)
        return window.fetch(`${baseUrl}/login`, options).then(handleResponseJson)
    }
}
export default UserData