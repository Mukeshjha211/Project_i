// src/components/Blog.js
import React from 'react';
import './Blog.css';

const blogPosts = [
  {
    title: 'Understanding React Hooks',
    date: 'August 15, 2024',
    excerpt: 'An introduction to React Hooks, including useState and useEffect.'
  },
  {
    title: 'CSS Grid vs Flexbox',
    date: 'July 10, 2024',
    excerpt: 'Comparing CSS Grid and Flexbox for layout design.'
  },
  {
    title: 'JavaScript ES6 Features',
    date: 'June 20, 2024',
    excerpt: 'A look at the new features introduced in ES6 and how they improve JavaScript.'
  }
];

const Blog = () => {
  return (
    <div className="blog-container" id="blog">
      <h2 className="blog-title">Blog</h2>
      <div className="blog-list">
        {blogPosts.map((post, index) => (
          <div className="blog-post" key={index}>
            <h3 className="post-title">{post.title}</h3>
            <p className="post-date">{post.date}</p>
            <p className="post-excerpt">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
