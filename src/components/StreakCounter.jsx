

// StreakCounter displays the user's current learning streak.
import styles from './StreakCounter.module.css';
import React from 'react';

function StreakCounter({ streak }) {
  return (
    <div className={styles.streak}>
      <span className={styles.badge}>
        <i className="bi bi-fire me-2"></i>
        You’ve learned <b>{streak}</b> words in a row!
      </span>
    </div>
  );
}

export default StreakCounter;
