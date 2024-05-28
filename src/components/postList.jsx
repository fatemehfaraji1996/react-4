import { useState, useEffect } from 'react';
function PoastList() {
        const url = 'https://jsonplaceholder.typicode.com/posts'
       const [data,setdata]= useState([])
       const [loading,setLoading]= useState(true)

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then((data)=>{
          setdata(data)
          // console.log(data.title)
            setLoading(false)
        })  
    },[])
    return(
        <>
        {loading ? <p className='loader'></p> :
        <ul>
          {data.map((x,i)=>{
            console.log(x.title);
          return  <li key={i}>{x.title}</li>
            })}
        </ul>
        }
        </>
    )
}
export default PoastList