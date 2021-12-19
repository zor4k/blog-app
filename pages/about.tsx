import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Posts from '../components/Posts';
import styles from '../styles/about.module.css';

const About: NextPage = () => {
  return (
    <div className={styles.container}>
        <h1>Hello world </h1>
        <p>Blah blah </p>
    </div>
  )
}

export default About;
