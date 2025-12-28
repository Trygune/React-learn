import React, { useCallback, useEffect, useState } from "react";
// import Posts from './Posts.json'
import Button from '../BTN/Button'
import './Blog.css'

const Blog=()=>{
    const [post,setpost]=useState([])
    const [loading,setloading]=useState(false)
    const [pagecounts,setpagecounts]=useState(0)
    const [activepage,setactivepage]=useState(1)
    // const [trap,settrap]=useState(false)

    const loadpost=async ()=>{
        setloading(true)
        // settrap(true)
        const responseAPI=await fetch('https://mocki.io/v1/03f5f003-ba98-45d2-8e5a-1e9f928717d9')
        const post=await responseAPI.json()
        setpost(post)
        setloading(false)
    }
    const pagecal=()=>{
        if ((post.length%3) > 0) {
            return parseInt((post.length/3)+1)
        }
        return parseInt(post.length/3)
    }
    const changepage=useCallback((pagenumber)=>{
        setactivepage(pagenumber)
    },[])
//useCallback memorizes function hence loads faster --> performance enhancer

    // const changepage=(pagenumber)=>{
    //     setactivepage(pagenumber)
    // }
    useEffect(()=>{
        loadpost()
    },[])
    useEffect(()=>{
        setpagecounts(pagecal())
    },[post])
    console.log('pagecounts: ',pagecounts);
    
    // useEffect(()=>{
    //     console.log('trap changed!');
    // },[trap])
    return (
    <div className="Blog">
        {/* <Button handleclick={loadpost}>
            {loading ? 'Loading':'Load Posts'}
        </Button> */}
        {loading && <div>Loading</div>}
        {post.length === 0 && <div>No Posts</div>}
        {post.length > 0 && 
        (<ul>
            {post.slice(3*(activepage-1),3*activepage).map((item)=>(
                <li className="blogitem" key={`post-${item.id}`}>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                </li>
            ))}
        </ul>)
        }
        <div className="blogpage">
            <ul>
                {new Array(pagecounts).fill(0).map((item,index)=>(
                <li className={activepage === index+1 ? 'active':''}>
                    <Button handleclick={()=>changepage(index+1)}>
                        {index+1}
                    </Button>
                </li>
                ))}
            </ul>
        </div>
    </div>

)}
// stateless function



// class Blog extends React.Component {
//     constructor(props){
//         super(props)
//         this.state={
//             clicked:0,
//             updated:0,
//             didmount:false
//         }
//     }
//     componentDidMount(){
//         setTimeout(() => {
//             this.setState({
//                 didmount:true
//         })
//         this.handleclick()
//         }, 2000);
//     }
//     componentDidUpdate(prevProps,prevState){
//         const {updated}=this.state
//         if (updated===0) {
//                 this.setState({
//                 updated:this.state.updated+1
//             })
//         }
//     }
//     componentWillUnmount(){
//         console.log('unmounted');
        
//     }
//     handleclick=()=>{
//         this.setState({
//             clicked:this.state.clicked+1
//         })
//     }
//     render(){
//         const {clicked,didmount,updated}=this.state
//         return(
//             <div>
//                 {/* {this.state.clicked ? 'Clicked': 'not Clicked'} */}
//                 {clicked ? 'Clicked': 'not Clicked'}
//                 <h1>Personal Blog Class</h1>
//                 <p>Clicked Number: {clicked}</p>
//                 <button onClick={this.handleclick}>
//                     Click
//                 </button>
//                 <h1>Component Did Mount</h1>
//                 <p>Did Mount "2s wait": {didmount?'yes':'no'}</p>
//                 <h1>Component Did Update</h1>
//                 <p>Updated: {updated}</p>
//             </div>
//         )
//     }
// }
//oldschool

export default Blog