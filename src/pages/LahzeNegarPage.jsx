import { Col, Row } from 'antd'
import React, { useState } from 'react'
import { GrFormView } from "react-icons/gr";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useGetTelegramNewsHotQuery, useGetTelegramNewsOnlineQuery, useGetTelegramNewsPrivateQuery } from '../query/Charts';
import { Skeleton } from '@mui/material';
import EkhtesasNews from './EkhtesasNews';
function LahzeNegarPage() {

 const {data:dataOnline , isLoading:loadingOnline , isSuccess:successOnline} = useGetTelegramNewsOnlineQuery('Online' , {pollingInterval : 1000}) 
 const {data:dataPrivate , isLoading:loadingPrivate , isSuccess:successPrivate} = useGetTelegramNewsPrivateQuery('Online' , {pollingInterval : 1000}) 
 const {data:dataHot, isLoading:loadingHot , isSuccess:successHot} = useGetTelegramNewsHotQuery('Online' , {pollingInterval : 1000}) 
  
  const [visible,setVisible] = useState(true);
  return (
    <>
    <Row className=' p-1 text-lg flex flex-row justify-center  '>
        <div className=' shadow-lg w-full flex flex-row justify-center rounded-sm'>
          لحظه نگار
        </div>
    </Row>
    <Row className='bg-white h-screen overflow-y-scroll '>
        <Col lg={8}>
        <div className='  flex flex-row m-1 p-1 text-white bg-red-500 sticky top-0 font-bold  justify-center rounded-lg'>
        <Link to={'hotnews'}>
         اخبار داغ
        </Link>
        </div>
        {!loadingHot && successHot ? dataHot.map((item , index)=> (
          <div className='  m-1 border border-black bg-white  rounded-md '>
            <div className='p-1 m-1 font-bold text-black'>
            {item.channel_name}   
            </div>
        <div className={`  m-2 p-2 ${visible ? 'h-24' : ' animate duration-75 h-auto'} font-khameneiiRegular text-justify overflow-hidden text-black `}>
            <div onClick={(p)=>{setVisible(!visible)}}>
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
          <GrFormView fontSize={25} style={{marginBottom : 3 , color : 'gray'}}/> 
          <div style={{color : 'gray'}}>
          {item.views_post}
          </div>   
          </div>
        </div>
        </div>

        )) : (<>
        <div className='  m-1 border border-black bg-white  rounded-md '>
          <Skeleton className='m-2' animation='wave' height={150}/>
        </div>
        </>)}
        

        



        </Col>



        <Col lg={8}> 
        <div className=' flex flex-row font-bold   justify-center m-1 p-1  text-white bg-green-500 sticky top-0 rounded-lg'>
            <Link to={'livenews'} >
            اخبار لحظه ای
            </Link>
        </div>
        {!loadingOnline && successOnline ? dataOnline.map((item , index)=>(
          <div className='  m-1 border border-black bg-white  rounded-md '>
          <div className='p-1 m-1 font-bold text-black'>
             {item.channel_name}
          </div>
      <div className=' m-2 p-2 h-24 font-khameneiiRegular text-justify overscroll-y-contain overflow-y-auto text-black '>
          
   {item.text_clean}
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
        <GrFormView fontSize={25} style={{marginBottom : 3 , color : 'gray'}}/> 
        <div style={{color : 'gray'}}>
        {item.views_post}
        </div>   
        </div>
      </div>
      </div>
        )) : (<>
        <div className='  m-1 border border-black bg-white  rounded-md '>
          <Skeleton className='m-2' animation='wave' height={150}/>
        </div>
        </>)}


        </Col>
        <Col lg={8}>
        <div className=' font-bold  justify-center flex flex-row m-1 p-1 text-white bg-blue-500  rounded-lg sticky top-0'>
            <Link to={'ekhtesasnews'} state={EkhtesasNews} >
             اخبار اختصاصی
            </Link>
        </div>

        {!loadingPrivate && successPrivate ? dataPrivate.map((item , index)=>(
          <div className='  m-1 border border-black bg-white  rounded-md '>
          <div className='p-1 m-1 font-bold text-black'>
          {item.channel_name}   
          </div>
      <div className=' m-2 p-2 h-24 font-khameneiiRegular text-justify overscroll-y-contain overflow-y-auto text-black '>
        {item.text_clean}   
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
        <GrFormView fontSize={25} style={{marginBottom : 3 , color : 'gray'}}/> 
        <div style={{color : 'gray'}}>
        {item.views_post}
        </div>   
        </div>
      </div>
      </div>
        )) : (<>
        <div className='  m-1 border border-black bg-white  rounded-md '>
          <Skeleton className='m-2' animation='wave' height={150}/>
        </div>
        </>)}

      </Col>
    </Row>
    </>
  )
}

export default LahzeNegarPage