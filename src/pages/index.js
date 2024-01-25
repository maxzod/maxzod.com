import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './index.module.css';
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.headerContent}>
          {/* <img
            className={styles.roundedImage}
            src="img/my_profile_pic.png"
            alt="Your Alt Text"
          /> */}
          <div className={styles.textContent}>
            <Heading as="h1" className="hero__title">
              اهلا، انا احمد
            </Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/blog">
                المقالات 📚
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


export default function Home() {
  return (
    <Layout
      title={`ahmed masoud - احمد مسعود`}
    >
      <HomepageHeader />

    </Layout>
  );
}
