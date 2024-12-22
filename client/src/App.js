import React from 'react';
import CreateBlog from './CreateBlog';
import ReadBlog from './ReadBlog';
import Navbar from './Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ChangeBlog from './ChangeBlog';
import Footer from './Footer';
import BlogApp from './BlogApp';



function App() {
  return (
    <>
   
    <Router>
    <Navbar/>
  
       <Routes>
        <Route path='/' element={<BlogApp/>}/>
       <Route path='/create' element={<CreateBlog/>}/>
        <Route path='/read' element={<ReadBlog/>}/>
        <Route path='/change' element={<ChangeBlog/>}/>
        
     </Routes>
     <Footer/>
    </Router>
  </>
  )
}

export default App