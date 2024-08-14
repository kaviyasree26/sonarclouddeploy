import React, { useState } from 'react';
import './CompanyDashboard.css';

const CompanyDashboard = () => {
  const [companies, setCompanies] = useState([
    // Static list of companies
    {
      id: 1,
      companyName: 'Tech Innovators',
      companyLogo: 'https://via.placeholder.com/80',
      roles: 'Software Engineer',
      vacancies: 5,
      jobSeekersApplied: 10,
      datePosted: '2024-08-01',
    },
    {
      id: 2,
      companyName: 'Creative Solutions',
      companyLogo: 'https://via.placeholder.com/80',
      roles: 'Product Designer',
      vacancies: 3,
      jobSeekersApplied: 7,
      datePosted: '2024-07-25',
    },
    {
      id: 3,
      companyName: 'Finance Pros',
      companyLogo: 'https://via.placeholder.com/80',
      roles: 'Financial Analyst',
      vacancies: 2,
      jobSeekersApplied: 5,
      datePosted: '2024-08-05',
    },
    {
      id: 4,
      companyName: 'Health Tech',
      companyLogo: 'https://via.placeholder.com/80',
      roles: 'Healthcare Specialist',
      vacancies: 4,
      jobSeekersApplied: 12,
      datePosted: '2024-07-30',
    },
    {
      id: 5,
      companyName: 'EduTech Experts',
      companyLogo: 'https://via.placeholder.com/80',
      roles: 'Educational Consultant',
      vacancies: 6,
      jobSeekersApplied: 15,
      datePosted: '2024-08-10',
    },
    {
      id: 6,
      companyName: 'Marketing Wizards',
      companyLogo: 'https://via.placeholder.com/80',
      roles: 'Marketing Manager',
      vacancies: 2,
      jobSeekersApplied: 8,
      datePosted: '2024-07-20',
    },
    {
      id: 7,
      companyName: 'Travel Co.',
      companyLogo: 'https://via.placeholder.com/80',
      roles: 'Travel Agent',
      vacancies: 7,
      jobSeekersApplied: 20,
      datePosted: '2024-08-03',
    },
    {
      id: 8,
      companyName: 'Legal Advisors',
      companyLogo: 'https://via.placeholder.com/80',
      roles: 'Legal Advisor',
      vacancies: 3,
      jobSeekersApplied: 6,
      datePosted: '2024-08-07',
    },
    {
      id: 9,
      companyName: 'Design Studio',
      companyLogo: 'https://via.placeholder.com/80',
      roles: 'Graphic Designer',
      vacancies: 5,
      jobSeekersApplied: 9,
      datePosted: '2024-07-28',
    },
    {
      id: 10,
      companyName: 'Engineering Experts',
      companyLogo: 'https://via.placeholder.com/80',
      roles: 'Civil Engineer',
      vacancies: 4,
      jobSeekersApplied: 11,
      datePosted: '2024-08-06',
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newPost, setNewPost] = useState({
    companyName: '',
    companyLogo: '',
    roles: '',
    vacancies: 0,
    jobSeekersApplied: 0,
    datePosted: '',
  });

  const handleCreatePost = () => {
    setShowForm(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewPost({
      ...newPost,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Generate a new ID for the new post
    const newId = companies.length > 0 ? companies[companies.length - 1].id + 1 : 1;

    // Add the new post to the companies state
    setCompanies([
      ...companies,
      { ...newPost, id: newId, datePosted: new Date(newPost.datePosted).toISOString().split('T')[0] },
    ]);

    // Reset form and hide form
    setNewPost({
      companyName: '',
      companyLogo: '',
      roles: '',
      vacancies: 0,
      jobSeekersApplied: 0,
      datePosted: '',
    });
    setShowForm(false);
  };

  const handleDeletePost = (id) => {
    // Filter out the post with the given id
    setCompanies(companies.filter(company => company.id !== id));
  };

  return (
    <div className="company-dashboard">
      <h1 className="dashboard-title">Company Dashboard</h1>
      <button className="create-post-button" onClick={handleCreatePost}>Create Post</button>
      {showForm && (
        <form className="create-post-form" onSubmit={handleFormSubmit}>
          <h2>Create New Post</h2>
          <label>
            Company Name:
            <input
              type="text"
              name="companyName"
              value={newPost.companyName}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Company Logo URL:
            <input
              type="text"
              name="companyLogo"
              value={newPost.companyLogo}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Roles:
            <input
              type="text"
              name="roles"
              value={newPost.roles}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Vacancies:
            <input
              type="number"
              name="vacancies"
              value={newPost.vacancies}
              onChange={handleFormChange}
              required
            />
          </label>
          
          <label>
            Date Posted:
            <input
              type="date"
              name="datePosted"
              value={newPost.datePosted}
              onChange={handleFormChange}
              required
            />
          </label>
          <button type="submit">Submit</button>
          <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
        </form>
      )}
      <div className="company-list">
        {companies.length > 0 ? (
          companies.map(company => (
            <div key={company.id} className="company-card">
              <img src={company.companyLogo} alt={`${company.companyName} Logo`} className="company-logo" />
              <div className="company-details">
                <h2 className="company-name">{company.companyName}</h2>
                <p className="company-description">Role: {company.roles}</p>
                <p className="vacancies">Vacancies: {company.vacancies}</p>
                <p className="job-seekers">Job Seekers Applied: {company.jobSeekersApplied}</p>
                <p className="date-posted">Date Posted: {new Date(company.datePosted).toLocaleDateString()}</p>
              </div>
              <button className="delete-post-button" onClick={() => handleDeletePost(company.id)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No companies have posted jobs yet.</p>
        )}
      </div>
    </div>
  );
};

export default CompanyDashboard;
