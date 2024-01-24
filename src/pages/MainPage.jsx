import {  Col, Row, Select } from 'antd'
import React, { useEffect } from 'react'

import {Input , initTE} from 'tw-elements'
import { FaLocationDot } from "react-icons/fa6";
import { useGetEhsasTelegramNewsQuery } from '../query/Charts'
import { GrFormView } from "react-icons/gr";

import { TbReportSearch } from "react-icons/tb";

import {  Outlet, useLocation, useNavigate } from 'react-router-dom'
import { MdContentPaste } from "react-icons/md";

import AsliPage from '../components/AsliPage';
import { useLoginMutation } from '../query/Auth/AuthSlice';

initTE({Input})
function MainPage() {

    const styleCard = {
        width: 30 , height : 30 , color : '#5389ec'  , fontSize : '34px'
       } 
      const navigate = useNavigate()
      const path = useLocation()
      const access = localStorage.getItem('access')
       const {data: auth} = useLoginMutation()
   

     
      // useEffect(()=>{
      //   if(path.pathname.split('/')[3]==undefined){
      //     navigate('telegram')
      //   }
      // })
     

       const {data , isLoading} = useGetEhsasTelegramNewsQuery('ehsasTelegram')
  return (
    <>
        <Row className='p-5 flex justify-center  ' >
        {/* <div class="flex flex-row justify-center gap-3 ">
        
        <Link  to={'twitter'}  className='hover:text-black'>
        <FaXTwitter   className={`w-[60px] h-[60px] transition-all shadow-sm rounded-full  ${path.pathname.split('/')[3]=='twitter' ? 'w-[100px] bg-yellow-500' : ''}   hover:w-[100px]       ease-in-out  hover:bg-yellow-500 duration-300 `} />
          </Link>
        
        
        <Link to={'instagram'} color='red ' className='hover:text-black'>
        <LiaInstagram className={`w-[60px] h-[60px] transition-all shadow-sm rounded-full  ${path.pathname.split('/')[3]=='instagram' ? 'w-[100px] bg-yellow-500' : ''}   hover:w-[100px]       ease-in-out  hover:bg-yellow-500 duration-300 `}/>
        </Link>
        <Link to={'telegram'}  className='hover:text-black' >
        <LiaTelegramPlane className={`w-[60px] h-[60px] transition-all shadow-sm rounded-full  ${path.pathname.split('/')[3]=='telegram' ? 'w-[100px] bg-yellow-500' : ''}   hover:w-[100px]       ease-in-out  hover:bg-yellow-500 duration-300 `}/>
        </Link>
        <Link to={'bale'} >
        <img  src={logo} className='w-[60px] h-[60px] transition-all shadow-sm rounded-full  hover:w-[100px]    ease-in-out  hover:bg-yellow-500 duration-300'/>
        </Link>
        </div> */}
            {/* <Col lg={4} xl={4} md={8} sm={4} > 
              <Cards  to={'twitter'} icon={<FaXTwitter style={styleCard}/>}/> 
            </Col>dddddddddd

            <Col lg={4} xl={4} md={8} sm={4}> 
              <Cards  to={'telegram'}  icon={<FaTelegram style={styleCard}/>} />  
            </Col>

            <Col lg={4} xl={4} md={8} sm={4}>
            <Cards    to={'instagram'}  icon={<FaInstagram style={styleCard}/>}/>   
            </Col>

            <Col lg={4} xl={4}  md={8} sm={4}> 
            <Cards icon={<FaTelegram style={styleCard}/>}/>   
            </Col>

            <Col lg={4} xl={4} md={8} sm={4}>
            <Cards icon={<FaTelegram style={styleCard}/>}/>   
            </Col>

            <Col lg={4} xl={4} md={8} sm={4}>
            <Cards icon={<FaTelegram style={styleCard}/>}/>   
            </Col> */}
          </Row>
          

          <AsliPage/>

          <Row className='mx-56  mt-10 mb-8'>
            
            <div className='flex flex-col w-full '>
            <div className='text-2xl'>
              داده نما
            </div>
            <div className='mt-2 grid grid-cols-4  bg-white  gap-6  flex-wrap w-full items-start border border-light  rounded-md "'>
              <div className='flex  flex-row gap-2 p-2 items-center m-3'>
                <span><MdContentPaste fontSize={40} style={{color : 'gray'}}/></span>
                <span  className='w-24'style={{color : 'gray'}}>۱,۱۴۶,۷۲۱ محتوا</span>
                <span className='mr-6'>|</span>
              </div>

              
              <div className='flex  flex-row gap-2 p-2 items-center m-3'>
                <span><FaLocationDot fontSize={38} style={{color : 'gray'}}/></span>
                <span  className='w-24'style={{color : 'gray'}}>۱۱۳,۵۰۲ محتوای استانی</span>
                <span className='mr-6'>|</span>
              </div>

              <div className='flex  flex-row gap-2 p-2 items-center m-3'>
                <span><TbReportSearch fontSize={39} style={{color : 'gray'}}/></span>
                <span className='w-24'style={{color : 'gray'}}>۳۴۱ گزارش رصدی</span>
                <span className='mr-6'>|</span>
              </div>


              <div className='flex  flex-row gap-2 p-2 items-center m-3'>
                <span><GrFormView fontSize={43} style={{color : 'gray'}}/></span>
                <span style={{color : 'gray'}}>۱۷,۸۰۲,۱۳۱ بازدید</span>
                
              </div>
            </div>
            </div>
            
          </Row>
          
          


        <Outlet/>
    </>
  )
}

export default MainPage





// <div className='flex flex-col w-full'>
//             <div>
//               تایتل
//             </div>
//             <div className='mt-2  flex flex-row gap-6  flex-wrap w-full items-start border border-light  rounded-md "'>
//               <div className='flex after:content-["||"] flex-row gap-2 p-2 m-3'>
//                 <span>ایکون</span>
//                 <span>12321312 بازدید</span>
//               </div>
//               <div className='flex flex-row gap-2 p-2 m-3'>
//                 <div>1</div>
//                 <div className=''>
//                   2

//                 </div>
//               </div>
//               <div className='flex flex-row gap-2 p-2 m-3'
//               > 
//                 3
//                 </div>
//             </div>
//             </div>