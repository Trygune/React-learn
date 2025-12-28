import React, { useState,useRef,useEffect } from "react";
import './contact.css'
import Button from "../BTN/Button";
import { validateEmail,validateSubject } from "../../utils/Validation";
import { MdSubject } from "react-icons/md";

const Contact=()=>{
    const [textvalue,settextvalue]=useState('')
    const [emailvalue,setemailvalue]=useState('')
    const [areavalue,setareavalue]=useState('')
    const [errors,seterrors]=useState({})
    const inputref=useRef(null)

    const HandleChangeText=(event)=>{
        if (validateSubject(event.target.value)) {
            settextvalue(event.target.value)
            seterrors({
                ...errors,
                subject:null
            })
        } else {
            seterrors({
                ...errors,
                subject:'Subject must be more than 8 characters'
            })
        }
        }
    const HandleChangeEmail=(event)=>{
        if (validateEmail(event.target.value)) {
            setemailvalue(event.target.value)
            seterrors({
                ...errors,
                email:null
            })
        } else {
            seterrors({
                ...errors,
                email:'Email Not Valid'
            })
            setemailvalue('')
        }
        }
        
    const HandleChangeArea=(event)=>{
        setareavalue(event.target.value)
        }
    const HandleSubmit=()=>{
        console.log('textvalue: ',textvalue);
        console.log('emailvalue: ',emailvalue);
        console.log('areavalue: ',areavalue);
        console.log('errors: ', errors);
        }

    useEffect(() => {
        console.log("ref: ",inputref);
        inputref.current.focus()
    },[])
    
    return (
        <div className="contact">
            <div className="myform">
                <input onChange={HandleChangeText} type="text" placeholder="Subject" ref={inputref}/>
            </div>
                {errors.subject && <span>{errors.subject}</span>}
            <div className="myform">
                <input onChange={HandleChangeEmail} type="email" placeholder="Email"/>
            </div>
                {errors.email && <span>{errors.email}</span>}
            <div className="myform">
                <textarea onChange={HandleChangeArea} placeholder="Your Text"></textarea>
            </div>
            <div className="myform">
                <Button handleclick={HandleSubmit}>Submit</Button>
            </div>
        </div>
    )
}

export default Contact