import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Article from '../components/Article'
import styles from '../styles/Layout.module.css'

const Home: NextPage = ({articles}:Array<object> | any) => {
  console.log(articles)
  return (
    <div className={styles.container}>
      <Head>
        <title>next js </title>
        <meta name='keywords' content='next js' />
        
      </Head>
 
      <Article articles={articles} />

    </div>
  )
}
export const getStaticProps =async()=>{
  const res=await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()
  return{
    props:{
      articles
    }
  }
  
  }

export default Home

  