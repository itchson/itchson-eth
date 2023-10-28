import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import axios from 'axios';
import matter from 'gray-matter';
import styled from 'styled-components';

const BlogWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  color: #11cef6;
  background-color: #2f2f2f;
  overflow-y: auto;

  @media screen and (min-width: 768px) {
    width: calc(100% - 250px);
    margin-left: 250px;
  }

  @media screen and (max-width: 767px) {
    height: calc(100vh - 120px);
    margin-top: 120px;
  }
`;

const BlogPost = styled.div`
  background-color: #2f2f2f;
  border-style: solid;
  border-color: #f8e03e;
  margin-bottom: 20px;
  border-radius: 5px;
`;

const BlogTitle = styled.h2`
  background-color: #f8e03e;
  color: #2f2f2f;
`;

const BlogContent = styled.p`
  color: #11cef6;
`;

const Blog = () => {
  const [post, setPost] = useState({
    data: {},
    content: ''
  });

  useEffect(() => {
    axios.get('/blog/galaxy_royale_blog_post.md')
      .then((response) => {
        const markdown = matter(response.data);
        setPost(markdown);
      });
  }, []);

  return (
    <BlogWrapper>
      <BlogPost>
        <BlogTitle>{post.data.title}</BlogTitle>
        <BlogContent remarkPlugins={[gfm]} children={post.content} />
      </BlogPost>
    </BlogWrapper>
  );
};

export default Blog;
