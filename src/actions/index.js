import { FETCH_USERS } from './types';
import axios from 'axios';

export function fetchUsers() {
    const request = axios.get('http://jsonplaceholder.typicode.com/users'); //Returns a promise.

    return {
        type: FETCH_USERS,
        payload: request //Async promise, need to handle it with middleware.
    }
}