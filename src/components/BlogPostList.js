import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BlogContext } from '../context/BlogContext';

const BlogPostList = () => {
  const { posts } = useContext(BlogContext);

  console.log(posts); // Log the posts data

  return (
    <PostList>
      {posts.map(post => (
        <Post key={post.url}>
          <Link to={`/post/${encodeURIComponent(post.url)}`}>
            <h2>{post.title}</h2>
            {post.image_url && <img src={post.image_url} alt={post.title} />}
            <p>{post.description}</p>
            <p>Author: {post.source}</p>
          </Link>
        </Post>
      ))}
    </PostList>
  );
};

const PostList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Post = styled.div`
  width: 300px;
  margin: 1em;
  padding: 1em;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default BlogPostList;
