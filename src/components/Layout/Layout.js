import React,{useReducer} from "react";
import Header from "../Head/Header";
import Footer from "../Foot/Footer";
import cartcontext from '../../Contexts/cartcontext'
import cartreducer from "../../reducers/carts.reducer";

const Layout=({children})=>{
    let cart=[]
    if (localStorage.getItem('Carts')) {
        cart=JSON.parse(localStorage.getItem('Carts'))
    }
    const [state,dispatch]=useReducer(cartreducer,{
        carts:cart
    })
    return (
    <cartcontext.Provider value={{
        carts: state.carts,
        dispatchcart: dispatch
    }}>
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    </cartcontext.Provider>
)}
export default Layout