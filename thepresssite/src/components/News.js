import React from 'react'
import NewsItems from './NewsItems'


// https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=90c71cea048a4c9f9714415dd37eb9cc
const News = () => {
  return (
<>
<h1 className='text-center'style={{padding:'20px'}} > Headlines</h1>

{/* Aligning all the cards in row */}
<div className="container">
<div className="row">
    <div className="col-md-4">
    <NewsItems title="Heading" description="News" publishedTime="Now" author="Me" image="" />
    </div>
</div>
</div>

</>
  )
}

export default News
