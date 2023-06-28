import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'

const News = (props) => {

    const[articles, setArticles]=useState([])
    const[page,setPage ]=useState(1)
    const[totalResults,setTotalResults ]=useState(0)

    const getNews=async()=>{
    props.setProgress(20)
    const apiUrl=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=be2b80dca83446cdbd2c2edf1471245b&page=${page}`
    props.setProgress(50)
    let results = await fetch(apiUrl)
    props.setProgress(70)
    let parsedData = await results.json()
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    props.setProgress(100)
    }

    const capitalizeFirstLetter =(string)=> {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

    useEffect(() =>{
      document.title=`ThePressSite- ${capitalizeFirstLetter(props.category)} `
        getNews();
    },[])


  return (
<>
<h1 className='text-center'style={{padding:'20px'}} > Headlines: {capitalizeFirstLetter(props.category)}</h1>

{/* Aligning all the cards in row */}
<div className="container">
<div className="row">
    {articles && articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
    <NewsItems title={element.title && element.title.slice(0,70)} description={element.description && element.description.slice(0,120)} publishedTime={element.publishedAt} author={element.author} image={element.urlToImage} newsUrl={element.url}/>
    </div>
    })}
</div>
</div>
</>
  )
}

export default News

