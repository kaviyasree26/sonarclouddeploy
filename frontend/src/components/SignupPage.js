import React, { useState } from 'react';
import axios from 'axios';
import '../styles.css'; // Ensure you have this CSS file for styles

function SignupPage() {
  const [userType, setUserType] = useState('jobseeker');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const resumeFile = formData.get('resume');
    const logoFile = formData.get('logo');
    // const allowedResumeTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    // const allowedLogoTypes = ['image/png', 'image/jpeg'];

    // if (userType === 'jobseeker' && resumeFile && !allowedResumeTypes.includes(resumeFile.type)) {
    //   alert('Please upload a PDF or Word document.');
    //   return;
    // }
    
    // if (userType === 'company' && logoFile && !allowedLogoTypes.includes(logoFile.type)) {
    //   alert('Please upload a PNG or JPEG image.');
    //   return;
    // }

    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      coursepursued: formData.get('coursepursued'),
      city: formData.get('city'),
      country: formData.get('country'),
      resume: "Resume.pdf",
      companyName: formData.get('company-name'),
      companyLogo: "pic.jpg",
      role: userType,
    };

    try {
      const endpoint = 'http://localhost:8080/users/register';
      console.log(payload.resume);
      console.log(payload);
      const response = await axios.post(endpoint, payload);
      console.log(response.data);
      if (response.status === 200) {
        setIsRegistered(true);
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('An error occurred during signup.');
    }
  };

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <div className="tabs">
          <button className={userType === 'jobseeker' ? 'active' : ''} onClick={() => setUserType('jobseeker')}>
            Job Seeker Signup
          </button>
          <button className={userType === 'company' ? 'active' : ''} onClick={() => setUserType('company')}>
            Company Signup
          </button>
          <button className={userType === 'admin' ? 'active' : ''} onClick={() => setUserType('admin')}>
            Admin Signup
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          {userType === 'jobseeker' && (
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" required />
              <label htmlFor="course">Course Pursued</label>
              <input type="text" id="course" name="coursepursued" placeholder="Enter your course pursued" required />
              <label htmlFor="resume">Resume</label>
              <input type="file" id="resume" />
              <label htmlFor="city">City</label>
              <input type="text" id="city" name="city" placeholder="Enter your city" required />
              <label htmlFor="country">Country</label>
              <input type="text" id="country" name="country" placeholder="Enter your country" required />
            </div>
          )}

          {userType === 'company' && (
            <div className="form-group">
              <label htmlFor="company-name">Company Name</label>
              <input type="text" id="company-name" name="company-name" placeholder="Enter company name" required />
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" required />
              <label htmlFor="confirm-password">Confirm Password</label>
              <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" required />
              <label htmlFor="logo">Company Logo</label>
              <input type="file" id="logo" />
            </div>
          )}

          {userType === 'admin' && (
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" required />
            </div>
          )}
          <button type="submit">Sign Up</button>
          {isRegistered && (
            <div className="success-message">
              Registered successfully!
            </div>
          )}
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
