import axios from "axios";



const fetcher = axios.create({

    baseURL: '/api',
    headers:{
        'Content-Type': 'application/json',
    }
})

export default fetcher;