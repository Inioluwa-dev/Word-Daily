// FooterSection displays social links and copyright info.
import styles from './FooterSection.module.css';

function FooterSection() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            {/* Social icons: update hrefs as needed */}
            <a href="https://x.com/Inioluwa_dev" className={styles.socialIcon} title="Twitter" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter-x"></i></a>
            <a href="https://github.com/Inioluwa-dev/Word-Daily" className={styles.socialIcon} title="GitHub" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
            <a href="https://www.instagram.com/inioluwa_dev/" className={styles.socialIcon} title="Instagram" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
            {/* Add more socials as needed */}
            <div className={styles.copyright}>© 2025 Mr Heritage.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
