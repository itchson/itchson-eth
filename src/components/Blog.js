import React from 'react';
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
`;

const BlogPost = styled.div`
  background-color: #f8e03e;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
`;

const BlogTitle = styled.h2`
  color: #713491;
  margin-bottom: 10px;
`;

const BlogContent = styled.p`
  color: #713491;
`;

function Blog() {
  // Replace with your actual blog data
  const blogPosts = [
    {
      title: 'Blog Post 1',
      content: 'This is the content of the first blog post.',
    },
    {
      title: 'Blog Post 2',
      content: 'This is the content of the second blog post.',
    },
    // Add more blog posts as needed
  ];

  return (
    <BlogWrapper>
      {blogPosts.map((post, index) => (
        <BlogPost key={index}>
          <BlogTitle>{post.title}</BlogTitle>
          <BlogContent>{post.content}</BlogContent>
        </BlogPost>
      ))}
    </BlogWrapper>
  );
}

export default Blog;
