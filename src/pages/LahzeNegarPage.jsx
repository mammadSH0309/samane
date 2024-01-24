import { Col, Divider, Row } from 'antd'
import React, { useState } from 'react'
import { GrFormView } from "react-icons/gr";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useGetTelegramNewsHotQuery, useGetTelegramNewsOnlineQuery, useGetTelegramNewsPrivateQuery } from '../query/Charts';
import { Skeleton } from '@mui/material';

import { IoCopy } from "react-icons/io5";
import { LiaTelegramPlane } from "react-icons/lia";
import { useGetHotNewsQuery, useGetOnlineNewsQuery, useGetPopularNewsQuery, useGetPrivateNewsQuery } from '../query/Charts/KhabarApi';
import KhabarHotTelegram from '../components/KhabarHotTelegram';
import KhabarHotTwitter from '../components/KhabarHotTwitter';
import KhabarOnlineTelegram from '../components/KhabarOnlineTelegram';
import KhabarOnlineTwitter from '../components/KhabarOnlineTwitter';
import KhabarInstagram from '../components/KhabarInstagram';
import CardKhabarSlider from '../components/CardKhabarSlider';
import Search from 'antd/es/input/Search';
function LahzeNegarPage() {


 const {data:dataOnline , isLoading:loadingOnline , isSuccess:successOnline} = useGetOnlineNewsQuery('Online' , {pollingInterval : 20000}                                                                                                                                                                               ) 
 const {data:dataPrivate , isLoading:loadingPrivate , isSuccess:successPrivate} = useGetPrivateNewsQuery('Online' , {pollingInterval : 20000}) 
 const {data:dataHot, isLoading:loadingHot , isSuccess:successHot} = useGetHotNewsQuery('Online' , {pollingInterval : 20000}) 
 const {data:dataPop , isLoading : loadingPop , isSuccess: successPop} = useGetPopularNewsQuery();
 
  return (
    <>
    <Row className=' p-1 text-lg flex flex-row justify-center  '>
      
        <div className=' shadow-lg w-full flex flex-row justify-center rounded-sm pb-1'>
        <Search
      placeholder="جستجو"
      
      style={{
        width: 400,
      }}
    />
        </div>
    </Row>
    <Row className='bg-white h-screen overflow-y-scroll '>
        <Col lg={8}>
        <div className='  flex flex-row m-1 p-1 text-white bg-yellow-500 sticky top-0 font-bold  justify-center rounded-lg'>
          اخبار پرمصرف
        </div>
        {!loadingPop && successPop ? (
          <div className='mx-1 w-38'>
            <CardKhabarSlider/>
          </div>
        ) : (
          <></>
        )}
        <div className='  flex flex-row m-1 p-1 text-white bg-red-500 sticky top-0 font-bold  justify-center rounded-lg'>
        {!loadingHot && successHot ? (<Link to={'hotnews'} state={{hot : dataHot}}>
         اخبار داغ
        </Link>) : (
          <>
          </>
        )}
        </div>
        {!loadingHot && successHot ?  (
          <>
          <KhabarHotTelegram dataHotTelegram={dataHot.telegram_hot_news} icon={<IoCopy fontSize={16} style={{marginBottom : 3 ,  marginLeft:1, color : 'gray'}}/>} />
          <KhabarHotTwitter dataHotTwitter={dataHot.twitter_hot_news} />
          </>
        ) : (<>
        <div className='  m-1 border border-black bg-white  rounded-md '>
          <Skeleton className='m-2' animation='wave' height={150}/>
        </div>
        </>)
        }
        

        



        </Col>

        

        <Col lg={8}> 
        <div className=' flex flex-row font-bold   justify-center m-1 p-1  text-white bg-green-500 sticky top-0 rounded-lg'>
            {!loadingOnline && successOnline ? (
              <Link to={'livenews'} state={{online :dataOnline}} >
              اخبار لحظه ای
              </Link>
            ) : (
              <></>
            )}
        </div>
        {!loadingOnline && successOnline ?  (
          <>
          <KhabarOnlineTelegram dataOnlineTelegram={dataOnline.telegram_online_news} icon={<GrFormView fontSize={25} style={{marginBottom : 3 , color : 'gray'}}/> } />
          <KhabarOnlineTwitter dataOnlineTwitter={dataOnline.twitter_online_news} icon={<GrFormView fontSize={25} style={{marginBottom : 3 , color : 'gray'}}/> }/>
          <KhabarInstagram data={dataOnline.instagram_online_news}/>
          </>
        ) : (<>
        <div className='  m-1 border border-black bg-white  rounded-md '>
          <Skeleton className='m-2' animation='wave' height={150}/>
        </div>
        </>)
        }


        </Col>
        <Col lg={8}>
        <div className=' font-bold  justify-center flex flex-row m-1 p-1 text-white bg-blue-500  rounded-lg sticky top-0'>
            {!loadingPrivate && successPrivate ? (
              <Link to={'privatenews'} state={{dataPrivate : dataPrivate}} >
              اخبار اختصاصی
             </Link>
            ) : (<>
            </>)}
        </div>
        {!loadingPrivate && successPrivate ?  (
          <>
          <KhabarOnlineTelegram dataOnlineTelegram={dataPrivate.telegram_private_news} icon={<GrFormView fontSize={25} style={{marginBottom : 3 , color : 'gray'}}/> } />
          <KhabarOnlineTwitter dataOnlineTwitter={dataPrivate.twitter_private_news} icon={<GrFormView fontSize={25} style={{marginBottom : 3 , color : 'gray'}}/> }/>
          <KhabarInstagram data={dataPrivate.instagram_private_news}/>
          </>
        ) : (<>
        <div className='  m-1 border border-black bg-white  rounded-md '>
          <Skeleton className='m-2' animation='wave' height={150}/>
        </div>
        </>)
        }
      </Col>
    </Row>
    </>
  )
}

export default LahzeNegarPage