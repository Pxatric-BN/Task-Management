import axios from 'axios'

const publicAxios = axios.create({
  //baseURL : '/api',
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default publicAxios
