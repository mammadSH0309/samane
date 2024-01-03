import { Col, Divider, Row } from 'antd';
import React, { useState } from 'react'
import { Outlet, useOutletContext, useParams } from 'react-router-dom'
import { GrFormView } from "react-icons/gr";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineAddReaction } from "react-icons/md";
import { Skeleton } from '@mui/material';
import StackedChart from './../components/StackedChart';
import { useGetTelegramNewsOstanEhsasQuery, useGetTelegramNewsOstanHeatMapQuery, useGetTelegramNewsTolidMasrafQuery } from '../query/Charts';
import LineChartApex from '../components/LineChartApex';
import HeatCharts from '../components/HeatCharts';
import { ResponsiveHeatMap } from '@nivo/heatmap';

function AkhbarCityPage() {

  
    const [data , params] = useOutletContext();
  const {data : dataEhsas , isLoading :loadingEhsas , isSuccess:successEhsas} = useGetTelegramNewsOstanEhsasQuery(params.get('ostan'))
  const {data:dataTolid , isLoading:loadingTolid , isSuccess:successTolid} = useGetTelegramNewsTolidMasrafQuery(params.get('ostan'))
  const {data:dataHeatMap , isLoading : loadingHeatMap , isSuccess : successHeatMap} = useGetTelegramNewsOstanHeatMapQuery(params.get('ostan') || '')
 
  console.log(dataHeatMap)
  console.log(params.get('ostan'))
  return (
   <Row >
    <Col lg={12} className='m-2 p-1 mr-5'>
    <div className='  flex flex-row h-9  text-lg  text-white bg-yellow-500 align-middle items-center    justify-center rounded-md'>
        
          داده نما
        
     </div>
     <Divider>
         احساسات سنج
      </Divider>
      {!loadingEhsas && successEhsas ? <StackedChart data={dataEhsas} params={params.get('ostan')}/> : (<>
        <div className="mixed-chart mt-1 p-5 w-full  border border-black bg-white shadow-md sm:rounded-lg  ">
        <Skeleton variant="rectangular" height={118} />
        </div>
      
      </>)}
      <div className='  flex flex-row  text-lg  text-white  justify-center rounded-md'>
        <Divider>
          روند مصرف
        </Divider>
     </div>
      {!loadingTolid && successTolid ? <LineChartApex data={dataTolid} params={params.get('ostan')}/> : (<>
        <div className="mixed-chart mt-1 p-5 w-full  border border-black bg-white shadow-md sm:rounded-lg  ">
        <Skeleton variant="rectangular" height={118} />
        </div>
      </>)}
      <div className='  flex flex-row  text-lg  text-white  justify-center rounded-md'>
        <Divider>
          روند 
        </Divider>
     </div>
     {!loadingHeatMap && successHeatMap ? (
      <div className='h-96 mt-1 p-5 w-full  border border-black bg-white shadow-md sm:rounded-lg '>
       <ResponsiveHeatMap
    theme={{
        text : {
            fontFamily : 'khameneiiRegular'
        },
        axis : {
            legend : {
                text : {
                    fontSize : 15 ,
                    fill: "black",
                }
            }
        }
    }}
    data={dataHeatMap}
    margin={{ top: 75, right: 30, bottom: 80, left: 80 }}
   
    xOuterPadding={0.10}
    yOuterPadding={0.10}
    axisTop={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -90,
        legend: '',
        legendOffset: 46
    }}
    
    axisLeft={{
        tickSize: 5,
        tickPadding: 35,
        tickRotation: 0,
        legend: 'جریان',
        legendPosition: 'middle',
        legendOffset: -65
    }}
    colors={{
        type: 'diverging',
        scheme: 'blue_green',
        divergeAt: 0.5,
        minValue: 0,
        maxValue: 10
    }}
    emptyColor="#555555"
    legends={[
        {
            anchor: 'bottom',
            translateX: 0,
            translateY: 30,
            length: 400,
            thickness: 8,
            direction: 'row',
            tickPosition: 'after',
            tickSize: 5,
            tickSpacing: 4,
            tickOverlap: false,
            title: 'بازه',
            titleAlign: 'start',
            titleOffset: 4
        }
    ]}
/>

      </div>
     ): (<>
        <div className="mixed-chart mt-1 p-5 w-full  border border-black bg-white shadow-md sm:rounded-lg  ">
        <Skeleton variant="rectangular" height={118} />
        </div>
      </>)}
    </Col>
    <Col lg={11} className='m-1 p-1 mr-3 mt-2'>
     <div className='  flex flex-row  text-lg h-9  text-white bg-yellow-500  align-middle items-center    justify-center rounded-md'>
        اخبار انتخابات
     </div>
     
     {data?.news?.map((item , index)=>(
        <div key={index} className='  m-1 border border-black bg-white  rounded-md '>
        <div className='p-1 m-1 font-bold text-black'>
         {item.channel_name } 
        </div>
    <div className={`  m-2 p-2 'h-24' font-khameneiiRegular text-justify overflow-hidden text-black `}>
        <div >
        {item.text_clean}
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
      <div className=' p-1 font-bold flex flex-row items-center  '>
      <div className='flex flex-row justify-center align-middle items-center'>
      <GrFormView fontSize={25} style={{marginBottom : 3 , color : 'gray' , marginTop: 3}}/> 
      <div style={{color : 'gray'}} className='mt-1'>
      {item.views_post}
      </div>
      </div>
      <div className='flex flex-row mr-5  items-center'>
      <MdOutlineAddReaction fontSize={16} style={{color : 'gray'}}/>
      <div className='items-center justify-center mt-1 mr-1' style={{color : 'gray'}}>
      {item.reaction}  
      </div> 
      </div> 
      </div>
    </div>
    </div>
       ))
     }
    </Col>
    <Outlet/>
   </Row>
  )
}

export default AkhbarCityPage