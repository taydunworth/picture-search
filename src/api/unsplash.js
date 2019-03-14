import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    params: {
        client_id: '7f83e9a2e81f5db989a40b50a1a452b07108774c6e2507df4b81803244575f1e'
    }
});