import React from "react";
import socialimg from './Images/IMG_20240717_004123.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Professional =()=>{
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };
    return (
        <>
        <section className="professional-width bg-color hero-section end-width">
      <div className="container">
<div className="row professional-row">
<div className="col-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center align-items-center align-items-lg-start">
<h2 className='text-capitalize text-white text-center text-lg-start'>Capture Your Moments with Timeless Photography</h2>
<p className="text-capitalize text-grey mt-1 mb-10 text-center text-lg-start">Capturing Moments: The Art, Craft, and Vision of a Photographer's Journey</p>
<div className="text-lg-start">
                      <button onClick={scrollToBottom} className="text-capitalize btn btn-primary scroll-button">get Service</button>
                    </div>
</div>
 <div className='col-12 col-md-12 col-lg-6'>
<div className='text-center text-lg-end w-100 text-md-center img-padding'>
<LazyLoadImage effect="blur" src={socialimg} alt='portfolio img img-fluid' className='P-portfolio-img'/>
</div>
</div> 
</div>
 </div>
        </section>
        </>
    )

}
export default Professional;