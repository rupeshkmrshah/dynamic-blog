import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://api.thenewsapi.com/v1/news/all', {
          params: {
            api_token: 'okY8hNfePKZCP7g8bAmjN2vKMLKl33ZzMB4wF2V7',
            categories: 'business,tech',
            search: 'all',
            limit: '3'
          }
        });
        console.log(response.data); // Log the response data
        setPosts(response.data.data); // Adjust to the correct path of articles in the response
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  const fetchPostById = (id) => {
    const post = posts.find(post => post.url === id);
    setCurrentPost(post);
  };

  return (
    <BlogContext.Provider value={{ posts, currentPost, fetchPostById }}>
      {children}
    </BlogContext.Provider>
  );
};
