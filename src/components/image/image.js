import React from "react";

const Image=({source,...props})=>(
            <img src={source} {...props}/>
)

export default Image