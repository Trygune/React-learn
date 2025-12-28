import React from "react";
import Productitems from "../Productitems/productsitems";

const Product =(props)=>{
    console.log(props);
    // const {info}=props
    return (        
    <ul className='products'>
          {props.info.map((item)=>(
            <Productitems key={item.id}
                data={item}
            />
        ))}
        </ul>)
}

export default Product