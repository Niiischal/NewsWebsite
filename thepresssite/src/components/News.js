import React, { useEffect, useState } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItems from './NewsItems';
import Spinner from './Spinner';

const News = (props) => {

    const[articles, setArticles]=useState([])
    const[page,setPage ]=useState(1)
    const[loading,setLoading]=useState(true)
    const[totalResults,setTotalResults ]=useState(0)

    const getNews=async()=>{
    props.setProgress(20)
    const apiUrl=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=be2b80dca83446cdbd2c2edf1471245b&page=${page}`
    setLoading(true)
    let results = await fetch(apiUrl)
    props.setProgress(50)
    let parsedData = await results.json()
    props.setProgress(50)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)
    }

    const capitalizeFirstLetter =(string)=> {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

    useEffect(() =>{
      document.title=`ThePressSite- ${capitalizeFirstLetter(props.category)} `
        getNews();
    },[])

    const fetchMoreNews=async()=>{
      const apiUrl=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=be2b80dca83446cdbd2c2edf1471245b&page=${page}`
      setPage(page+1)
      let results = await fetch(apiUrl)
      let parsedData = await results.json()
      setArticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
    }


  return (
<>
<h1 className='text-center'style={{padding:'20px'}} > Headlines: {capitalizeFirstLetter(props.category)}</h1>

{loading && <Spinner/>}
<InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreNews}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >

{/* Aligning all the cards in row */}
<div className="container">
<div className="row">
    {articles && articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
    <NewsItems title={element.title && element.title.slice(0,70)} description={element.description && element.description.slice(0,120)} publishedTime={element.publishedAt} author={element.author} image={element.urlToImage} newsUrl={element.url} source={element.source.name}/>
    </div>
    })}
</div>
</div>
</InfiniteScroll>
</>
  )
}

export default News

