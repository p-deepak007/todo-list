import React, { useEffect,useRef,useState } from 'react';
const Effect2=()=>{

     const [count, setCount] = useState(0);
     const [input, setInput] = useState(1);
    //  let a= useRef(0);
    //  let btnRef=useRef(null);
    useEffect(() => {
        //  a.current=a.current+1;
        //  btnRef.current.style.color="red";
        console.log("re-rendering");


        }
 ,[count]) 
//  array of dependencies
// if we left [] as empty it will render only once
return(
    <div>
        <>{count}</>
        <button  onClick={()=>setCount(count+1)}>+</button>
    </div>)
};

export default Effect2;