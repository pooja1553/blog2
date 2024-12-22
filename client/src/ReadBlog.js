import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import './App.css';
function ReadBlog() {
    const [data,setdata] = useState([]);
    const [data1,setdata1] = useState([]);
    useEffect(()=>{
      Axios.get('http://localhost:5000/read').then((res)=>{setdata(res.data);setdata1(res.data)})
    },[])

    const a = [];
    data1.forEach((value1) => a.push((value1.title).toUpperCase()));
   
      console.log(a);
      console.log(a.length);
      let count1 = 0 ;
      let count2 = 0 ;
      let count3 = 0 ;
      let count4 = 0 ;
      let count5 = 0 ;

      for(let i=0;i<a.length;i++){
        if(a[i]==='BUSINESS'){
          count1++;
        }
      }
      console.log("BUSINESS : ",count1);

      for(let i=0;i<a.length;i++){
        if(a[i]==='EDUCATION'){
          count2++;
        }
      }
      console.log("EDUCATION : ",count2);

       for(let i=0;i<a.length;i++){
        if(a[i]==='TECHNOLOGY'){
          count3++;
        }
      }
      console.log("TECHNOLOGY : ",count3);

      for(let i=0;i<a.length;i++){
        if(a[i]==='TRAVELLING'){
          count4++;
        }
      }
      console.log("TRAVELLING : ",count4);

    //    for(let i=0;i<a.length;i++){
    //   if(a[i]==='FOOD'){
    //     count5++;
    //   }
    // }
    // console.log("FOOD : ",count5);
   
 
  return (
    <>
    {/* <button onClick={data3}>a</button> */}
    <div className='read'>
    <h1>Read Blogs</h1>
    <h3>There are {a.length} blogs in which {count1} blogs for Business , {count2} blog for Education , {count3} blog for Technology , and {count4} blog for Travelling </h3>
    <div className='read-r'>
    <div className='read1'> 
        {data.map((value,key)=>{
            return(
                <div className='read2'>
                  <div className='read2-1'><img src={value.image}/></div>
                    <div className='read2-2'> 
                    <h2>{value.title}</h2>
                    <h4>{value.description}</h4>
                    <h5>--- {value.name}</h5>
                     </div>
                    {/* <button onClick={details}>details</button> */}
                    {/* a.push({value.title})
                    console.log(a); */}
                  </div>
            )
        })}
    </div>
    </div>
    </div>

    </>
  )
}

export default ReadBlog