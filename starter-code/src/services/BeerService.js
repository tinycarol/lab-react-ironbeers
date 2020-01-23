import axios from 'axios';

const http = axios.create({ baseURL: 'https://ih-beers-api2.herokuapp.com/beers' });

const list = () => http.get('/').then(res => res.data);
const getOne = (id) => http.get(`/${id}`).then(res => res.data);
const random = () => http.get('/random').then(res => res.data);
const create = (beer) => http.post('/new', beer).then(res => res.data);
const search = (q) => http.get(`/search?q=${q}`).then(res => res.data);

export default {
	list, getOne, random, create, search
}