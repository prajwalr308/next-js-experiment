import React from 'react'
import articleStyles from '../styles/article.module.css'
import ArticleItems from './ArticleItems'



const Article = ({articles}:any) => {
    return (
        <div className={articleStyles.grid}>
            {articles.map((article:any) => (
                <ArticleItems key={article.id} article={article} />
            ))}
            
        </div>
    )
}

export default Article
