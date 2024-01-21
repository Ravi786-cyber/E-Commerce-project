import React from 'react'
import one from './Images/1.jpeg'
import Two from './Images/2.jpeg'
import Four from './Images/4.jpeg'

function Carousel() {
  return (
    <div>
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner" style={{height: "400px"}}>
    <div class="carousel-item active">
      <img src={one} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Two} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Four} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel