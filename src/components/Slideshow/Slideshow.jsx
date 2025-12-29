import React from 'react';
import Slider from 'react-slick';
import Image from '../image/image';
import products from '../App/Products.json';

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slidershow">
      <Slider {...settings}>
        {products.map((slideimg) => (
          <div>
            <Image source={slideimg.image} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default SimpleSlider;
