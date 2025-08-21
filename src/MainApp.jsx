import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { words } from './words';
import Navbar from './components/Navbar';
import ArchiveSection from './components/ArchiveSection';
import FooterSection from './components/FooterSection';
import BookmarkPage from './components/BookmarkPage';
import HomePage from './components/HomePage';
import TodayWordPage from './components/TodayWordPage';
import { requestWordDailyNotification } from './notification';

// IMPORTANT: The daily word index and entry are computed here.
// The same 'entry' is used for both the UI and the notification,
// ensuring that the word shown and the word notified are always identical.


function getDayIndex() {
  const now = new Date();
  const start = new Date(Date.UTC(2024, 0, 1, 0, 0, 0));
  const diffMs = now.getTime() - start.getTime();
  const diffDays = Math.floor(diffMs / 86400000); // ms in a day
  return diffDays;
}

function getLearnedStreak() {
  let learned = JSON.parse(localStorage.getItem('learnedWords') || '[]');
  return learned.length;
}

function addBookmark(word) {
  let bookmarks = JSON.parse(localStorage.getItem('bookmarkedWords') || '[]');
  if (!bookmarks.includes(word)) {
    bookmarks.push(word);
    localStorage.setItem('bookmarkedWords', JSON.stringify(bookmarks));
  }
}

function MainApp() {
  const navigate = useNavigate();
  const [streak, setStreak] = React.useState(getLearnedStreak());
  // Compute today's word index and entry ONCE per render
  const index = ((getDayIndex() % words.length) + words.length) % words.length;
  const entry = words[index];

  // Notification logic
  // Send notification for today's word (same as displayed)
  React.useEffect(() => {
    requestWordDailyNotification(entry);
  }, [entry]);

  const handleBookmarked = (word) => {
    addBookmark(word);
    setStreak(getLearnedStreak());
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-gradient">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomePage onGetWord={() => navigate('/word')} />}
        />
        <Route
          path="/word"
          element={<TodayWordPage streak={streak} entry={entry} onBookmarked={handleBookmarked} onArchive={() => navigate('/archive')} />}
        />
        <Route path="/archive" element={<ArchiveSection />} />
        <Route path="/bookmark" element={<BookmarkPage />} />
        <Route path="*" element={<main className="flex-grow-1 d-flex align-items-center justify-content-center"><h2>404 - Page Not Found</h2></main>} />
      </Routes>
      <FooterSection />
    </div>
  );
}

export default MainApp;