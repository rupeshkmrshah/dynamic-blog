import axios from 'axios';

const api = axios.create({
  baseURL: 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2024-07-01&' +
          'sortBy=popularity&' +
          'apiKey=c2699b48e25a4769aba55d1f3cbb7776' // replace with your backend URL
});

export const fetchPosts = () => api.get('/api/blogposts');
export const fetchPostById = (id) => api.get(`/api/blogposts/${id}`);
