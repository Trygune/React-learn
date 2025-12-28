import React, { useContext, useEffect, useRef } from 'react';
import Button from '../BTN/Button';
import Image from '../image/image';
import './productsitems.css';
import ThemeContext from '../../Contexts/Themecontext';
import cartcontext from '../../Contexts/cartcontext';
import { MdAdd, MdOutlineRemoveShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { PROJECT_URL } from '../../Configs/general';
// import productreducer from "../../reducers/Productitems.reducer";

function Productsitem({ data }) {
  const themeValue = useContext(ThemeContext);
  const { carts, dispatchcart } = useContext(cartcontext);
  const productref = useRef(null);
  // const [added,setdded]=useState(false)
  // const [state,dispatch]=useReducer(productreducer,{added:false})
  // console.log('themeValue: ',themeValue);
  const cartadded = carts.includes(data.id);
  const handleadd = () => {
    // setdded(!added)
    if (cartadded) {
    //   dispatch({
    //   type:'Removed_From_Cart'
    // })
      dispatchcart({
        type: 'Removed_From_Cart',
        id: data.id,
      });
    } else {
    //   dispatch({
    //   type:'Added_To_Cart'
    // })
      dispatchcart({
        type: 'Added_To_Cart',
        id: data.id,
      });
    }
  };
  // console.log('state: ',state);

  useEffect(() => {
    productref.current.classList.add('visible');
  }, []);

  return (
    <li className="productitem" ref={productref}>
      <Link to={`/product/${data.id}`}>
        <h4>{data.name}</h4>
        <Image source={data.image} />
        {/* <Image source={`${PROJECT_URL}/assets/img/${data.image}`} /> */}
      </Link>
      <span>
        Price:
        {' '}
        {data.price}
      </span>
      <Button
        handleclick={handleadd}
        style={
              {
                color: themeValue.theme.color,
                borderColor: themeValue.theme.color,
              }
            }
      >
        {cartadded ? (
          <>
            <MdOutlineRemoveShoppingCart />
            Remove
          </>
        )
          : (
            <>
              <MdAdd />
              Add to Cart
            </>
          )}
      </Button>
    </li>
  );
}

export default Productsitem;
