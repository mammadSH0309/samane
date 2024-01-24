import React, { useState } from 'react'
import { GrFormView } from "react-icons/gr";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6'
import { IoCopy } from "react-icons/io5";
function KhabarHotTwitter({dataHotTwitter}) {
    const [visible,setVisible] = useState(true);
    const [id , setId] = useState(null);
  return (
    dataHotTwitter.map((item , index)=>(
        <div key={index} className='  m-1 border border-black bg-white  rounded-md '>
    <div className='p-1 m-1 font-bold text-black flex flex-row justify-between'>
    <div>{item.title}  </div>
    <div>
      <FaXTwitter/>
    </div>
    </div>
<div className={`  m-2 p-2 ${visible ? 'h-[92px]' : ' animate duration-75 h-auto'} font-khameneiiRegular text-justify overflow-hidden text-black `}>
    <div onClick={(p)=>{setVisible(!visible)}}>
     {item.description}
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
  {item.time}
  </div>
  </div>
  <div className=' p-1 font-bold flex flex-row items-center '>
  <IoCopy fontSize={17} style={{marginBottom : 3 , color : 'gray'}}/> 
  <div style={{color : 'gray'}}>
  {item.number_of_news}
  </div>   
  </div>
</div>
</div> 
    ))    
  )
}

export default KhabarHotTwitter