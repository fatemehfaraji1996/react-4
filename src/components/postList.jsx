import { useState, useEffect } from 'react';
function PoastList() {
        const url = 'https://jsonplaceholder.typicode.com/posts'
       const [data,setdata]= useState([])
       const [loading,setloading]= useState(true)
       
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
        {loading ? <p className='loader'></p> :
        <ul>
          {data.map((x,i)=>{
            return  <li key={i}>{x.title}</li>
            })}
        </ul>
        }
        </>
    )
}
export default PoastList