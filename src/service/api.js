import axios from 'axios';

//https://apiprodutosnode.herokuapp.com/products

const api = axios.create({
    baseURL: 'https://apiprodutosnode.herokuapp.com'
});

export default api;