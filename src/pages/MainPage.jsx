import { Card, Col, Row } from 'antd'
import React from 'react'
import { FaInstagram, FaTelegram, FaTelegramPlane } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import Cards from '../components/Cards'
import { useGetEhsasTelegramNewsQuery } from '../query/Charts'
import LineCharts from '../components/LineCharts'
import { Outlet } from 'react-router-dom'

function MainPage() {

    const styleCard = {
        width: 30 , height : 30 , color : '#5389ec'  , fontSize : '34px'
       } 

       const {data , isLoading} = useGetEhsasTelegramNewsQuery('ehsasTelegram')
  return (
    <>
        <Row className='p-5' >
            <Col lg={4} xl={4} md={8} sm={4} > 
              <Cards  to={'twitter'} icon={<FaXTwitter style={styleCard}/>}/> 
            </Col>
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
            </Col>
          </Row>
          
          <div className='h-96  bg-white rounded-md border border-gray-200  mr-3 ml-3'>
          <div className='flex flex-row mr-3 pt-5 justify-between text-lg'>
                <div>احساسات سنج</div>
          </div>
          <LineCharts data={data} isLoading={isLoading}/>
          </div>
        <Outlet/>
    </>
  )
}

export default MainPage