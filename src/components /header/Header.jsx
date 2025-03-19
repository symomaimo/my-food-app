import React from 'react'
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";
import banner4 from "../../assets/images/banner4.jpg";
import banner5 from "../../assets/images/banner5.jpg";
const banners=[banner1,banner2,banner3,banner4,banner5];
const Header = ({title,type}) => {
  return (
    <div className='w-full h[100vh]'>
<div className='relative w-full h-full'>
<img src={banners[Math.floor(Math.random()*banners.length)]} alt="recipe" className='w-full h-full object-cover'/>
</div>
absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4 
<div className='absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4 '>
<h1 className='text-white text-4xl font-bold text-center'>{title}</h1>
{type &&(
    <p className='text-sm mt-4 text-center text-green-500 bg-[#00000090] px-6 py-4 rounded-full border-2 mx-10'>Welcome to falanceselect , your field to adventures
        <br className='hidden md:block'/>
        Discover a tresure trove of delectable.
    </p>
) }
</div>
    </div>
  )
}

export default Header