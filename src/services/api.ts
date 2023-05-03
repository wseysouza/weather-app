import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.hgbrasil.com/weather',
    headers: {
        'Content-Type': 'application/json'
    },
})

