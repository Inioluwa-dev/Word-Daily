
// TodayWordPage displays the current day's word, streak counter, and a button to explore more words.
import React from 'react';
import StreakCounter from './StreakCounter';
import WordCard from './WordCard';

// streak: number of learned words in a row
// entry: today's word object
// onBookmarked: callback for bookmarking
// onArchive: callback to navigate to archive
function TodayWordPage({ streak, entry, onBookmarked, onArchive }) {
  return (
    <main className="flex-grow-1 d-flex align-items-center justify-content-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <StreakCounter streak={streak} />
            <WordCard entry={entry} onBookmarked={onBookmarked} />
            <div className="text-center mt-4">
              <button className="btn btn-outline-secondary rounded-pill px-4" onClick={onArchive}>
                Discover More Words
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TodayWordPage;
