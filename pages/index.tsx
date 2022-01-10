import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <head>
        <title>next js </title>
        <meta name='keywords' content='next js' />
        
      </head>
      <h1>lets start </h1>

    </div>
  )
}

export default Home
