import React from 'react'
import { GrFormView } from "react-icons/gr";
import { LiaTelegramPlane, LiaTwitter } from "react-icons/lia";
import { MdOutlineAddReaction } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoCopy } from 'react-icons/io5';
import { AiFillLike } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";




function KhabarEntekhabOstan({data}) {
  return (
    <>
    {
      data?.telegram_private_news_ostan?.map((item , index)=>(
        <div key={index} className='  m-1 border border-black bg-white  rounded-md '>
        <div className='p-1 m-1 font-bold justify-between flex flex-row text-black'>
         <span>{item.channel_name } </span>
         <div><LiaTelegramPlane/></div>
        </div>
    <div className={`  m-2 p-2 'h-24' font-khameneiiRegular text-justify overflow-hidden text-black `}>
        <div >
        {item.text_clean}
        </div>
  
    </div>
    <div className='flex flex-row justify-between mx-2 my-2 items-center  '>
      <div className=' p-1 font-bold flex flex-row items-top align-middle'>
       <div >
       <FaRegCalendarAlt fontSize={16} style={{marginLeft : 5 , marginTop : 2 , color : 'gray'}}/>
       </div>
      <div style={{marginTop : '2px' , color : 'gray'}}>
      {item.release_time_post}
      </div>
      </div>
      <div className=' p-1 font-bold flex flex-row items-center  '>
      <div className='flex flex-row justify-center align-middle items-center'>
      <GrFormView fontSize={25} style={{marginBottom : 3 , color : 'gray' , marginTop: 3}}/> 
      <div style={{color : 'gray'}} className='mt-1'>
      {item.views_post}
      </div>
      </div>
      <div className='flex flex-row mr-5  items-center'>
      <MdOutlineAddReaction fontSize={16} style={{color : 'gray'}}/>
      <div className='items-center justify-center mt-1 mr-1' style={{color : 'gray'}}>
      {item.reaction}  
      </div> 
      </div> 
      </div>
    </div>
    </div>
       ))
    }
    {
      data.twitter_private_news_ostan.map((item , index)=> (
        <div key={index} className='  m-1 border border-black bg-white  rounded-md '>
        <div className='p-1 m-1 font-bold justify-between flex flex-row text-black'>
         <span>{item.channel_name } </span>
         <div><FaXTwitter/></div>
        </div>
    <div className={`  m-2 p-2 'h-24' font-khameneiiRegular text-justify overflow-hidden text-black `}>
        <div >
        {item.description}
        </div>
  
    </div>
    <div className='flex flex-row justify-between mx-2 my-2 items-center  '>
      <div className=' p-1 font-bold flex flex-row items-top align-middle'>
       <div >
       <FaRegCalendarAlt fontSize={16} style={{marginLeft : 5 , marginTop : 2 , color : 'gray'}}/>
       </div>
      <div style={{marginTop : '2px' , color : 'gray'}}>
      {item.time}
      </div>
      </div>
      <div className=' p-1 font-bold flex flex-row items-center  '>
      <div className='flex flex-row justify-center align-middle items-center'>
      <IoCopy fontSize={15} style={{marginBottom : 3 , color : 'gray' , marginTop: 3}}/> 
      <div style={{color : 'gray'}} className='mt-1'>
      {item.copy_count}
      </div>
      </div>
      <div className='flex flex-row mr-5  items-center'>
      <AiFillLike fontSize={16} style={{color : 'gray'}}/>
      <div className='items-center justify-center mt-1 mr-1' style={{color : 'gray'}}>
      {item.like_count}  
      </div> 
      </div> 
      </div>
    </div>
    </div>
      ))
    }
      
    
    </>
    
    
     
  )
  
}

export default KhabarEntekhabOstan