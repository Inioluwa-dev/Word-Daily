// HeroSection is the main landing section with call-to-action buttons.
import styles from './HeroSection.module.css';
import dictionaryImg from '../assets/dictionary.jpg';

// onGetWord: callback to scroll to or show today's word
function HeroSection({ onGetWord }) {
  return (
    <section className={styles.hero}>
      <div className="container h-100 d-flex align-items-center">
        <div className="row align-items-center flex-column-reverse flex-lg-row w-100">
          <div className="col-lg-6 text-center text-lg-start d-flex flex-column justify-content-center">
            <h1 className={styles.headline}>
              Expand Your Vocabulary,<br />
              <span>One Word at a Time.</span>
            </h1>
            <p className="lead mb-3" style={{ color: '#e0e6ed', fontWeight: 500, fontSize: 22 }}>
              Learn a new word every day and grow your communication skills effortlessly.
            </p>
            <p className="mb-4" style={{ color: '#b6c3d1', fontSize: 18 }}>
              Unlock the power of words with daily inspiration, streak tracking, and a rich archive. Perfect for students, professionals, and lifelong learners.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start mb-3">
              <button
                className={styles.ctaBtn}
                onClick={onGetWord}
              >
                Get Today’s Word
              </button>
              <button
                className={styles.ctaBtn}
                style={{background:'#fff', color:'#1A73E8', border:'2px solid #1A73E8'}}
                onClick={() => {
                  const el = document.getElementById('newsletter');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Subscribe
              </button>
            </div>
            <ul className={`list-unstyled d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mt-2 ${styles.featureList}`} style={{fontSize:16, color:'#e0e6ed'}}>
              <li><i className="bi bi-star-fill text-warning me-1"></i>Bookmark favorites</li>
              <li><i className="bi bi-fire text-danger me-1"></i>Track your streak</li>
              <li><i className="bi bi-archive me-1"></i>Explore the archive</li>
            </ul>
          </div>
          <div className="col-lg-6 mb-4 mb-lg-0 text-center d-flex align-items-center justify-content-center">
            <img
              src={dictionaryImg}
              alt="Dictionary Illustration"
              className={styles.illustration + " img-fluid"}
              style={{maxHeight: 400, objectFit: 'cover', borderRadius: 24}}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
