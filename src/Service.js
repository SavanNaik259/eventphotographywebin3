import React from "react";
import simg1 from './Images/IMG_20240716_153006.jpg';
import simg2 from './Images/vivekkrishnanphotography-99.jpg';
import simg3 from './Images/images (11).jpeg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Service =() => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <section className="service-section row-width">
        <div className="text-center">
          <h1 className="common-text">Our Service</h1>
          <hr className='w-25 mx-auto' />
        </div>
        <div className="container">
          <div className="row  service-row">
            <div className="col-12">
              <div className="d-flex justify-content-center align-items-center">
               <div className="card service-card style={{ maxWidth: '10rem' }}">
                <div className="service-scale-img">
                                   <LazyLoadImage effect="blur" src={simg1} className="service-card-img lazy-load-image" alt="..." />
                </div>
                  <div className="card-body text-end cover-card change-card-color">
                    <h5 className="card-title mt-3 text-capitalize">portrait photography</h5>
                    <p className="card-text mt-2 mb-3 text-capitalize text-start ">Portrait photography captures the essence, personality, and emotions of individuals or groups. It goes beyond just taking pictures, creating visual stories that highlight the unique qualities of each person. Whether it’s professional headshots, family portraits, or creative shoots, our sessions bring out the best in everyone.</p>
                    <div className="text-lg-start">
                      <button onClick={scrollToBottom} className="text-capitalize btn btn-primary scroll-button">get Service</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex justify-content-center align-items-center">
                <div className="card service-card style={{ maxWidth: '10rem' }}">
                       <div className="service-scale-img">
                                   <LazyLoadImage effect="blur" src={simg2} className="service-card-img lazy-load-image" alt="..." />
                </div>
                  <div className="card-body text-end cover-card change-card-color">
                    <h5 className="card-title mt-3 text-capitalize">Event photography</h5>
                    <p className="card-text mt-2 mb-3 text-start">Event photography captures the essence and energy of special occasions, from weddings and corporate events to birthday parties and concerts. Our skilled photographers document every memorable moment, ensuring you can relive the experience through high-quality images.</p>
                    <div className="text-lg-start">
                      <button onClick={scrollToBottom} className="text-capitalize btn btn-primary scroll-button">get Service</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="d-flex justify-content-center align-items-center">
                <div className="card service-card style={{ maxWidth: '10rem' }}">
                  <div className="service-scale-img">
                                   <LazyLoadImage effect="blur" src={simg3} className="service-card-img lazy-load-image" alt="..." />
                </div>
                  <div className="card-body text-end cover-card change-card-color">
                    <h5 className="card-title mt-3 text-capitalize">Videography </h5>
                    <p className="card-text mt-2 mb-3 text-capitalize text-start ">Videography brings your special moments to life through dynamic and engaging visuals. From weddings and corporate events to promotional videos and personal projects, our expert videographers capture the essence of your story with precision and creativity.</p>
                    <div className="text-lg-start">
                      <button onClick={scrollToBottom} className="text-capitalize btn btn-primary scroll-button">get Service</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Service;
