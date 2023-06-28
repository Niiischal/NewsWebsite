import React from 'react'

const NewsItems = (props) => {
    // Destructuring the elemets to access from the api
    const {title, description, publishedTime, author, image, newsUrl, source}=props
  return (
      <div className='my-3'>
        <div className="card">
        <div><span class="badge rounded-pill bg-danger" style={{display:'flex', justifyContent:'center', position:"absolute"}}>{source}</span>
          </div>
          <img src={!image?"https://i.ytimg.com/vi/Jvpt-3VaIH0/maxresdefault.jpg":image}
           className="card-img-top" alt="..."/>
            <div className="card-body">
              <h3 className="card-title fs-3 my-2" >{title}...</h3>
              <p className="card-text my-2">{description}..</p>
              <p className="card-text my-2"><small className="text-body-secondary">By: {!author?"Unknown" :author} on {new Date(publishedTime).toGMTString()}</small></p>
              <div className="d-flex justify-content-end">
              <a href={newsUrl} className="btn btn-lg" style={{background:"red", color:"#fff"}}>Read More</a>
              </div>
            </div>
       </div>
      </div>


  )
}

export default NewsItems
