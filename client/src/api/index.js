import axios from 'axios'

const url = 'http://localhost:5000/api/characters/'

export const getCharacters = () => {
    return axios.get(url)
}