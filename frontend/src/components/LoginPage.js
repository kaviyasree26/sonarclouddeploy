import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css'; // Ensure you have a CSS file for styling
import axios from 'axios';

function LoginPage() {
  const [isJobSeeker, setIsJobSeeker] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await axios.get(`http://localhost:8080/users/login?email=${email}&password=${password}`);
    console.log(response.data);
    if (response.data) {
       
       

        switch (response.data.role) {
            case 'jobseeker':
                navigate('/jobs');
                break;
            case 'company':
                navigate('/company-dashboard');
                break;
            case 'admin':
                navigate('/admin-dashboard');
                break;
            default:
                alert('Invalid role');
        }
    } else {
        alert('Invalid email or password');
    }
};

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <p>
          Don't have an account? <a href="/signup">Sign up here</a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
