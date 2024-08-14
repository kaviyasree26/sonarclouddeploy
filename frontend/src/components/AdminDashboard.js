import React, { useState, useEffect } from 'react';
import '../AdminDashboard.css';

const AdminDashboard = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' }
  ]);

  // Function to add a new user
  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  // Function to update a user by id
  const updateUser = (updatedUser) => {
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
  };

  // Function to delete a user by id
  const deleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  // Example of adding a new user (This can be triggered by a form submission in a real scenario)
  useEffect(() => {
    const newUser = { id: 3, name: 'Alice Johnson', email: 'alice@example.com', status: 'Active' };
    addUser(newUser);
  }, []);

  return (
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
      </header>
      <div className="dashboard-content">
        <section className="user-summary">
          <h2>User Summary</h2>
          <div className="summary-card">
            <h3>Total Users</h3>
            <p>{users.length}</p>
          </div>
          <div className="summary-card">
            <h3>Active Users</h3>
            <p>{users.filter(user => user.status === 'Active').length}</p>
          </div>
          <div className="summary-card">
            <h3>Inactive Users</h3>
            <p>{users.filter(user => user.status === 'Inactive').length}</p>
          </div>
        </section>
        <section className="user-list">
          <h2>User Details</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.status}</td>
                  <td>
                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                    {/* Add more action buttons like edit here */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
