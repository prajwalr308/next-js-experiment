import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const index = ({article}:any) => {
    // const router = useRouter()
    // const {id}=router.query;
    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <Link href='/'>GO back</Link>
        </div>
    )
}

export const getStaticProps = async (context:any) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  )

  const article = await res.json()

  return {
    props: {
      article,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

  const articles = await res.json()

  const ids = articles.map((article:any) => article.id)
  const paths = ids.map((id:any) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

export default index
