
import styles from './WordCard.module.css';
import React, { useRef, useState } from 'react';

function addLearnedWord(word) {
  let learned = JSON.parse(localStorage.getItem('learnedWords') || '[]');
  if (!learned.includes(word)) {
    learned.push(word);
    localStorage.setItem('learnedWords', JSON.stringify(learned));
  }
}


function WordCard({ entry, onBookmarked }) {
  const textRef = useRef();
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  if (!entry) return null;

  const wordText = `Word: ${entry.word}\nPart of Speech: ${entry.pos}\nDefinition: ${entry.definition}\nExample: ${entry.example}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(wordText);
    setCopied(true);
    addLearnedWord(entry.word);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleDownload = () => {
    const blob = new Blob([wordText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${entry.word}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    addLearnedWord(entry.word);
  };

  const handleBookmark = () => {
    if (onBookmarked) onBookmarked(entry.word);
    addLearnedWord(entry.word);
    setBookmarked(true);
    setTimeout(() => setBookmarked(false), 1500);
  };

  return (
    <div className={`card shadow-sm border-0 rounded-4 ${styles.card}`}>
      <div className="card-body text-center p-4">
        <h1 className={styles.word}>{entry.word}</h1>
        <div className={styles.pos}>{entry.pos}</div>
        <p className={styles.definition}>{entry.definition}</p>
        <p className={styles.example}>“{entry.example}”</p>
        <div className={styles.actionBtns}>
          <button className={`btn btn-outline-secondary btn-sm${copied ? ' disabled' : ''}`} onClick={handleCopy} title="Copy word info">
            <i className={`bi ${copied ? 'bi-clipboard-check' : 'bi-clipboard'}`}></i> {copied ? 'Copied!' : 'Copy'}
          </button>
          <button className="btn btn-outline-primary btn-sm" onClick={handleDownload} title="Download word info">
            <i className="bi bi-download"></i> Download
          </button>
          <button className={`btn btn-outline-warning btn-sm${bookmarked ? ' disabled' : ''}`} onClick={handleBookmark} title="Bookmark word">
            <i className={`bi ${bookmarked ? 'bi-star-fill' : 'bi-star'}`}></i> {bookmarked ? 'Bookmarked!' : 'Bookmark'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default WordCard;
