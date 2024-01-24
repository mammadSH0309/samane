import React from 'react'
import {Col} from 'antd'
import { GrFormView } from "react-icons/gr";
import { FaRegCalendarAlt } from "react-icons/fa";
import KhabarOnlineTelegram from '../components/KhabarOnlineTelegram';
import KhabarOnlineTwitter from '../components/KhabarOnlineTwitter';
import KhabarInstagram from '../components/KhabarInstagram';
import { useLocation, useNavigate } from 'react-router-dom/dist';


function PrivateNews() {

const location = useLocation()
 const { dataPrivate } = location.state
 const navigate = useNavigate()

  return (
    <Col lg={24}>
        <div onClick={()=> navigate(-1)} className='  flex flex-row m-1 p-1 text-white bg-blue-500 sticky top-0 font-bold  justify-center rounded-lg'>
       
         اخبار اختصاصی
        
        </div>

        <KhabarOnlineTelegram dataOnlineTelegram={dataPrivate.telegram_private_news} icon={<GrFormView fontSize={25} style={{marginBottom : 3 , color : 'gray'}}/> } />
          <KhabarOnlineTwitter dataOnlineTwitter={dataPrivate.twitter_private_news} icon={<GrFormView fontSize={25} style={{marginBottom : 3 , color : 'gray'}}/> }/>
          <KhabarInstagram data={dataPrivate.instagram_private_news}/>
        </Col>
  )
}

export default PrivateNews