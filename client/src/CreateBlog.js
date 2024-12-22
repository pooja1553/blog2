import React, { useState } from 'react'
import './App.css'
import Axios from 'axios';

function CreateBlog() {
     const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [image,setImage] = useState('');
    const [name,setName] = useState('');

    const addData = () => {
        Axios.post('http://localhost:5000/insert',{
             title:title,
            description:description,
            image:image,
            name:name
        })
        alert('Data inserted');
    }
  return (
    <>
    <div className='nature'>
    <div className='create'><h1>Create Blog</h1></div>
    <div className='box c1'>
        <div className='box1'>
    <form className=' createblog'>
    <label htmlFor='name'>Name</label>
    <input type='text' placeholder='Enter name here'  onChange={(e)=>{setName(e.target.value)}} />
        <label htmlFor='title'>Title</label>
        <input type='text' placeholder='Enter title here'  onChange={(e)=>{setTitle(e.target.value)}} />
        {/* <hr/> */}
        <label htmlFor='description'>Description</label>
        <textarea placeholder='Enter description here' rows='5'onChange={(e)=>{setDescription(e.target.value)}}/>
          {/* <hr/> */}
          <label htmlFor='image'>Image</label>
          <textarea type='text' rows='4' placeholder='Enter image link here'  onChange={(e)=>{setImage(e.target.value)}} />
          {/* <img src='https://tse4.mm.bing.net/th?id=OIP.hZrUmaARzP6obZEGWAmrGQHaEy&pid=Api&P=0&h=180'/> */}
        <button className='b2' onClick={addData}>submit</button>
    </form>
   
  </div>
    </div>
    </div>
    
    {/* <h3>{description}</h3>
    <h3>{title}</h3> */}
    {/* <h3>{image}</h3> */}
    </>
  )
}

export default CreateBlog