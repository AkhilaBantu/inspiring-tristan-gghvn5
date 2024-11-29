import React from "react";
import ".css"; // Include your custom styles

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">A M R U T A M</div>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Find Doctors</a>
          <a href="#">About Us</a>
        </nav>
        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign-up</button>
        </div>
      </header>

      <div className="search-section">
        <h2>Find Expert Doctors For An In-Clinic Session Here</h2>
        <div className="filters">
          <input type="text" placeholder="Select Location" />
          <input
            type="text"
            placeholder="Dr., doctor, specialization, clinic, name"
          />
          <button>Search</button>
        </div>
        <div className="filter-tags">
          <button>Expertise</button>
          <button>Gender</button>
          <button>Fees</button>
          <button>Languages</button>
          <button>All Filters</button>
        </div>
        <div className="active-filters">
          <span>Hair care</span>
          <span>Female</span>
          <span>Rs.0-Rs.500</span>
          <span>Hindi</span>
        </div>
      </div>

      {/* Doctors List Section */}
      <div className="doctor-cards">
        {Array(3)
          .fill()
          .map((_, index) => (
            <div key={index} className="doctor-card">
              <img
                className="doctor-image"
                src="https://via.placeholder.com/150"
                alt="Doctor"
              />
              <div className="doctor-info">
                <h3>Dr. Prerna Narang</h3>
                <p>Male-Female Infertility</p>
                <p>7 years of Experience</p>
                <p>Speaks: English, Hindi, Marathi</p>
                <div className="consultation-info">
                  <p>
                    Video Consultation: <strong>₹800</strong>
                  </p>
                  <p>
                    Chat Consultation: <strong>Free</strong>
                  </p>
                </div>
                <div className="card-buttons">
                  <button className="view-profile">View Profile</button>
                  <button className="book-consultation">
                    Book a Consultation
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
