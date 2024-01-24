import React, { useState } from 'react'
import { GrFormView } from "react-icons/gr";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";

function KhabarHotTelegram({dataHotTelegram ,icon}) {

    const [visible,setVisible] = useState(true);
    const [id , setId] = useState(null);

    
  return (
    dataHotTelegram.map((item , index)=>(
   <>
    <div key={item.id}   className='  m-1 border border-black bg-white  rounded-md pt-1  '>
   
    <div className='p-1 m-1 font-bold text-black flex flex-row justify-between'>
    <div>{item.channel_name}  </div>
    <div>
      <LiaTelegramPlane/>
    </div>
    </div>
<div  className={`  m-2 p-2 ${visible ? 'h-auto' : ' h-[92px]  '} font-khameneiiRegular text-justify overflow-hidden text-black `}>
    <div onClick={(p)=>{
     setVisible(!visible)
    }}>
     {item.text_clean}
    </div>
    <div>
    <p></p>
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
  <div className=' p-1 font-bold flex flex-row items-center '>
  {icon} 
  <div style={{color : 'gray'}}>
  {item.number_of_news}
  </div>   
  </div>
</div>
</div>
   </>
))  
  )
}

export default KhabarHotTelegram