import React, { useState, useEffect } from 'react';
import '../techcorp.css';

function TechCorpDashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch previous posts for TechCorp (replace with actual fetch call)
    const previousPosts = [
      {
        id: 1,
        title: 'Senior Software Engineer',
        description: 'We are looking for a Senior Software Engineer with 5+ years of experience in full-stack development.',
        datePosted: '2024-07-15'
      },
      {
        id: 2,
        title: 'Product Manager',
        description: 'We are hiring a Product Manager with excellent communication skills and experience in Agile methodologies.',
        datePosted: '2024-07-10'
      }
    ];

    setPosts(previousPosts);
  }, []);

  return (
    <div className="dashboard">
      <h2>Tech Corp Dashboard</h2>
      <p>Welcome to the Tech Corp Dashboard. Here you can post your job listings and manage applications.</p>
      
      <div className="previous-posts">
        <h3>Previous Posts</h3>
        {posts.length === 0 ? (
          <p>No posts available</p>
        ) : (
          <ul className="posts-list">
            {posts.map(post => (
              <li key={post.id} className="post-item">
                <h4>{post.title}</h4>
                <p>{post.description}</p>
                <small>Date Posted: {post.datePosted}</small>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TechCorpDashboard;
