
import styles from './BookmarkPage.module.css';
import React, { useState } from 'react';
import { words } from '../words';

function BookmarkPage() {
  // For demo: bookmarks are stored in local state. In real app, use localStorage or backend.
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('bookmarkedWords');
    return saved ? JSON.parse(saved) : [];
  });

  const removeBookmark = (word) => {
    const updated = bookmarks.filter(w => w !== word);
    setBookmarks(updated);
    localStorage.setItem('bookmarkedWords', JSON.stringify(updated));
  };

  const bookmarkedWords = words.filter(w => bookmarks.includes(w.word));

  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row mb-4">
          <div className="col text-center">
            <h2 className="fw-bold mb-3 font-serif" style={{fontFamily: 'Playfair Display, serif'}}>Your Bookmarked Words</h2>
            <p className="text-secondary">Words you’ve saved for later review.</p>
          </div>
        </div>
        <div className="row g-4">
          {bookmarkedWords.length === 0 && (
            <div className="col-12 text-center text-muted">No bookmarks yet.</div>
          )}
          {bookmarkedWords.map((w, i) => (
            <div className="col-12 col-md-6 col-lg-4" key={i}>
              <div className={`card h-100 shadow-sm border-0 p-3 position-relative ${styles.card}`}>
                <h5 className="fw-bold mb-1">{w.word}</h5>
                <div className="fst-italic text-success mb-2">{w.pos}</div>
                <p className="mb-2">{w.definition}</p>
                <button
                  className={`btn btn-sm btn-danger ${styles.removeBtn}`}
                  onClick={() => removeBookmark(w.word)}
                  title="Remove bookmark"
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BookmarkPage;
