import React, { useContext } from "react";
import './Singleproducts.css'
import { useParams } from "react-router-dom";
import Products from '../App/Products.json'
import Image from "../image/image";
import ThemeContext from "../../Contexts/Themecontext";
import Button from "../BTN/Button";
import { MdAdd, MdOutlineRemoveShoppingCart} from "react-icons/md";
import cartcontext from "../../Contexts/cartcontext";


const Singleproducts=()=>{
    const {id} =useParams()
    const product=Products.find(item => item.id === id)
    const themeValue=useContext(ThemeContext)
    const {carts,dispatchcart}=useContext(cartcontext)
    const cartadded = carts.includes(product.id)
    const handleadd=()=>{
    if (cartadded) {
      dispatchcart({
      type:'Removed_From_Cart',
      id:product.id
    })
    } else {
      dispatchcart({
      type:'Added_To_Cart',
      id:product.id
    })
    }
  }
    console.log('id: ',id);
    console.log('product: ',product);
    
    return(
    <div className="thisprod">
        <h1>{product.name}</h1>
        <Image source={product.image}/>
        <h2>Price: {product.price}</h2>
        <Button  
                    handleclick={handleadd}
                    style={
                      {color:themeValue.theme.color,
                        borderColor:themeValue.theme.color,
                      }
                    }>
                      {cartadded ? (<>
                        <MdOutlineRemoveShoppingCart />
                        Remove
                      </>)
                      : 
                      (<>
                        <MdAdd />
                        Add to Cart
                      </>)}
                    </Button>
    </div>
)
}

export default Singleproducts