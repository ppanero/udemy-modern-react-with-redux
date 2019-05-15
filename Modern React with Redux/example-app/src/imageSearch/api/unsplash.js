import axios from 'axios';

// Creates a copy of the axios client with some specified properties
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        'Authorization': 'Client-ID 63e64aa6a902f1c97ef7e6568445d8eddebf35d520e78b62d514ae75d555c7e3'
    }
});