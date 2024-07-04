import React from 'react'

const Slidebar = () => {
  return (
    <div>
      <br/>
      <br/>
      <br/>
    <div id="carouselExampleCaptions " className="carousel" data-bs-ride="carousel" style={{objectFit:"contain"}}  >
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className='carousel-inner ' id='carousel'  style={{ zIndex: '10', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
    <div className='carousel-caption'>
    </div>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/300×100/?pasta" className="d-block w-100" height={600}   style={{filter:'brightness(70%'}}  />
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/300×100/?pizza" className="d-block w-100" height={600}  style={{filter:'brightness(70%'}} />
      
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/300×100/?burger" className="d-block w-100" height={600} style={{filter:'brightness(70%'}} />
     
    </div>
  </div>
  {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button> */}
</div>

    </div>
  )
}

export default Slidebar
