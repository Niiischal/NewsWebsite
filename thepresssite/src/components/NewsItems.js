import React from 'react'

const NewsItems = (props) => {
    // Destructuring the elemets to access from the api
    const {title, description, publishedTime, author, image, newsUrl}=props
  return (
      <div className='my-3'>
        <div className="card">
          <img src={!image?"https://i.ytimg.com/vi/Jvpt-3VaIH0/maxresdefault.jpg":image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h3 className="card-title fs-2">{title}</h3>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-body-secondary">By: {!author?"Unknown" :author} on {new Date(publishedTime).toGMTString()}</small></p>
              <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
            </div>
       </div>
      </div>


  )
}

export default NewsItems
