import React from 'react'
import {Col} from 'antd'
import { GrFormView } from "react-icons/gr";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom/dist';
import KhabarOnlineTelegram from '../components/KhabarOnlineTelegram';
import KhabarOnlineTwitter from '../components/KhabarOnlineTwitter';
import KhabarInstagram from '../components/KhabarInstagram';
function LiveNews() {

  const location = useLocation()
  const navigate = useNavigate()

  const { online } = location.state
  return (
    <Col lg={24}>
    <div onClick={()=> navigate(-1)} className='  flex flex-row m-1 p-1 text-white bg-green-500 sticky top-0 font-bold  justify-center rounded-lg'>
   
     اخبار لحظه ای
    
    </div>

    <KhabarOnlineTelegram dataOnlineTelegram={online.telegram_online_news} icon={<GrFormView fontSize={25} style={{marginBottom : 3 , color : 'gray'}}/> } />
    <KhabarOnlineTwitter dataOnlineTwitter={online.twitter_online_news} icon={<GrFormView fontSize={25} style={{marginBottom : 3 , color : 'gray'}}/> }/>
    <KhabarInstagram data={online.instagram_online_news}/>
    </Col>
  )
}

export default LiveNews