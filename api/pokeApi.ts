import axios from 'axios'

const PokeAPI = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
    headers: {
        "Accept-Encoding": "gzip,deflate,compress" 
    }
})

export default PokeAPI