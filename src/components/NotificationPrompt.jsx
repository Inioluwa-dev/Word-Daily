import React from 'react';
import styles from "./NotificationPrompt.module.css";

// NotificationPrompt: clean, all styling in CSS module, fully responsive
export default function NotificationPrompt({ onEnable, onClose }) {
  return (
    <div className={styles.prompt}>
      <span className={styles.bell}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <g>
            <ellipse cx="12" cy="20.5" rx="3.5" ry="1.5" fill="#fff8" />
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
        </svg>
      </span>
      <span className={styles.text}>
        <span><strong>Never miss your daily word!</strong><br /></span>
        <span>Enable notifications for a smarter vocabulary journey.</span>
      </span>
      <button className={styles.enableBtn} onClick={onEnable}>
        Enable
      </button>
      <button className={styles.closeBtn} onClick={onClose} aria-label="Close notification prompt">×</button>
    </div>
  );
}
