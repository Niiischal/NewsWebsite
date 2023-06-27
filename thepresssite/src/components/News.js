import React from 'react'
import NewsItems from './NewsItems'

const News = (props) => {

    const apiUrl=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}`
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
