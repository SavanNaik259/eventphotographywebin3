import React from "react";
import showimg1 from './Images/vivekkrishnanphotography-115_websize.jpg';
import showimg2 from './Images/vivekkrishnanphotography-465.jpg';
import showimg3 from './Images/pexels-photo-6085682.jpeg';
import showimg4 from './Images/vivekkrishnanphotography-82.jpg';
import showimg5 from './Images/image-asset.jpeg';
import showimg6 from './Images/vivekkrishnanphotography-482.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Show =()=>{
  return(
    <>
<div className="container row-width">          
<h1 className="common-text fs-4 fw-normal">Frames of Life: The Essence of Photography</h1>
          <hr className='w-50 mx-auto' />
  <div className="row gx-1">
    <div className="col-6">
      <div className="d-flex justify-content-center valign-items-center">
        <div className="card">
                  <div className="show-scale-img">
          <LazyLoadImage effect="blur" src={showimg1} className="card-img-show lazy-load-image full-width" alt="..." />
          </div>
        </div>
      </div>
    </div>
    <div className="col-6">
      <div className="d-flex justify-content-center align-items-center">
        <div className="card">
                  <div className="show-scale-img">
          <LazyLoadImage effect="blur" src={showimg2} className="card-img-show lazy-load-image full-width" alt="..." />
          </div>
        </div>
      </div>
    </div>
    <div className="col-6">
      <div className="d-flex justify-content-center align-items-center">
        <div className="card">
                  <div className="show-scale-img">
          <LazyLoadImage effect="blur" src={showimg3} className="card-img-show lazy-load-image full-width" alt="..." />
          </div>
        </div>
      </div>
    </div>
    <div className="col-6">
      <div className="d-flex justify-content-center align-items-center ">
        <div className="card">
                  <div className="show-scale-img">
          <LazyLoadImage effect="blur" src={showimg4} className="card-img-show lazy-load-image full-width" alt="..." />
          </div>
        </div>
      </div>
    </div>
    <div className="col-6">
      <div className="d-flex justify-content-center align-items-center">
        <div className="card">
                  <div className="show-scale-img">
          <LazyLoadImage effect="blur" src={showimg5} className="card-img-show lazy-load-image full-width" alt="..." />
          </div>
        </div>
      </div>
    </div>
    <div className="col-6">
      <div className="d-flex justify-content-center align-items-center">
        <div className="card">
                  <div className="show-scale-img">
          <LazyLoadImage effect="blur" src={showimg6} className="card-img-show lazy-load-image full-width" alt="..." />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
    )
}
export default Show;
