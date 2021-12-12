import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { FC } from 'react'

interface Props {
  Component : FC;
  pageProps: object;
}


const Home: NextPage<Props> = (  { Component, pageProps} : { Component: object, pageProps: object})=>{


  return (
    <div className={styles.container}>
      <Layout>

      </Layout>

    </div> 
  )
}

export default Home
