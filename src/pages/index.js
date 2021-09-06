import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <img className={styles.heroImg} src="/img/logo.png" />
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/manual/getting-started">Get Started</Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Atek - a personal cloud for the Web 3.0"
      description={siteConfig.description}>
      <HomepageHeader />
      <main>
        <div class={styles.notice}>
          <div>
            <p>
              Hi everybody! <Link to="https://twitter.com/pfrazee">Paul Frazee</Link> here.
              Atek is still a work in progress. I created this website to help get contributors onboarded.
            </p>
            <p>
              Check out the <Link to="/blog/hello-world">introductory blogpost</Link> to learn more about what Atek is about.
              We have a <Link to="https://discord.com/channels/883086455092674602/883086456464224356">Discord channel</Link> and a <Link to="https://github.com/atek-cloud/atek/discussions">GitHub discussion board</Link> where you can get involved.
            </p>
          </div>
        </div>
        <div className={styles.explanation}>
          <div>
            <h2>What is Atek?</h2>
            Atek is a personal cloud for small home servers like <Link to="https://www.raspberrypi.org/">Raspberry Pis</Link>.
            It uses peer-to-peer tech to connect your devices and other home servers so you can share posts,
            photos, chats, and applications with the privacy and control you want.
          </div>
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
