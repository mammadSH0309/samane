import { Card, ConfigProvider } from 'antd'
import React, { useState } from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import {Link, useLocation} from 'react-router-dom'

function Cards({to , icon}) {
    

  const location = useLocation();
  const path = location.pathname.split('/')[2]
  

 
  return (
    <ConfigProvider
    > 
        <Link to={to}>
         
        <Card className='lg:w-[150x]'
          hoverable
          size='small'
          style={{ marginRight : 5 , }}
        >
          <div className='flex flex-row gap-5' >
            {icon}
            <div className='flex flex-col'>
              <p >کل مطلب</p>
              <p>123121231</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <p>کل مطلب</p>
            <p>123123123123</p>
          </div>
        </Card>
    </Link>
    </ConfigProvider>
  )
}

export default Cards



{/* <Card   
hoverable
size='small'
style={{
  width : '100%',
}}
className='border-white w-32 rounded-lg shadow-2xl '
>
 <div className='flex flex-row justify-center  items-center pb-1   '>
  <FaTelegramPlane style={{width : 80 ,height : 80 }} className = ' bg-green-200 opacity-70   p-4 shadow-xl border-2   border-solid justify-around rounded-lg '/>
 </div> 
 <div className='flex flex-row p-2 font-bold'>
    تلگرام
 </div>
 <div className='flex flex-row justify-between p-2'>
    <div>1</div>
    <div>2</div>
 </div>
</Card> */}