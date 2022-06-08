import axios from "axios";

const API_KEY = '825446dc6e5485732825bdf5f618ca71'

class CompanyServices {
    getResource = (url) => {
        return axios.get(url, {
            params: {
                apikey: API_KEY,
                limit: 100,
                orderBy: '-name'
            }
        })
    }

    getAllEmployees = () => {
        return this.getResource('https://gateway.marvel.com:443/v1/public/characters')
    }
}

export default CompanyServices