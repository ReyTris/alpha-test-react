import axios from "axios";

export const $axios = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'X-Auth-Token': process.env.REACT_APP_API_TOKEN,
    }
})

export default class ApiService {
    static async getCatBreeds() {
        const response = await $axios.get('breeds')
        return response.data
    }
}