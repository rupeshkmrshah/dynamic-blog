import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPostPage from './pages/BlogPostPage';
import { BlogProvider } from './context/BlogContext';

const App = () => {
  return (
    <BlogProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<BlogPostPage />} />
        </Routes>
      </Router>
    </BlogProvider>
  );
};

export default App;