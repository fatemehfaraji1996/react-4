import { useState, useEffect } from 'react';
function PoastList() {
        const url = 'https://jsonplaceholder.typicode.com/posts'
       const [data,setdata]= useState([])
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then((data)=>{
            console.log(data)
            setdata(data)
        })  
    },[])
    return(
        <>
        <ul>
          {
            data.map((x,i)=>{
            return    <li key={i}>{x.title}</li>
            })
          }

        </ul>
        
        </>
    )
}
export default PoastList