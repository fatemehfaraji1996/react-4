import { useState, useEffect } from 'react';
function Random() {
    const [data,setdata] = useState([])
    
   function  fetchAdvice() {
    const url = 'https://api.adviceslip.com/advice'
    fetch(url)
    .then(res => res.json())
    .then((data)=>{
        console.log(data.slip.advice);
        setdata(data.slip.advice)
    })
}
useEffect(()=>{
    fetchAdvice()
},[])
return(
    <>
    <p>{data}</p>
    <button onClick={fetchAdvice}> NEXT </button>
    
    </>
)

}
export default Random
