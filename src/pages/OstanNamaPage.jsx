import React from 'react'
import Map from '../components/Map'
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom'
import { useGetTelegramNewsOstanQuery } from '../query/Charts'
import { Col,  Row } from 'antd'
import TableAkhbar from '../components/TableAkhbar'
import BarChartApex from '../components/BarChartApex'
import { Divider, Skeleton } from '@mui/material'
import BubbleChartApex from '../components/BubbleChartApex'
import TableDataOstan from '../components/TableDataOstan'
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
        <Divider  textAlign='left'   style={{color:'gray'}}>
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