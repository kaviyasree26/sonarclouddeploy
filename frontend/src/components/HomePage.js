import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../home.css'; // Import your CSS file for styling

const Homepage = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate('/signup');
  };

  const handleReadMoreClick = (page) => {
    navigate(`/${page}`);
  };

  return (
    // <div className="homepage">
    //   {/* Call to Action Section */}
    //   <section className="call-to-action">
    //     <h2>Ready to Dive into JobXplore?</h2>
    //     <p>Sign up today and start exploring exciting job opportunities tailored to your career goals.</p>
    //     <a href="/signup" className="cta-button">Get Started</a>
    //   </section>
    <div className="homepage">
    {/* Hero Section */}
    <section className="hero">
      <div className="hero-content">
        <h1>Discover Your Perfect Job</h1>
        <p>Sign up today and start exploring exciting job opportunities tailored to your career goals.</p>
        <a href="/signup" className="cta-button">Get Started</a>
      </div>
    </section>
     {/* Featured Jobs Section */}
     <section className="featured-jobs">
        <h2>Hot Job Listings</h2>
        <div className="job-li">
          <div className="job-ca">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4wHM_i5R2Oi1CC2U1cPJ5I5xCAqG-39VgDg&s" alt="Company 1" className="company-logo" />
            <div className="job-det">
              <h3>Data Analyst</h3>
              <p>Innovate solutions</p>
              <p className="location">San Francisco, CA</p>
              <button onClick={handleApplyClick}>Apply Now</button>
            </div>
          </div>
          <div className="job-ca">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Inbm8J861JZw4DYvNGFfWzifFEBVmP-IpQ&s" alt="Company 2" className="company-logo" />
            <div className="job-det">
              <h3>UI/UX designer</h3>
              <p>Creative Mind</p>
              <p className="location">New York, NY</p>
              <button onClick={handleApplyClick}>Apply Now</button>
            </div>
          </div>
          <div className="job-ca">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABJlBMVEX///////0BlOL//v8AGFS02PL///z9//8AGFMAADwAGFYAAEAAAD4BlOEAGVIAGVUAAEIAE1MAAEgAADkAAEsAADYAAC4Ak+UAADOSk50AAEyNj54ACE4AF1cAAETu8PMAhM7j9P0AACzZ9/3y+fzY3eIAClE1N1sAjNwAEFK62e4zlNP1+P3V1+Hl6O2Zm6jt//8hKVchKVBESmm/wMoAD0tLTnBrboaZ0Okuir1krdfI6/WMx+VSpNWz3++prLtBR1x2t9wIGEAPjdF2epEtNF2EhpQwldFSWHE7P14OGEpucH4uMEoAf8NbY4GQmrXJ4O2Fh58LPnvExc0RVZgAAAoJMW8UbLNYXXAAABuoqrEXIkoAACOl3Pp9wNtitOSDyPM3P2ioTN88AAAPRElEQVR4nO1bC3vaSHeeQYpGDFggAQaDBL5gGyUgfAGTxtmwToiNnd10Xdqvqf3t9sv//xM954zExabbPm1kb/LM6wQwSGJenXfObcaMaWhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGisBX/uAaQKzjkTgosd8dwjSQkGMmRcvP6n9nMPJTUIwayjN51XP6oNBWeWOL/qVF+JH5UiGPD1djWTeSV+QH9jCHQ0e2861cxGdUmlMDNxcn7/LpYDRc7OrzKAFYbxx98/QS4sS7wFhW4sM1TGo8fvnqIQ1t5PnUymmnnAMGb23TMUlnj3AdllHjG0iJthPOfwvgH40dsOMAN2G4/mYTTe6g9azza0/w845GfgYdBQoNAqkNtAE1Yz1auEoWG1RhXPL+dKt3CwMGKtokXjl0Jgmvcs4/+fYWAkYAJGCwpV5NCKZMNk+kU1X0rHkbL5c5eLRKp8aVryv3Ak4ThkGOzRRaeqzBeL9MM7rrjw7ntX2tK0CwXpjRZUuEpg1dNf2AsJ+o8KjfkBuepGtfPTnpXYsFGXBbBgYMJDpadOISxI/ZVdEBgw9qGgTLQePXf+OALbWnSEOAydwHZsCbD9CUsm3EOrWU888v8tIAYyUqiyH/0HhTKLJy4lqgS2aZumY5rA8mPCkFvGZWMJl93npLEewjDAj3Ku0jTSJwULUCjnfK7BXglmoSNNgCyYx/N8nItK2V9gswt6AJeKHyvRCvhBh2tALog+mFFpjR9ydX2OA0BPDs9WCq4YXQzYSbyOfWiGhJqpbr9t4yhxVHRcVAocaZsE6X6cM7dEKTRdNzDBA7muW2qjddHuFo6dWFAQUidwofwRUuHqIPoGYg1IwxfD1wuLQ6lLzjPRKCjUwkEwkYQFmIdmAgfmYTLfLPH+GCAd28TnYhctCId3Ua5kLWRIvyqOPDY/GY3RpxRVk8rlm0OgL4FSN5MAiKIPhQLDarfhJiehveFJO7FhqbcI8/TcyppBdp8GjsePpyfNm+vLiHESbDT5WLw5HbBPp6fXW3DwL/C8H306vD8c9UCuvdHJ/eFkH74rtWCz9ytkMdU5R1Ao6BYE1H25AwTiqdG+d2OGsj6aB3q0MEcNO7K0D+JDxtEv+XDouuHB7hhHzQa7vivdsHT72QvLl8BwNwyL/1zyQ9f1N/usUQtdOfQ3x2x+N78pQDTW3vZGrE58QIXCu6Cb9osXv7W5ylQ475VgoGZBBt5p11pU/vRxlJXAEBlbvHVzIGXYLJtOULuDt3oVSBMk0rFt+4AYBgVZhkkLccfOT3JuGJp2IHd7LBWGaI297cwC6ENxAoE1gOGLl+2EIYu+5L16uZi/fBzZo6xplpRK2SdPyuJo3Dh2TbfY4uw0dEx3OJ3ehFKaMUNZcIenZ7ZbgHsRDs/OskOz4I/SoLfCkNK07bdH5EQShi9QqUgYU9f98e3tIFpzkSWGUU4WcmN879gteH0W1aTjHsNn0UkYM9yErOEeLhPdu6ZNn+2fDKV73OWpNIWWbIhR/hzmEviHBUNUKqhWiHn+Yqzm26sM2SBvux/J89+GTjhlY8+2Sz0sXPbzc4amN8aLDJpg7gFed1x0Cput1BlWMz8dETuMwQuGYEYMDnFUAx/0pwz7niPd2ubu5qYXyPAj2/Kl+56R0712E4Z2jjJbPK1GmuhlTacSpeNKl+fhG6GCkrViQ6VUxYqvT6+XGDbqjuPmisViLp8vZo9Zw3fcQ0axfBoz3JV2vofOOspLGxly1stJWYt4GuUlFb3bJNHtf8n3VY7DVYyYM0SlxtUEX9shXrFhIfw6SDBjfd+URVV/niwzpCCTC2Rsw7xZQIYpWBGTDmXDXwuubE5bYCsDLWisMCSlisfyfMxwlpXuPS12RIAWG+SCAs46C16Z0ieVOk6WcoaILIf3rZdDvfJUKmgQBsbDjX+t26a0w5sZZVYPbYhmFJZqR60xIsTDxJd278GFjiBJm+zWSv82YN1NCIy5cas1zkNVohiaNjJkCUO4IDLEeZiKSoUBNtz+WwiFUWDbbq5BaSJyXGVISk3qhocMYfRJPOxnHdPPTu/rZmF4DaabeLYjvVLNcwPHVgxtM2aYl4lKc2pGpgBB8/Df3SEURrZjOrbr/Qz5pLHiaRZK5etvM6h0zpCNcgGUH5D/HLyHK/H2oQ+ZEAS+m4+BQwx3bTtWaZ58qYHz0LZr6fhSzPV3/lZ2JBZ/kFbZ0m6+H6iPxM7LBxx/E8h9DcPNen13n8Udm8u854dhufRzRPZunRbLoV/Oz754dQ8Z/ke9vqkYwml/V/Owgq/SiYdok1klhNsMLG3HcaCSz17S+gxn7UcUqf5j4kGl09rq97ei2E9YLLobfR41esk9ZLPJ51G/xe76/f5MHdyI5qdR/zWav0oJrWkTylsQKTgbsKbZ/Ep3FgrV3x4pVRWxK2L98zsf34zk6XFATRz02in+jSBEPwfFUcGB8hb1KodNUiqMZp1S2Ro18Qc9qPlo8cXS2DmtoC83IymZoE5KKtzm3zu794EhmhFcHlQz+YmghgRrPzJjGzvky8NR2xoeXnJ1wIJO4oZa9njylWV0H63PuSCQpuNASYNm9K73GXVZ1ij1QeSPm8ZL76yspOILK34nmarLWl3qKqdmRk71db+GJS4U8RDAHIj+FSoAIDauVeqfX3C166IY4OYHNvn8eXrHkmJ35ZiUdYrondTBzUinoPoxQXbUVsnwI59KhfGcCxR4jalTPJ6Cw4RwYhlJYy3JYmmiqePPyr63FZ+KDagn3SfAeXeag4BoyripJr3DXtzwe6jU3+YnwU9rlC0PIZoOy9mG6uyQOXAWxw3CuKWIDEPpb82/0nja5RwcVL8Z4sqEYlgo+CcM3QLc7AdKfbl0XvQLlIISk4WCzH+hyisJmNQL5cnkwzfPXJsYokmtJ1/IwVjVO4HhxjKVNpR2STRb9akv587Q6v4yNMExVSpZ37aD3CcoQujDbrQfiZgXkmztRwba0FQ25OqIJ+XJKdB1v+SSviFU64eqYYhjXFHqnCFnl5Bah/fjbje6zIPxKz2S5mxaqVRqwwmlDvj79W5l86YBNlQqhWrqrFap1W4aT7ioDGKkBYVxziWZgu6AoUUzChdv+JJSFyrtZoOCe9iitYfx37P5yhQpTfIHoFzp+rU7mpRbldBxbNkcnQ3NcAtzolHpAKa8HdZrvSeYiUJNeco3DYvtH5YxtwFDAkMFELCxbMaYIZw0KAZ2fsZUm2OGgPcnRbhAWMc7VcNW06AUwNV8X/quxHkIt8CThTCXgynhQmG4Np//lqBvgAeDFios1h2BYcxgiSG2/4VlHV38vspQsFvPNu8FrcPEyarFelkYeHPSOPUCJzjuWuyjC/X9ye3tvR8UbLAh65VM05vOeo2m6fgjlk51v8wQbUfhy+JqrWFcCyHqFxYMacXl/Kpz9fuKSjkbhQX/M1N7AfARWY4OIHvH2qJRtJ3iGMs/GU6h8O9+CaVEhhNfhqd4gXHTtivd9GXKVfuJW4aIIxcotbCsUmFY4vV2ppr58I+HDOXBZ0y8k/IfUtkT16nfgi0tcQiOZcTGZTugRpMV5QNi+NWV5TF2ctDc2VnqBGEoljh//ccfL3aEylIgpk2ywZJKubWHS3Dw0/nP318ueZqJXwjPFokq0OKtrG3nBtQjvTyQ7im7rZsUd4TFrsnTdCGzMJvZbD7XBMdN/eF0CRow/p+2O9VOZ/viCJveaE42yIeKIbWIz69wcRh+MqjURTzsg61zXXVQfDOiom3mZhbO6cvQkV/ZpOwMr9Xa4ZmL8bBbMgPbK+Zy8C9X3Bynvo0DF7mr1Xjt8IiLuNbbP/QOVfOJo0LnK3DVD/9YMOxl7YLXYLSC3T09Ozubsu6xaTfHNOgp2PALNsLtCuSrgnePyZeKE1d6455CtN9Kn+HOVZU20Gxga3/hucXkvVqJpt2myytUb+IT4ec6LLhZXIsBguWDA2DLTuGtQ1wF7hVt6fUhopgOvg/1S1FSxJ+GuKMDMMPGsRCpJ+AXnY1qssrdeZdseYLQOKPZRApd8ENDJwWeYLOSWZDF0/7d7Y0f2O5N2wIHKR3/dLYPuYMp8xFMO0gg8pNe7zJnOgEyHBdNszQ2xCDnec3r9KPF0VVmSYMX851elLEZR6/jrW7xXobqh9eJjqn6aeRxCdTz6pB6D0sD0Jtx6DqFsJmHcCibl3BYowmB0c8X/RAcC0X8wxBczf1xMVAbkNLoBS9jZzvZRoM6vZobiApz2m1Ku6TiO3B1vijrODYI+pCS4Y4wx/bzA7JH9B7oBhIy8uIX8FKG+NmTTmAHw49fydPAEfdlqtOkm+9TLpWuEc9xw2Uiw+qrI1WuCoqM5x9oN21VbefbqHbeHLEV5w4utDet5MvNcr4yUS1FA0rGSrPsl7M0QTGt/VTzfD9/Ep0WvWwDz2mNNpu+X8+dzOISMlWGO0t+ZCNzlWyixCwHd5sSPbQv3AVQ6LqxtAZ3/btZd7Gjj0V3/a3+LKmA8fetPsRIdCy9eNl8vLXV76UeCglHrxaOZKP6Zj4qtds02WWDNrw6XycnbsUF7/xDw4r3w8XrxvNYSd1DK95Bs3JKugBLJRyr2+ecWhFgwGS3abLVrXNxtG4BUa0sWqvLp7i1y5h3UWlGqwcSSHwZfExnB8YD8CMVD1WoE5aagUqhyv3QVEQfKtaW5LS7iy3WcFVzLc7G6Y04NadZahhsnsM+kQ2FdR7vXsdQp/bPcfCw1WSjDWU7V3vU6F/T71aDnb+MdzPMKTHVVxMxb7bcEX+infEQ3mDGdarVzoc/MC9VjZWdeC9YlfahdC7aTzNjUgHHpd3z1xcX7/ZUm3uZIZhvA/dDi9QTjxSBmz9p/hNVLlYYkgFpt+n3S5D+0gmNJ+IZqLx8YkMQ79s2pz7VdwthqOiArtyivBspK4Yg0e13aqPQd8yQIGhhMN5PGat0g7zrHlc7eZ97hN8SXDFEJ7r99ogb3/MU/O9AKoWC6cM5/rXeX/pvKf6PIIYY/2mW/rA23IY0zUjWCH80IMNfz4VBjvVHFCmAt3fUrhrjR7SghoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhsZz4L8A3chvJ0vu8I4AAAAASUVORK5CYII=" alt="Company 2" className="company-logo" />
            <div className="job-det">
              <h3>UI/UX designer</h3>
              <p>TeamCode</p>
              <p className="location">New York, NY</p>
              <button onClick={handleApplyClick}>Apply Now</button>
            </div>
          </div>
          <div className="job-ca">
            <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30162618/1533.png" alt="Company 3" className="company-logo" />
            <div className="job-det">
              <h3> Developer</h3>
              <p>Tech Corp</p>
              <p className="location">Austin, TX</p>
              <button onClick={handleApplyClick}>Apply Now</button>
            </div>
          </div>
        </div>
      </section>


      {/* Career Advice Section */}
      <section className="career-advice">
        <h2>Career Advice & Tips</h2>
        <div className="advice-list">
          <div className="advice-card">
            <img src="https://img.freepik.com/free-vector/job-interview-conversation_74855-7566.jpg?ga=GA1.1.1815051509.1721971629&semt=ais_hybrid" alt="Career Advice 1" className="advice-image" />
            <h3>How to Ace Your Interview</h3>
            <p>Get expert tips on how to prepare for and succeed in your job interviews.</p>
            <a href="https://www.ef.com/wwen/blog/language/11-tips-how-to-ace-a-job-interview/" className="read-more" target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
          <div className="advice-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAAaRovP3Fg44g9dbc8CHB8zGkedLVSEwBSA&s" alt="Career Advice 2" className="advice-image" />
            <h3>Building a Standout Resume</h3>
            <p>Learn the best practices for crafting a resume that gets noticed by employers.</p>
            <a href="https://enhancv.com/blog/how-to-make-your-resume-stand-out/" className="read-more" target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
          <div className="advice-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeCAOu_ahNYpfH4MtWjK_mPwxEpaAKPt0kAA&s" alt="Career Advice 3" className="advice-image" />
            <h3>Networking Strategies for Success</h3>
            <p>Discover effective networking strategies to expand your professional connections and advance your career.</p>
            <a href="https://blog.hubspot.com/marketing/the-ultimate-guide-to-non_awkward-effective-networking" className="read-more" target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
          {/* Add more advice cards as needed */}
          </div>
              {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Success Stories</h2>
        <div className="testimonial-list">
          <div className="testimonial-card">
            <p>"I found the perfect job through this platform! The process was smooth and straightforward."</p>
            <span>- Sarah Lee</span>
          </div>
          <div className="testimonial-card">
            <p>"A great resource for job seekers. The job recommendations were spot on and helped me land a great role."</p>
            <span>- Michael Brown</span>
          </div>
        </div>
      </section>

       
      </section>
    </div>
  );
};

export default Homepage;




