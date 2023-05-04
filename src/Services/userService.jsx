import axios from 'axios'

export default function UserService() {
    const baseUrl = "http://localhost:3000/users"

    const getUsers = async () => {
        let response;
        await axios.get(baseUrl)
            .then(res => response = res.data)
            .catch(error => console.log(error))

        return response
    }

    const setUsers = async (body) => {
        console.log(body)
        await axios.post(baseUrl, body)
            .then(res => console.log(res))
            .catch(error => console.log(error))
    }

    return {
        getUsers, setUsers
    }
}
