import React from 'react'
import { Col, Row } from 'antd'
import PieCharts from '../components/PieCharts'
import BarCharts from '../components/BarCharts'
import CircleCharts from '../components/CircleCharts'
import LineCharts from '../components/LineCharts'
import SwarmCharts from '../components/SwarmCharts'
import { useGetChartsDayQuery, useGetChartsMonthQuery } from '../query/Charts'


function TwiiterPage() {
    
    const{data:chartDay , isLoading ,isSuccess} = useGetChartsDayQuery('ChartDay')
    const {data:chartMonth } = useGetChartsMonthQuery('ChartMonth')

if(isSuccess){
    return( 
        <>
        <Row className='mt-2 p-2'>
            <Col xs={24} sm={24} md={12} lg={10} xl={12}  >
                <div className='h-96 shadow-lg bg-white rounded-lg m-2'>
                    <SwarmCharts/>
                </div>
            </Col>
            <Col xs={24} sm={24}  md={12} lg={10} xl={12}  >
                <div className='h-96 shadow-lg  bg-white rounded-lg m-2'>
                    <CircleCharts/> 
                </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className='h-96 shadow-lg m-2 bg-white rounded-lg'>
                    <BarCharts data={chartDay}/>
                </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className='h-96 shadow-lg m-2 bg-white rounded-lg'>
                    <LineCharts/>
                </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                <div className='h-96 shadow-lg m-2 bg-white rounded-lg'>
                    <PieCharts data={chartDay}/>
                </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={16}>
                <div className='h-96 shadow-xl  m-2 p-5 gap-y-2 rounded-lg flex flex-col items-center bg-white '>
                    <div className='w-[98%] h-[33%]  shadow-lg  border border-collapse border-black '>
                        <div className=' flex-row justify-start p-2 m-1 rounded-t-lg rounded-r-lg bg-red-600 inline-flex'>
                            خبر داغ
                        </div>
                    </div>
                    <div className='w-[98%] h-[33%]   shadow-lg border border-black '>
                        <div className=' flex-row justify-start p-2 m-1 rounded-t-lg rounded-r-lg bg-red-600 inline-flex'>
                                خبر لحظه ای 
                            </div>
                        </div>
                    <div className='w-[98%] h-[32%]  shadow-lg border border-black '>
                        <div className=' flex-row justify-start p-2 m-1 rounded-t-lg rounded-r-lg bg-red-600 inline-flex'>
                                خبر داغ
                            </div>
                        </div>
                </div>
            </Col>
        </Row>
        
        </>

            
    )
}
}
  





export default TwiiterPage



