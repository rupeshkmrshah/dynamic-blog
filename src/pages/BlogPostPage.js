import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';
import styled from 'styled-components';
import LoadingBlogPosts from './../components/LoadingBlogPosts';

const BlogPostPage = () => {
  const { id } = useParams();
  const { currentPost, fetchPostById } = useContext(BlogContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await fetchPostById(decodeURIComponent(id));
      setLoading(false);
    };

    fetchData();
  }, [id, fetchPostById]);

  if (loading) {
    return <LoadingBlogPosts />;
  }

  if (!currentPost) {
    return <div>Post not found.</div>;
  }

  return (
    <PostContainer>
      <h1>{currentPost.title}</h1>
      {currentPost.image_url && <img src={currentPost.image_url} alt={currentPost.title} />}
      <p>{currentPost.description}</p>
      <p>By: {currentPost.author}</p>
      <SocialMediaButtons>
        <button onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${currentPost.url}`, '_blank')}>Share on Facebook</button>
        <button onClick={() => window.open(`https://twitter.com/share?url=${currentPost.url}&text=${currentPost.title}`, '_blank')}>Share on Twitter</button>
        <button onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${currentPost.url}`, '_blank')}>Share on LinkedIn</button>
      </SocialMediaButtons>
    </PostContainer>
  );
};

const PostContainer = styled.div`
  max-width: 800px;
  margin: 2em auto;
  padding: 1em;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const SocialMediaButtons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1em;

  button {
    padding: 0.5em 1em;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export default BlogPostPage;
