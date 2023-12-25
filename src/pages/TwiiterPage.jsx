import React, { useState } from 'react'
import { Col, Row, Skeleton } from 'antd'
import PieCharts from '../components/PieCharts'
import BarCharts from '../components/BarCharts'
import CircleCharts from '../components/CircleCharts'
import SwarmCharts from '../components/SwarmCharts'
import {useGetChartsDayTwitterQuery , useGetChartsMonthTwitterQuery, useGetEhsasTelegramNewsHeatMapQuery, useGetEhsasTelegramNewsParallelQuery, useGetEhsasTelegramNewsPerMonthQuery, useGetEhsasTelegramNewsPerYearQuery, useGetEhsasTelegramNewsQuery } from '../query/Charts'
import Khabar from '../components/Khabar'
import HeatCharts from '../components/HeatCharts'
import ParallelCharts from '../components/ParallelCharts'


function TwiiterPage() {

    
    
    const {data:chartDay ,  isLoading : loadingTwiiterDay} = useGetChartsDayTwitterQuery('ChartDayTwitter')
    // const {data:chartMonth  , isLoading:loadingTwiiterMonth} = useGetChartsMonthTwitterQuery('ChartMonthTwitter')
    // const {data:dataEhsasTelegram , isLoading:loadingEhsasTelegram} = useGetEhsasTelegramNewsQuery('ehsasTelegram')
    const {data:dataEhsasTelegramYear , isLoading:loadingEhsasTelegramYear} = useGetEhsasTelegramNewsPerYearQuery('ehsasTelegramYear')
    const {data:dataEhsasTelegramMonth , isLoading: loadingEhsasTelegramMonth} = useGetEhsasTelegramNewsPerMonthQuery()
    const {data:dataEhsasTelegramHeatMap , isLoading:loadingEhsasTelegramHeatMap} = useGetEhsasTelegramNewsHeatMapQuery()
    const{data:dataEhsasTelegramParallel , isLoading :loadingEhsasTelegramParallel} = useGetEhsasTelegramNewsParallelQuery()
    const [valueRadio ] = useState(1)


    if(loadingTwiiterDay){
    return(
    <Row className=' p-2'>
            <Col xs={24} sm={24} md={12} lg={10} xl={12}  >
                <div className='h-96 shadow-lg bg-white rounded-lg m-2'>
                    <Skeleton active />
                </div>
            </Col>
            <Col xs={24} sm={24}  md={12} lg={10} xl={12}  >
                <div className='h-96 shadow-lg  bg-white rounded-lg m-2'>
                   <Skeleton active /> 
                </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className='h-96 shadow-lg m-2 bg-white rounded-lg'>
                    <Skeleton active />
                </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className='h-96 shadow-lg m-2 bg-white rounded-lg'>
                    <Skeleton active />
                </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                <div className='h-96 shadow-lg m-2 bg-white rounded-lg'>
                <Skeleton active />
                </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={16}>
               <Skeleton active />
            </Col>
        </Row>
    )
}else{
    return( 
        <>
        <Row className=' p-2'>
            <Col xs={24} sm={24} md={12} lg={10} xl={12}  >
                <div className='h-96 shadow-lg bg-white rounded-lg m-2'>
                <div className='flex flex-row mr-5 pt-5 justify-between text-lg'>
                <div>موجودیت سنج</div>
                </div> 
                    <SwarmCharts data={dataEhsasTelegramMonth} isLoading={loadingEhsasTelegramMonth}/>
                </div>
            </Col>
            <Col xs={24} sm={24}  md={12} lg={10} xl={12}  >
            <div className='h-96 shadow-lg m-2 bg-white rounded-lg'>
                <div className='flex flex-row mr-5 pt-5 justify-between text-lg'>
                <div className=''>جریان سنج</div>
                </div>
                <HeatCharts data={dataEhsasTelegramHeatMap} isLoading={loadingEhsasTelegramHeatMap}/>
                
            </div>
               
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className='h-96 shadow-lg  bg-white rounded-lg m-2'>
                   <ParallelCharts data={dataEhsasTelegramParallel} isLoading={loadingEhsasTelegramParallel} />
               </div>
                
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className='h-96 shadow-lg m-2 bg-white rounded-lg'>
                <div className='flex flex-row m-2 justify-between text-lg'>
                </div>
                <BarCharts data={dataEhsasTelegramYear} isLoading={loadingEhsasTelegramYear} valueLayout={valueRadio} title={"رسانه سنج"}  />
                   
                </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                <div className='h-96 shadow-lg m-2 bg-white rounded-lg'>
                    <PieCharts data={chartDay}/>
                </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={16}>
               <Khabar/>
            </Col>
            {/* <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className='h-96 shadow-lg m-2 pt-12 bg-white rounded-lg'>
                    <LineCharts data={dataEhsasTelegram} isLoading={loadingEhsasTelegram} />
                </div>
            </Col> */}
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className='h-96 shadow-lg m-2 pt-12 bg-white rounded-lg'>
                    <CircleCharts/> 
                </div>
            </Col>
        </Row>
        
        </>

            
    )
}
}
  





export default TwiiterPage



