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
            <h2 className='slideTxt slideTxt1'>
              다양하게 준비된 <br />
              특별한 원두와 로스팅
            </h2>
          </div>
          <div>
            <img
              className='slideImg slideImg2'
              src={slideImg2}
              alt='slideImg2'
              title='slideImg2'
            />
            <h2 className='slideTxt slideTxt2'>
              따뜻하고 좋은 날 <br /> 커피타운과 함께
            </h2>
          </div>
          <div>
            <img
              className='slideImg slideImg3'
              src={slideImg3}
              alt='slideImg3'
              title='slideImg3'
            />
            <h2 className='slideTxt slideTxt3'>
              커피의 맛과 향은 <br />
              원두로 정해집니다.
            </h2>
          </div>
        </Slider>
      </div>
    );
  }
}
