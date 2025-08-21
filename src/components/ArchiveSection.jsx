export default ArchiveSection;

import styles from './ArchiveSection.module.css';
import React, { useState, useEffect } from 'react';
import { words } from '../words';

function ArchiveSection() {
  const [search, setSearch] = useState('');
  const [saved, setSaved] = useState(() => {
    const stored = localStorage.getItem('bookmarkedWords');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('bookmarkedWords', JSON.stringify(saved));
  }, [saved]);

  const filtered = words.filter(w =>
    w.word.toLowerCase().includes(search.toLowerCase()) ||
    w.definition.toLowerCase().includes(search.toLowerCase())
  );

  const toggleSave = (word) => {
    setSaved(s => {
      if (s.includes(word)) {
        return s.filter(w => w !== word);
      } else {
        return [...s, word];
      }
    });
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row mb-4">
          <div className="col text-center">
            <h2 className="fw-bold mb-3 font-serif" style={{fontFamily: 'Playfair Display, serif'}}>Explore the Archive</h2>
            <p className="text-secondary">Browse all previously featured words.</p>
          </div>
        </div>
        <div className="row mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <input
              type="text"
              className={`form-control form-control-lg shadow-sm ${styles.searchBar}`}
              placeholder="Search words or definitions..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="row g-4">
          {filtered.map((w, i) => (
            <div className="col-12 col-md-6 col-lg-4" key={i}>
              <div className={`card h-100 shadow-sm border-0 p-3 position-relative ${styles.card}`}>
                <h5 className="fw-bold mb-1">{w.word}</h5>
                <div className="fst-italic text-success mb-2">{w.pos}</div>
                <p className="mb-2">{w.definition}</p>
                <button
                  className={`btn btn-sm ${styles.saveBtn} ${saved.includes(w.word) ? 'btn-warning' : 'btn-outline-warning'}`}
                  onClick={() => toggleSave(w.word)}
                  title={saved.includes(w.word) ? 'Unsave' : 'Save'}
                >
                  <i className={`bi ${saved.includes(w.word) ? 'bi-star-fill' : 'bi-star'}`}></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




