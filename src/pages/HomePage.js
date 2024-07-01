import React from 'react';
import BlogPostList from '../components/BlogPostList';
import Navbar from '../components/Navbar';
import { Circles } from 'react-loader-spinner';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <h1 style={{'textAlign':'center'}}>Blog Posts</h1>
      {BlogPostList.loading && (
        <>
          <Circles height="70" width="70" color="#4fa94d" ariaLabel="circles-loading" wrapperStyle={{dislay: 'flex', justifyContent: 'center', alignItems: 'center'}} wrapperClass="" visible={true}/>
        </>
      )}
      {BlogPostList.error && (
        <>
          <span className="error-message">
            <span style={{ 'font-size': '20px' }}> Sorry, Blog Post not found</span>
          </span>
        </>
      )}
      {< BlogPostList/>}
    </div>
  );
};

export default HomePage;

