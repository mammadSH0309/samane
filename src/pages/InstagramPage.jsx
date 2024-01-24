import React, { useState } from 'react'
import { Col, Row, Skeleton } from 'antd'
import PieCharts from '../components/PieCharts'
import Chart from 'react-apexcharts'
import BarCharts from '../components/BarCharts'
import CircleCharts from '../components/CircleCharts'
import SwarmCharts from '../components/SwarmCharts'

import HeatCharts from '../components/HeatCharts'
import ParallelCharts from '../components/ParallelCharts'
import BubbleChartApex from '../components/BubbleChartApex'
import StackedColumnsCharts from '../components/StackedColumnsCharts'
import PieChart from '../components/PieChart'
import dataSwarm from './data/dataSwarm'
import dataHeat from './data/dataHeat'
import LineCharts from '../components/LineCharts'
import dataEhsas from './data/dataEhsa'
import { Divider } from '@mui/material'
import RadarChart from '../components/RadarChart'
import { useGetInstagramBarChartQuery, useGetInstagramBubbleChartQuery, useGetInstagramEhsasChartQuery, useGetInstagramHeatChartQuery, useGetInstagramPieChartQuery, useGetInstagramRadarDoQuery, useGetInstagramRadarYekQuery, useGetInstagramStackedChartQuery, useGetInstagramSwarmChartQuery, useGetTelegramEhsasQuery } from '../query/Charts'

// روند تولید و مصرف موضوعات مهم کشور در 24 ساعت اخیر چگونه بوده است
function InstagramPage() {


  
    const {data :dataBubble , isLoading : loadingBubble , isSuccess : successBubble} = useGetInstagramBubbleChartQuery('Online' , {pollingInterval : 5000000})
    const {data : dataBar , isLoading : loadingBar , isSuccess : successBar} = useGetInstagramBarChartQuery('Online' , {pollingInterval : 50000})
    const {data : dataPie , isLoading : loadingPie , isSuccess : successPie} = useGetInstagramPieChartQuery('Online' , {pollingInterval : 50000})
    const {data : dataSwarm, isLoading : loadingSwarm , isSuccess:successSwarm} = useGetInstagramSwarmChartQuery('Online' , {pollingInterval : 50000})
    const {data : dataStacked , isLoading : loadingStacked , isSuccess : successStacked} = useGetInstagramStackedChartQuery('Online' , {pollingInterval : 50000})
    const {data : dataHeat , isLoading:loadingHeat , isSuccess : successHeat} = useGetInstagramHeatChartQuery('Online' , {pollingInterval : 50000})
    const {data : dataRadarYek , isLoading : loadingRadarYek , isSuccess : successRadarYek} = useGetInstagramRadarYekQuery('Online' , {pollingInterval : 50000})
    const {data : dataRadarDo , isLoading : loadingRadarDo , isSuccess : successRadarDo} = useGetInstagramRadarDoQuery('Online' , {pollingInterval : 50000})
    const {data : dataEhsas , isLoading:loadingEhsas , isSuccess: successEhsas} = useGetInstagramEhsasChartQuery('Online' , {pollingInterval : 50000})



    

    return( 
        <>
        <Divider  orientation='left'   style={{fontSize: 15 }} className='px-5'>
        روند تولید و مصرف موضوعات مهم کشور در 24 ساعت اخیر چگونه بوده است؟
        </Divider> 
        <Row className=' m-3 h-96  border border-black  rounded-lg  p-8 '>
           
        <Col lg={9} xl={9} className=''>
       
        {!loadingBar && successBar ? (
           
             
             <Chart
  
             options={{
                fill : {
                    colors : ['#FFC300' , '#96DDD9'],
                },
               responsive : [
                   {
                       breakpoint : 1700,
                       options : {
                           chart: {
                               width : '100%'
                           }
                           
                       }
                   },
               ],
               dataLabels : {
                   enabled : false,
                   
               },
               
               chart: {
                   id: "basic-bar" , 
                  
                   
                 },
                 xaxis: {
               
                   categories: dataBar?.keyword,
                   offsetY : 10,
                   offsetX : -5 , 
                   labels : {
                       style : {
                           fontFamily : 'khameneiiRegular'
                       },
                   rotate : 45,   /// farsi = -45
                   maxHeight : 80
               }
                 },
                 
                 yaxis : {
                    
                reversed : true , 
                   labels : {
                       style: {
                           fontFamily : 'khameneiiRegular'
                           },
                       maxWidth :100,
                           rotate : 0,
                           offsetX : -35
                   }
                  },
                 
                colors : ['#FF0000' , '#fa8072'],
                plotOptions: {
                bar: {
                  borderRadius: 4,
                   horizontal: true,
                 }
                },
                }}
             
                series={[
                {
                  name: "تعداد",
                    data: dataBar?.count
                }
               ]}
               type="bar"
               width="580"
               height='320'
               />
        ) : (
            <Skeleton variant="rectangular"  height={150}  className='p-2'    />
        )}
    
        </Col>
        <Col lg={15} xl={15}>
         
        {!loadingBubble && successBubble ? (
            <BubbleChartApex dataBubble={dataBubble}/>
        ) : (
            <Skeleton variant="rectangular"  height={150}  className='p-2'    />
        )} 
        
        </Col>
        
        </Row>

        <Row className='m-3'>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}  >
                <Divider   orientation='left'   style={{fontSize: 15 }} className='px-5'>
                راجع به هر شخص، چه میزان محتوا و با چه احساسی تولید شده است ؟
                </Divider>

                <div className='h-96  border border-black  rounded-lg  m-2 p-6 '>

                {!loadingSwarm && successSwarm ? (
                    <SwarmCharts  data={dataSwarm}/>
                ) : (
                    <Skeleton variant="rectangular"  height={150}  className='p-2'    />
                )}
                

                </div>


            </Col>   

            <Col xs={24} sm={24}  md={12} lg={12} xl={12}  >
            <Divider    orientation='left'   style={{fontSize: 15 }} className='px-5'>
            راجع به کدام نهادها، تولید محتوای بیشتری صورت پذیرفته است؟
            </Divider>
            <div className='h-96  border border-black  rounded-lg  m-2 p-6 '>
               
               {!loadingHeat && successHeat ? (
                 <HeatCharts data={dataHeat} min={0} max={1000}/>
               ) : (
                <Skeleton variant="rectangular"  height={150}  className='p-2'    />
               )}

            </div>
            
               
            </Col>
        </Row>
      

        <Row className='m-3    '>
            
        <Col xs={24} sm={24} md={12} lg={10} xl={9} xxl={9}>
        <Divider   orientation='left'   style={{fontSize: 15 }} className='px-5'>
        میزان تولیدات مثبت راجع به هر جریان چقدر است؟
        </Divider>
        
                
                
                 <div  className=' h-96 border border-black  rounded-lg  m-2 p-6 '>
                   {!loadingPie && successPie ?(
                    <PieChart dataPie={dataPie}/>
                   ) : (
                    <Skeleton variant="rectangular"  height={150}  className='p-2'    />
                   )}
                   </div>  
                
            </Col>

            <Col xs={24} sm={24} md={12} lg={14} xl={15} xxl={15}>
            <Divider   orientation='left'   style={{fontSize: 15 }} className='px-5'>
            سهم جریانات از تولید محتوا چقدر است؟
            </Divider>
               
                
                <div  className=' h-96 border border-black  rounded-lg  m-2 p-6 '>

                   {!loadingStacked && successStacked ? (
                    <StackedColumnsCharts dataStacked={dataStacked}/>
                   ) : (
                    <Skeleton variant="rectangular"  height={150}  className='p-2'    />
                   )}

                   </div>
                
            </Col>

        </Row>
       

        <Row className='m-3'>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} >
            <Divider   orientation='left'  style={{fontSize: 15 }} className='px-5'>
            روند احساسات تولیدی در یک هفته گذشته؟
            </Divider>
        <div className='h-96  border border-black   rounded-lg  m-2 p-6 '>

          {!loadingEhsas && successEhsas ? (
            <LineCharts data={dataEhsas} />
          ) : (
            <Skeleton variant="rectangular"  height={150}  className='p-2'    />     
          )}

           </div>
            </Col> 
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
        <Divider   orientation='left'  style={{fontSize: 15 }} className='px-5'>
        کدام صفحات به موضوع انتخابات بیشتر پرداخته اند؟


            </Divider>
            
            <Row className='h-96  border border-black   rounded-lg  m-2 p-6 items-center place-items-center'>
           <Col xs={24} sm={24} md={6} lg={12} xl={12} xxl={12} >
            {!loadingRadarYek && successRadarYek ? (
                <RadarChart dataRadar={dataRadarYek} height={400} width={350}/>
            ) : (
            <Skeleton variant="rectangular"  height={150}  className='p-2'    />  
            )}
            
           </Col>

          <Col xs={24} sm={24} md={6} lg={12} xl={12} xxl={12} className='items-center place-items-center ' >
          {!loadingRadarDo && successRadarDo ? (
                
                    <RadarChart dataRadar={dataRadarDo} height={400} width={350}/>
               
            ) : (
            <Skeleton variant="rectangular"  height={150}  className='p-2'    />  
            )}
            
          </Col>
           </Row>
            
        </Col>
           
        </Row>
        
        </>  
    
    )

}
  





export default InstagramPage



