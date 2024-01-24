import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Col} from 'antd'
import { GrFormView } from "react-icons/gr";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useLocation } from 'react-router-dom/dist';
import KhabarHotTelegram from '../components/KhabarHotTelegram';
import KhabarHotTwitter from '../components/KhabarHotTwitter';
import { IoCopy } from 'react-icons/io5';
function HotNews() {

  const location = useLocation()
  const {hot ,   online , privateData} = location.state
  const navigate = useNavigate()

  return (
    <Col lg={24}>
        <div onClick={()=> navigate(-1)} className='  flex flex-row m-1 p-1 text-white bg-red-500 sticky top-0 font-bold  justify-center rounded-lg'>
       
         اخبار داغ
        
        </div>

        <KhabarHotTelegram dataHotTelegram={hot.telegram_hot_news} icon={<IoCopy fontSize={16} style={{marginBottom : 3 ,  marginLeft:1, color : 'gray'}}/>} />
        <KhabarHotTwitter dataHotTwitter={hot.twitter_hot_news}/>
        
        </Col>
  )
}

export default HotNews