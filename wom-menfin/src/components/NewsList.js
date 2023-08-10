import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem  from './NewsItem'
import Footer from './Footer'
import Navbar from './Navbar'
// const dotenv=require('dotenv').config({ path: '../../.env' })

const NewsList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=finance&apiKey=5467ee06d6ff46a0a9b861a4e4d8e215`)
            setArticles(response.data.articles)
            console.log(response)
        }

        getArticles()
    }, [])
    return (
        <div>
            <div className='pb-5'><Navbar/></div>
        <div className='pt-5' style={{ display: "flex", flexWrap: "wrap"}}>
            {articles.map(article => {
                return(
                    <NewsItem
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage} 
                    />
                )
            })}
        </div>
        <div><Footer/></div>
        </div>
    )
}

export default NewsList