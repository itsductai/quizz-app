import axios from "axios";

export const BASE_URL = 'http://localhost:5089/';

export const END_POINT = {
    participant: 'participant',
    questions: 'questions'
};

export const createAPIEndpoint = (endpoint) => { 
    let url = BASE_URL + 'api/' + endpoint + '/';
    return {
        fetch: () => axios.get(url),
        fetchByID: (id) => axios.get(url + id),
        post: (newRecord) => axios.post(url, newRecord),
        put: (id, updateRecord) => axios.put(url + id, updateRecord),
        delete: (id) => axios.delete(url + id),
    };
};
