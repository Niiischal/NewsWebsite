import React from 'react'
import NewsItems from './NewsItems'


// https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=90c71cea048a4c9f9714415dd37eb9cc
const News = () => {
  return (
<>
<h1 className='text-center'style={{padding:'20px'}} >Get News By Categories: </h1>
<NewsItems/>
</>
  )
}

export default News
