import React,{useContext} from "react";
import './Footer.css'
import ThemeContext from "../../Contexts/Themecontext";

const Footer=()=>{
    const themeValue=useContext(ThemeContext)
    return(
    <div className="Footer">
        <h4>Developed By Trygun</h4>
        <div className="themer">
            <button onClick={()=>themeValue.setactivetheme('purple')} className="purple">Purple</button>
            <button onClick={()=>themeValue.setactivetheme('green')} className="green">Green</button>
        </div>
    </div>
)}
export default Footer