import React from 'react';
import '../teamcode.css';

const posts = [
  { id: 1, title: 'Code Jam Winners', date: '2024-07-01', content: 'Congratulations to the winners of our annual code jam!' },
  { id: 2, title: 'New Open Source Project', date: '2024-06-15', content: 'We have released a new open source project on GitHub.' },
];

const TeamCodeDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>TeamCode Dashboard</h1>
      <h2>Previous Posts</h2>
      <div className="posts-list">
        {posts.map(post => (
          <div className="post-card" key={post.id}>
            <h3>{post.title}</h3>
            <p><strong>Date:</strong> {post.date}</p>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCodeDashboard;

