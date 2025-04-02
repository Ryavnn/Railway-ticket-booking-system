import Navbar from "../components/Navbar";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
        <Navbar />
      <header className="about-header">
        <h1>About GREENLine</h1>
        <p>Connecting People, Destinations, and Experiences</p>
      </header>

      <section className="our-story">
        <div className="section-content">
          <h2>Our Story</h2>
          <p>
            Founded in 2025, RailConnect began with a simple mission: to
            revolutionize railway travel by making ticket booking seamless,
            convenient, and user-friendly. What started as a small startup in a
            modest office has now grown into a leading railway booking platform
            serving millions of passengers across the country.
          </p>
        </div>
      </section>

      <section className="our-mission">
        <div className="section-content">
          <h2>Our Mission</h2>
          <div className="mission-points">
            <div className="mission-point">
              <div className="icon">🚉</div>
              <h3>Accessibility</h3>
              <p>
                Providing easy and instant railway ticket booking for everyone.
              </p>
            </div>
            <div className="mission-point">
              <div className="icon">🌐</div>
              <h3>Connectivity</h3>
              <p>
                Connecting cities, towns, and people through reliable
                transportation.
              </p>
            </div>
            <div className="mission-point">
              <div className="icon">💡</div>
              <h3>Innovation</h3>
              <p>
                Continuously improving our technology to enhance user
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="our-team">
        <div className="section-content">
          <h2>Our Leadership</h2>
          <div className="team-members">
            <div className="team-member">
              <img
                src="/api/placeholder/200/200"
                alt="CEO"
                className="team-member-photo"
              />
              <h3>Patrick Njuguna</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img
                src="/api/placeholder/200/200"
                alt="CTO"
                className="team-member-photo"
              />
              <h3>Ryan Njoroge</h3>
              <p>Chief Technology Officer</p>
            </div>
            <div className="team-member">
              <img
                src="/api/placeholder/200/200"
                alt="COO"
                className="team-member-photo"
              />
              <h3>Derrick Silla</h3>
              <p>Chief Operations Officer</p>
            </div>
          </div>
        </div>
      </section>

      <section className="our-values">
        <div className="section-content">
          <h2>Our Core Values</h2>
          <ul>
            <li>Customer-First Approach</li>
            <li>Transparency and Trust</li>
            <li>Continuous Improvement</li>
            <li>Sustainability</li>
            <li>Inclusive Service</li>
          </ul>
        </div>
      </section>

      <section className="contact-cta">
        <div className="section-content">
          <h2>Get in Touch</h2>
          <p>
            Have questions or suggestions? We'd love to hear from you. Reach out
            to our customer support team anytime.
          </p>
          <button className="contact-button">Contact Us</button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
