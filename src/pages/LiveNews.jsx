import React from 'react'
import {Col} from 'antd'
import { GrFormView } from "react-icons/gr";
import { FaRegCalendarAlt } from "react-icons/fa";
function LiveNews() {
  return (
    <Col lg={24}>
    <div className='  flex flex-row m-1 p-1 text-white bg-green-500 sticky top-0 font-bold  justify-center rounded-lg'>
   
     اخبار لحظه ای
    
    </div>

    <div className='  m-1 border border-black bg-white  rounded-md '>
        <div className='p-1 m-1 font-bold text-black'>
        🔰 کانال در استان
        </div>
    <div className={`  m-2 p-2  animate duration-75 h-auto font-khameneiiRegular text-justify overflow-hidden text-black `}>
        <div >
     
        </div>
        <div>
       
        </div>
    </div>
    <div className='flex flex-row justify-between mx-2 my-2 items-center  '>
      <div className=' p-1 font-bold flex flex-row items-top align-middle'>
       <div >
       <FaRegCalendarAlt fontSize={16} style={{marginLeft : 5 , marginTop : 2 , color : 'gray'}}/>
       </div>
      <div style={{marginTop : '2px' , color : 'gray'}}>
      1400/01/01
      </div>
      </div>
      <div className=' p-1 font-bold flex flex-row items-center '>
      <GrFormView fontSize={25} style={{marginBottom : 3 , color : 'gray'}}/> 
      <div style={{color : 'gray'}}>
      12K
      </div>   
      </div>
    </div>
    </div>
    </Col>
  )
}

export default LiveNews