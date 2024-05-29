import React from 'react'


export default function InnerContent(props) {

  let { title, description, imageurl, newsurl, author, date, source } = props;
  return (
    <div className='my-3'>
      <div className="card" style={{ width: "18rem" }}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: 1 }}>
          {source}
        </span>
        <img src={!imageurl ? "https://www.hindustantimes.com/ht-img/img/2024/05/08/1600x900/EMCURE-INDIA-IPO-0_1703042781757_1715159824039.JPG" : imageurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>

          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} at {new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href={newsurl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )

}
