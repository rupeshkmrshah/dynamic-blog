import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { BlogContext } from '../context/BlogContext';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';

const BlogPost = () => {
  const { id } = useParams();
  const { currentPost, fetchPostById } = useContext(BlogContext);

  useEffect(() => {
    fetchPostById(decodeURIComponent(id));
  }, [id, fetchPostById]);

  if (!currentPost) return <div>Loading...</div>;

  return (
    <PostContainer>
      <h1>{currentPost.title}</h1>
      <img src={currentPost.urlToImage} alt={currentPost.title} />
      <p>By: {currentPost.author}</p>
      <p>{currentPost.content}</p>
      <ShareButtons>
        <FacebookShareButton url={window.location.href}>
          <button>Share on Facebook</button>
        </FacebookShareButton>
        <TwitterShareButton url={window.location.href}>
          <button>Share on Twitter</button>
        </TwitterShareButton>
        <LinkedinShareButton url={window.location.href}>
          <button>Share on LinkedIn</button>
        </LinkedinShareButton>
      </ShareButtons>
    </PostContainer>
  );
};

const PostContainer = styled.div`
  margin: 2em;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
    color: blue;
  }
`;

const ShareButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1em;

  button {
    margin: 0 0.5em;
    padding: 0.5em 1em;
    border: none;
    background-color: #007bff;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export default BlogPost;
