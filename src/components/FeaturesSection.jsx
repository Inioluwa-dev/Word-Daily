// FeaturesSection lists the main benefits/features of the app.
import styles from './FeaturesSection.module.css';
import React from 'react';

const features = [
  { icon: 'bi-book', title: 'Daily Vocabulary Boost', desc: 'Expand your word bank with a new word every day.' },
  { icon: 'bi-bullseye', title: 'Simple, Focused Learning', desc: 'No distractions—just one word, well explained.' },
  { icon: 'bi-phone', title: 'Responsive on All Devices', desc: 'Looks great on desktop, tablet, and mobile.' },
  { icon: 'bi-bell', title: 'Optional Daily Reminders', desc: 'Never miss a word with gentle notifications.' },
];

function FeaturesSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row mb-4">
          <div className="col text-center">
            <h2 className={styles.title}>Why Use Word Daily?</h2>
            <p className="text-secondary">A simple, effective way to build your vocabulary and confidence.</p>
          </div>
        </div>
        <div className="row g-4">
          {features.map((f, i) => (
            <div className="col-12 col-md-6 col-lg-3" key={i}>
              <div className={`card h-100 shadow-sm border-0 ${styles.card}`}>
                <div className={styles.icon}>
                  <i className={`bi ${f.icon}`}></i>
                </div>
                <h5 className="fw-bold mb-2">{f.title}</h5>
                <p className="text-muted mb-0">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
