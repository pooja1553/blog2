import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import './App.css';
function ChangeBlog() {
    const [data,setdata] = useState([]);
    const [newDescription,setNewdescription] = useState('');
    const [newImage,setNewImage] = useState('');
    const [newTitle,setNewTitle] = useState('');
    const [newName,setNewName]= useState('');
    useEffect(()=>{
      Axios.get('http://localhost:5000/read').then((res)=>{setdata(res.data)})
    },[])
    const updated = (id) => {
        Axios.put('http://localhost:5000/update',{
            id:id,
          newImage:newImage,
          newDescription:newDescription,
          newTitle:newTitle,
          newName:newName
        })
        alert('Data updated');
    }
    const deleted = (id) =>{
        Axios.delete(`http://localhost:5000/delete/${id}`)
        alert('Data deleted');
    }
  return (
    <>
    <div className='changeBlog'>
      <h1>Change Blogs</h1>
    </div>
    <div className=' change-1'> 
        {data.map((value,i)=>{
            return(
                <div className='change1'>
                    <div className='change2'> 
                    <img src={value.image}/>
                    <h2>{value.title}</h2>
                    <h4>{value.description}</h4>
                    <h5>{value.name}</h5>
                    </div>
                    <div className='change3'>
                     <input type='text' placeholder='Edit title here'onChange={(e)=>{setNewTitle(e.target.value)}}/>
                     <textarea placeholder='Edit description here' rows='2'onChange={(e)=>{setNewdescription(e.target.value)}}/>
                     <textarea placeholder='Enter image link to change image' rows='2' onChange={(e)=>{setNewImage(e.target.value)}}/>
                     <input type='text' placeholder='Edit name here'onChange={(e)=>{setNewName(e.target.value)}}/>
                    <button onClick={()=>updated(value._id)} className='btn btn-primary'>update</button>
                    <button onClick={()=>{deleted(value._id)}} className='btn btn-primary'>delete</button>
 
                    </div>
                </div>
            )
        })}
    </div>
   
    {/* <h1>{newTitle}</h1>
    <h1>{newDescription}</h1> */}
    </>
  )
}

export default ChangeBlog