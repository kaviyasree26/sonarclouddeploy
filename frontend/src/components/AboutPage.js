import React from 'react';
import '../About.css'; // Assuming you have a CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
        <div className="image-text-container">
          <div className="text-content">
            <p>
              Welcome to [Your Job Portal Name], your one-stop destination for all your career aspirations.
              We understand that finding the right job can be challenging, whether you're a fresh graduate 
              stepping into the professional world or an experienced professional seeking new opportunities. 
              That's why we've created a platform that connects job seekers with their dream jobs and companies 
              with the right talent.
            </p>
          </div>
          <img 
            src="https://img.freepik.com/free-photo/rag-doll-lined-up-one-red-through-magnifying-glass_1156-638.jpg?ga=GA1.1.1815051509.1721971629&semt=ais_hybrid" 
            alt="Job Search Banner" 
            className="banner-image"
          />
        </div>
      </header>
      
      <section className="about-content">
        <div className="image-text-container reverse">
          <img 
            src="https://img.freepik.com/free-vector/pensive-businessman-making-decision_74855-5283.jpg?ga=GA1.1.1815051509.1721971629&semt=ais_hybrid" 
            alt="Job Search Process" 
            className="about-image"
          />
          <div className="text-content">
            <h2>Why Choose Us?</h2>
            <ul>
              <li>Extensive Job Listings: With thousands of job listings updated daily, you have access to the latest opportunities from top companies across the globe.</li>
              <li>User-Friendly Interface: Our platform is designed to be intuitive and easy to navigate, ensuring that you can find and apply for jobs with just a few clicks.</li>
              <li>Customized Job Alerts: Stay ahead of the competition with personalized job alerts tailored to your preferences.</li>
              <li>Career Resources: We offer a wealth of resources, including resume tips, interview advice, and career guidance to help you succeed in your job search.</li>
              <li>Trusted by Top Employers: We partner with leading companies who trust us to help them find the right talent.</li>
            </ul>
          </div>
        </div>
        
        <div className="image-text-container">
          <img 
            src="https://img.freepik.com/premium-vector/businessman-standing-arrow-with-telescope-hand-vision-business-concept-looking-future_153097-6050.jpg?ga=GA1.1.1815051509.1721971629&semt=ais_hybrid" 
            alt="Vision and Teamwork" 
            className="about-image"
          />
          <div className="text-content">
            <h2>Our Vision</h2>
            <p>
              Our vision is to empower every job seeker to achieve their career goals and every employer to find 
              the perfect match for their organization. We are committed to providing a platform that is not only 
              efficient and effective but also transparent and trustworthy.
            </p>
          </div>
        </div>
        
        <div className="join-us">
          <h2>Join Us</h2>
          <p>
            Whether you're looking for your next job or the next great hire, [Your Job Portal Name] is here to help 
            you every step of the way. Join us today and take the first step toward a brighter future.
          </p>
          <a href="/signup" className="join-us-button">Join Us</a>
        </div>
      </section>
    </div>
  );
};

export default About;
