import React from 'react'

const NewsItems = (props) => {
    // Destructuring the elemets to access from the api
    const {title, description, publishedTime, author, image, newsUrl}=props
  return (
    <div className='my-3'>
<div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg" src={image} alt="" />
    <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Time: {publishedTime}</p>
        <h5 className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white">Author: {author}</h5>
        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
    </div>
</div>
    </div>


  )
}

export default NewsItems
