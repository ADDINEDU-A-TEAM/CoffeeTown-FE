import React, { Component } from 'react';
import Slider from 'react-slick';
import './Slide.scss';
import './SlideTheme.scss';
import 'slick-carousel/slick/slick-theme.css';
import slideImg1 from '../assets/images/slideImg1.jpg';
import slideImg2 from '../assets/images/slideImg2.jpg';
import slideImg3 from '../assets/images/slideImg3.jpg';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      arrow: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img
              className='slideImg slideImg1'
              src={slideImg1}
              alt='slideImg1'
              title='slideImg1'
            />
            <h2 className='slideTxt slideTxt1'>어쩌고 저쩌고</h2>
          </div>
          <div>
            <img
              className='slideImg slideImg2'
              src={slideImg2}
              alt='slideImg2'
              title='slideImg2'
            />
            <h2 className='slideTxt slideTxt2'>어쩌고 저쩌고2</h2>
          </div>
          <div>
            <img
              className='slideImg slideImg3'
              src={slideImg3}
              alt='slideImg3'
              title='slideImg3'
            />
            <h2 className='slideTxt slideTxt3'>어쩌고 저쩌고3</h2>
          </div>
        </Slider>
      </div>
    );
  }
}
