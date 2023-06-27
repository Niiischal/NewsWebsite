import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'

const News = (props) => {

    const[articles, setArticles]=useState([])
    const[page,setPage ]=useState(1)
    const[totalResults,setTotalResults ]=useState(0)

    const getNews=async()=>{
    const apiUrl=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey="be2b80dca83446cdbd2c2edf1471245b"&page=${page}`
    let data = await fetch(apiUrl)
    let parsedData = await data.json()
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    }

    useEffect(() =>{
        getNews();
    },[])

    // const fetchMoreData = async () => {
    //     const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}`
    //     setPage(page+1)
    //     let data = await fetch(url);// fetching the url
    //     let parsedData = await data.json()// waiting for it to change into json
    //     setArticles(articles.concat(parsedData.articles))
    //     setTotalResults(parsedData.totalResults)
    //   };

  return (
<>
<h1 className='text-center'style={{padding:'20px'}} > Headlines: {props.category}</h1>

{/* Aligning all the cards in row */}
<div className="container">
<div className="row">
    <div className="col-md-4">
    {articles?.map((element)=>{
            return <div className="col-md-4" key={element.url}>
    <NewsItems title={element.title} description={element.description} publishedTime={element.publishedAt} author={element.author} image={element.urlToImage} newUrl={element.url}/>
    </div>
    })}
</div>
</div>
</div>
</>
  )
}

export default News

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
