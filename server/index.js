const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Blog = require('./models/BlogSchema');
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/BlogApp1',{
    useNewUrlParser:true
})

app.get('/read',async(req,res)=>{
     Blog.find().then((data)=>{res.send(data)})
})

app.post('/insert',async(req,res)=>{
 
    const title = req.body.title;
    const image = req.body.image;
    const description = req.body.description;  
    const name = req.body.name;  
    const blog1 = new Blog({
         title:title,
        description:description,
        image:image,
        name:name
    })
    try{
       await blog1.save();
       res.send("Data inserted");
    }
    catch(e){
       console.log(e);
       res.status(400).send('Server error'); 
    }
})

// app.post('/insert1',async(req,res)=>{
//     // const name = req.body.name;
//     // const email = req.body.email;
//     const title = req.body.title;
//     // const image = req.body.image;
//     const description = req.body.description;  
//     const blog1 = new Blog({
//         // name:name,
//         // email:email,
//         title:title,
//         description:description,
//         // image:image
//     })
//     try{
//        await blog1.save();
//        res.send("Data inserted");
//     }
//     catch(e){
//        console.log(e);
//        res.status(400).send('Server error'); 
//     }
// })

// app.post('/insert_title',async(req,res)=>{
//     const title = req.body.title;
//     const blog1 = new Blog({
//         title:title,
//      })
//     try{
//        await blog1.save();
//        res.send("Data inserted");
//     }
//     catch(e){
//        console.log(e);
//        res.status(400).send('Server error'); 
//     }
// })

// app.post('/insert_description',async(req,res)=>{
//    const description = req.body.description;  
//     const blog1 = new Blog({
//         description:description
//     })
//     try{
//        await blog1.save();
//        res.send("Data inserted");
//     }
//     catch(e){
//        console.log(e);
//        res.status(400).send('Server error'); 
//     }
// })

app.put('/update',async(req,res)=>{
    const id = req.body.id
    const newImage = req.body.newImage;
    const newDescription = req.body.newDescription;
    const newTitle = req.body.newTitle;
    const newName = req.body.newName
    
    try{
        const updatedData = await Blog.findById(id)
        if(!updatedData){
            return res.status(405).send('Data not found');
        }
       
        updatedData.description=newDescription;
        updatedData.title=newTitle;
        updatedData.image=newImage;
        updatedData.name = newName;
        await updatedData.save();
        res.send('details updated');
    }
   catch(e){
    console.log(e)
   }
})

app.delete('/delete/:id',async(req,res)=>{
    const id = req.params.id;
    try{
        const deletedData = await Blog.findOneAndDelete({_id:id}).exec();
        if(!deletedData){
           return res.status(405).send('Data not found');
        }
        res.send('Data deleted');
    }
    catch(e){
        console.log(e);
        res.status(500).send('Server error');
    }
})

app.get('/countBlogs',async(req,res)=>{
    try{
        const totalBlogs = await Blog.countDocuments();
        res.send({totalBlogs});
    }
    catch(e){
        res.status(500).send("Server error");
    }
})


app.listen(5000,()=>{
    console.log('Server establish at port 5000');
})

// app.get('/insert1',async(req,res)=>{
//     const blog1 = new Blog({
//         name:'payal',
//         email:'payal@gmail.com',
//         title:'cloud computing',
//         description:'We can access services with the help of cloud computing'
//     })
//     try{
//         await blog1.save();
//         res.send('Data inserted');
//     }
//     catch(e){
//         console.log(e);
//     }
// })
