import { Col, Divider, Row, Select, Tabs } from 'antd';
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
import { useGetNewsEntekhabatQuery, useGetNewsKeshvarRealQuery, useGetNewsOstanQuery, useGetNewsRadarChartQuery } from '../query/Charts/KhabarApi';
import TableDataOstan from '../components/TableDataOstan';
import RadarChart from '../components/RadarChart';
import KhabarOstanCity from '../components/KhabarOstanCity';
import KhabarEntekhabOstan from '../components/KhabarEntekhabOstan';
import { IoIosSearch } from 'react-icons/io';


function AkhbarCityPage() {


  
  
const [data , params] = useOutletContext();
const {data : dataEhsas , isLoading :loadingEhsas , isSuccess:successEhsas} = useGetTelegramNewsOstanEhsasQuery(params.get('ostan'))
const {data:dataTolid , isLoading:loadingTolid , isSuccess:successTolid} = useGetTelegramNewsTolidMasrafQuery(params.get('ostan'))
const {data:dataHeatMap , isLoading : loadingHeatMap , isSuccess : successHeatMap} = useGetTelegramNewsOstanHeatMapQuery(params.get('ostan') || '')
const {data : dataKeshvar , isLoading : loadingKeshvar , isSuccess : successKeshvar} = useGetNewsKeshvarRealQuery(params.get('ostan') || '')
const {data : dataRadar , isLoading : loadingRadar , isSuccess :successRadar} = useGetNewsRadarChartQuery(params.get('ostan') || '');
const {data:dataEntekhab , isLoading : loadingEntekhab , isSuccess : successEntekhab} = useGetNewsEntekhabatQuery(params.get('ostan') || '');
const {data : dataOstan , isLoading : loadingOstan , isSuccess : successOstan} = useGetNewsOstanQuery(params.get('ostan') || '')
const [state , setState] = useState('ostan')
console.log(dataEntekhab)


  return (
   <Row >
    <Col lg={12} className='m-2 p-1 mr-5'>
    <div className='  flex flex-row h-9  text-lg  text-white bg-yellow-500 align-middle items-center    justify-center rounded-md'>
        
          داده نما
        
     </div>
     <Divider>
        آمار استان
      </Divider>

    {!loadingKeshvar && successKeshvar ? (

      <div className='border border-black rounded-md'>
        <TableDataOstan data={dataKeshvar}/>
      </div>
    ) : (
      <></>
    )}
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
        legend: 'موضوع',
        legendPosition: 'middle',
        legendOffset: -65
    }}
    colors={{
        type: 'diverging',
        scheme: 'blue_green',
        divergeAt: 0.5,
        minValue: 0,
        maxValue: 30
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
      <div className='  flex flex-row  text-lg  text-white  justify-center rounded-md'>
        <Divider>
        صفحات با کدام موضوعات بیشتر تولید محتوا کرده اند؟  
        </Divider>
     </div>
     {!loadingRadar && successRadar ? (
      <>
      <Col xl={24} lg={24} md={24} className='  mt-1 p-5 w-full   border border-black bg-white shadow-md sm:rounded-lg '>
      <RadarChart dataRadar={dataRadar} width={660} height={520} />
      </Col>
      </>
     ) : (
      <>
      <div className="mixed-chart mt-1 p-5 w-full  border border-black bg-white shadow-md sm:rounded-lg  ">
        <Skeleton variant="rectangular" height={118} />
        </div>
      </>
     )}
    </Col>
    
   
    <Col lg={11} className='m-2 p-1 mr-5'>
     <Row>
     <Col lg={12}>
      <button onClick={()=> setState('ostan')} draggable  className={`' flex flex-row w-72 mx-2 text-lg h-9 ${state === 'ostan' ?  ' transition duration-300  border-2 border-blue-600' : ''}  text-white bg-green-500  align-middle items-center justify-center   rounded-md'`}>
        اخبار استان
     </button>
      </Col>
      <Col lg={12}>
      <button onClick={()=> setState('entekhabat')} className={` flex flex-row w-72  mx-2 text-lg h-9  text-white bg-yellow-500 ${state === 'entekhabat' ?  ' transition duration-200 border-2 border-blue-600' : ''}   align-middle items-center justify-center   rounded-md`}>
        اخبار انتخابات
     </button>
    
      </Col>

     </Row>
     <Row className='flex flex-row justify-center'>
          <div className='flex flex-row gap-x-6  justify-center mx-52 items-center align-middle my-3  '>
            <div className='flex flex-row items-center justify-start gap-4 w-80 h-8   border bg-white  rounded-md'>
                <div className="flex items-center ps-3 ">
                  <span class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  >
                    <IoIosSearch/>
                  </span>
                </div>
                <input type="search" placeholder='جستجو' className='w-full h-full' />
            </div>
            <div>
            <Select 
            defaultValue='بازه زمانی'
            />
            </div>
          </div>
     </Row>
     {state === 'ostan' ? (
      !loadingOstan && successOstan ? (
        <>
        <KhabarOstanCity data={dataOstan}/>
        </>
      ): (
        <></>
      )
     ) : 
     !loadingEntekhab && successEntekhab ? (
      <KhabarEntekhabOstan data={dataEntekhab}/>
     ) : 
     (
      <>
      <div className="mixed-chart mt-1 p-5 w-full  border border-black bg-white shadow-md sm:rounded-lg  ">
        <Skeleton variant="rectangular" height={118} />
        </div>
      </>
     )
     }

     
    
    </Col>
    <Outlet/>
   </Row>
  )
}

export default AkhbarCityPage