import React from 'react';
import './App.css';

function BlogFirstPage(props) {
 return (
    <>

<div className='blog'>
      <h2>{props.title}</h2>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active slide2">
      <div className='slide1'>
      <img src={props.image1} className="d-block " alt="..."/>
      <p>{props.description1}</p>
      </div>
    </div>
    <div className="carousel-item slide2">
    <div className='slide1'>
      <img src={props.image2} className="d-block " alt="..."/>
      <p>{props.description2}</p>
      </div>
    </div>
    <div className="carousel-item slide2">
    <div className='slide1'>
      <img src={props.image3} className="d-block " alt="..."/>
      <p>{props.description3}</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>

    </>
  )
}

export default BlogFirstPage;