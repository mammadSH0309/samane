import React, { useEffect } from 'react'
import Map from '../components/Map'
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom'
import {IranMap } from "react-iran-map"
import { useGetTelegramNewsOstanQuery } from '../query/Charts'
import { Col, Divider, Row } from 'antd'
import TableAkhbar from '../components/TableAkhbar'
import BarChartApex from '../components/BarChartApex'
import { Skeleton } from '@mui/material'
function OstanNamaPage() {
const [params , setParams] = useSearchParams()

const navigate = useNavigate()

  const selectProvinceHandler = (e) => {
    navigate(`${e.name}`)
    
}


const {data  , isLoading , isSuccess} = useGetTelegramNewsOstanQuery(params.get('ostan') || '');

    return (
    <>
    <Row>
      <Col md={23} lg={24} xl={12} className='  mt-3'>
        <Divider orientation='left'  style={{color:'gray'}}>
           نسبت سنج
        </Divider>
        <div className='m-2'>

       <TableAkhbar
        data={data} isLoading={isLoading}  isSuccess={isSuccess} params={params} setParams={setParams}
        />
      </div>
       <div className='m-2'>

       <BarChartApex

       />
      </div>
      </Col>
        <Col md={24} lg={11} xl={11} className='p-2 w-screen '>
        <div className='font-khameneiiRegular  '>
        
         {!isLoading && isSuccess ? <Map data={data}  params={params} setParams={setParams} /> : (
          <>
          <div className='mx-10 my-10 w-full h-full '>
          <Skeleton variant="rectangular"  height={150}  />
          </div>
          </>
         )}
        </div>
        <div>
        </div>
        </Col>
    </Row>
  

    <div>
    {!isLoading && isSuccess ? <Outlet context={[data , params]}/> : <></>}
    </div>
    </>
  )
}

export default OstanNamaPage