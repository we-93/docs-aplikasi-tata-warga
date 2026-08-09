import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
            style={{ width: '100%', maxWidth: '400px' }}>
            Mulai Tutorial 👉
          </Link>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', maxWidth: '400px', width: '100%' }}>
            <input 
              type="text" 
              placeholder="Cari panduan... (Ctrl+K)" 
              onClick={(e) => {
                e.preventDefault();
                // Docusaurus uses a button with class .DocSearch-Button or .navbar__search
                const searchButton = document.querySelector('.navbar__search .DocSearch-Button, .navbar__search button');
                if (searchButton) searchButton.click();
                else {
                   // Fallback dispatch Ctrl+K
                   document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }));
                }
              }}
              style={{
                width: '100%',
                padding: '14px 20px',
                borderRadius: '8px',
                border: '1px solid var(--ifm-color-emphasis-300)',
                backgroundColor: 'var(--ifm-background-surface-color)',
                color: 'var(--ifm-font-color-base)',
                fontSize: '1rem',
                outline: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
              readOnly
            />
            <svg 
              style={{ position: 'absolute', right: '16px', color: 'var(--ifm-color-emphasis-600)', pointerEvents: 'none' }} 
              width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
