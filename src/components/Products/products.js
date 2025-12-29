import React from 'react';
import Productitems from '../Productitems/productsitems';
import SimpleSlider from '../Slideshow/Slideshow';

function Product(props) {
  console.log(props);
  // const {info}=props
  return (
    <>
      <SimpleSlider />
      <ul className="products">
        {props.info.map((item) => (
          <Productitems
            key={item.id}
            data={item}
          />
        ))}
      </ul>
      <br />
    </>
  );
}

export default Product;
