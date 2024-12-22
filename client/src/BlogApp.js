import React from 'react';
import BlogFirstPage from './BlogFirstPage';
import CreateBlog from './CreateBlog';
import { Link } from 'react-router-dom';



function BlogApp() {
    let addBlog = () => {
        <CreateBlog/>
       
    }
  return (
    <>
  
     <div className='blog1'>
      <h1>Blog App</h1></div>
      <div className='button1'>
      <button className=' b1' onClick={addBlog}><Link className='b3' to='/create'>Create your own blog</Link></button>
     </div>

     <BlogFirstPage title='Business' image1='https://tse1.mm.bing.net/th?id=OIP.amNxaYCe8dmCCsHT7OyTsAHaE7&pid=Api&P=0&h=180' description1='Building a successful business in 2024 requires a combination of innovation, customer focus, sustainability, employee engagement, and strong branding. The rapid advancement of technology means businesses must embrace tools like automation, artificial intelligence, and digital transformation to streamline operations and enhance customer experiences. Customer-centric strategies are essential for growth, with personalization and continuous feedback loops being key to fostering long-term relationships. In addition, sustainability is no longer optional—eco-friendly practices, corporate social responsibility, and transparent reporting are crucial for building trust and attracting environmentally conscious consumers.' image2="https://tse2.mm.bing.net/th?id=OIP.NUlwNjPkWPWiDx6B-3ZjyQHaEu&pid=Api&P=0&h=180" description2='Employee well-being is equally important. Investing in training, offering flexible work options, and recognizing employee achievements not only boosts morale but also enhances overall productivity. Furthermore, a strong brand identity helps businesses stand out in today’s crowded market. Consistent messaging, cohesive visual design, and authentic storytelling create lasting impressions and deeper connections with customers.' image3="https://tse3.mm.bing.net/th?id=OIP.aMDy6t1bwrzkuRsA00edXgHaEK&pid=Api&P=0&h=180" description3='By focusing on these strategies, businesses can position themselves for long-term success in an ever-evolving marketplace. Whether you’re a startup or an established enterprise, adapting to these trends will help your business thrive and stay competitive in 2024 and beyond.'/>

    <BlogFirstPage title='Education' image1="https://tse2.mm.bing.net/th?id=OIP.ckUJmAK_btg4sREvg55OUgHaEc&pid=Api&P=0&h=180" description1="Education is one of the most powerful tools for personal, societal, and global transformation. It not only enriches minds but also opens doors to new opportunities, fosters social harmony, and drives economic growth. As Nelson Mandela famously said, Education is the most powerful weapon which you can use to change the world." image2="https://tse3.mm.bing.net/th?id=OIP.ZSiWrmEamNjQuJXpai3I_wHaEo&pid=Api&P=0&h=180" description2='A well-educated population is essential for economic progress. Studies show that countries with higher literacy rates tend to have stronger economies. Education boosts innovation, enhances productivity, and creates a skilled workforce that attracts investment and drives' image3="https://tse4.mm.bing.net/th?id=OIP.9AoPlEUUiMbDqAKbUWM25gHaEK&pid=Api&P=0&h=180" description3='Education promotes social inclusion by bridging the gap between different communities and socio-economic groups. It provides equal opportunities for everyone, regardless of their background, enabling individuals to break the cycle of poverty and build better futures'/>

    <BlogFirstPage title='Technology' image1="https://tse2.mm.bing.net/th?id=OIP.XenbpiWtkIADyTn4r44gMQHaEK&pid=Api&P=0&h=180" description1="Technology has become an integral part of our daily routines, transforming the way we live, work, and interact. Over the past few decades, technological advancements have revolutionized industries and reshaped society, offering endless possibilities for innovation and growth." image2="https://tse2.mm.bing.net/th?id=OIP.E0yEvGDqXof63L66vR1r3AHaEK&pid=Api&P=0&h=180" description2="In today’s fast-paced world, technology is the driving force behind nearly every aspect of our lives. From the smartphones in our pockets to the AI systems making decisions in milliseconds, technology continues to shape the way we live, work, and interact." image3="https://tse4.mm.bing.net/th?id=OIP.o2gUxcNq5s8XpL1ZCN1d7gHaEW&pid=Api&P=0&h=180" description3="In the 21st century, technology is more than a convenience—it's a transformative force that impacts every aspect of our lives. From the way we communicate and work to how we learn and entertain ourselves, technology continues to reshape society at an astonishing pace."/>

    <BlogFirstPage title="Travelling" image1="https://tse2.mm.bing.net/th?id=OIP.YfEWxvP3vo59bzzbXkY41AHaE8&pid=Api&P=0&h=180" description1="Traveling is more than just visiting new places. It’s about embracing experiences, learning from diverse cultures, and stepping outside your comfort zone. Whether you're exploring a bustling city, hiking through serene landscapes, or immersing yourself in local traditions, travel enriches your soul and broadens your perspective." image2="https://tse1.mm.bing.net/th?id=OIP.NzKQctxmmZEeYQNlfTS5TgHaE8&pid=Api&P=0&h=180" description2="Every destination offers a unique adventure. From tasting exotic cuisines in Bangkok’s street markets to witnessing the northern lights in Iceland, the world is full of breathtaking moments. Each trip becomes a story—an unforgettable chapter in the book of your life." image3="https://tse2.mm.bing.net/th?id=OIP.E1XlxiBHbi26dP-xxklTIQHaEK&pid=Api&P=0&h=180" description3="Traveling opens doors to cultural exchanges. Sharing a meal with locals, learning their customs, or simply engaging in a friendly conversation can bridge cultural gaps and foster understanding. These encounters teach us empathy and help us appreciate the world’s diversity."/>
    </>
  )
}

export default BlogApp;