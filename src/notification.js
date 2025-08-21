// notification.js

// Handles browser notification logic for Word Daily
// The 'entry' parameter is always the same word as displayed in the UI (see MainApp.jsx)
// This guarantees the notification and the displayed word are always in sync.

import dictionaryImg from './assets/dictionary.jpg';

export function requestWordDailyNotification(entry) {
  if (!('Notification' in window)) return;

  // Only prompt if not already granted/denied
  if (Notification.permission === 'default') {
    setTimeout(() => {
      Notification.requestPermission();
    }, 2000);
  }

  // If allowed, show today's word once per day
  if (Notification.permission === 'granted') {
    const lastNotified = localStorage.getItem('lastWordNotification');
    const today = new Date().toISOString().slice(0, 10);
    if (lastNotified !== today) {
      new Notification('Word Daily', {
        body: `${entry.word}: ${entry.definition}`,
        icon: dictionaryImg,
      });
      localStorage.setItem('lastWordNotification', today);
    }
  }
}
