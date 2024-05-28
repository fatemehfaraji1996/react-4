import { useState, useEffect } from 'react';
function PoastList() {
        const url = 'https://jsonplaceholder.typicode.com/posts'
       const [data,setdata]= useState([])
       const [loading,setLoading]= useState(true)
       
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then((data)=>{
            // console.log(data)
            setdata(data)
            setLoading(false)
        })  
    },[])
    return(
        <>
        {loading ? <p className='loader'>loading</p> :
        <ul>
          {data.map((x,i)=>{
            <li key={i}>{x.title}</li>
            })}
        </ul>
        }
        </>
    )
}
export default PoastList