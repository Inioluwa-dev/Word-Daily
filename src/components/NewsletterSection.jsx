

import styles from './NewsletterSection.module.css';
import React, { useState } from 'react';


function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  function validateEmail(email) {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setError("");
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    try {
      const response = await fetch("https://formspree.io/f/mblkvbrk", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });
      const data = await response.json();
      if (response.ok) {
        setStatus("Thank you! You are now subscribed.");
        setEmail("");
      } else if (data && data.errors && data.errors.length > 0) {
        setError(data.errors[0].message);
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    }
  };

  return (
    <section id="newsletter" className={styles.section}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className={`card shadow border-0 ${styles.card} text-center`}>
              <h3 className="fw-bold mb-3 font-serif" style={{fontFamily: 'Playfair Display, serif'}}>Never miss a new word</h3>
              <p className="mb-4 text-secondary">Get it delivered straight to your inbox.</p>
              <form onSubmit={handleSubmit} className="d-flex flex-column flex-sm-row gap-2 justify-content-center" noValidate>
                <input
                  type="email"
                  name="email"
                  className={`form-control form-control-lg ${styles.input}`}
                  placeholder="Your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className={`btn btn-success btn-lg px-4 ${styles.subscribeBtn}`}>Subscribe</button>
              </form>
              {error && <div className="text-danger mt-2">{error}</div>}
              {status && <div className="text-success mt-2">{status}</div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;


