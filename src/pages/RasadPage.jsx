import { Col, Divider, Row } from 'antd'
import React from 'react'
import CardKhabar from '../components/CardKhabar'
import BasteNama from '../components/BasteNama'
import { useGetAfkarQuery, useGetBasteNamaQuery,useGetMehvarNamaQuery, useGetRasadNamaQuery, useGetRevayatQuery } from '../query/Charts'
import { Skeleton} from 'antd';

import CardT from '../components/CardT'

import BubbleChat from '../components/BubbleChat'
import Accordion from '../components/Accordion'
import AfkarSanji from '../components/AfkarSanji'


function RasadPage() {
    // dataRasad
    // dataMehvar
    // dataBaste
  const {data:dataRasad , isLoading:loadingRasad } = useGetRasadNamaQuery()
  const {data:dataBaste, isLoading:loadingBaste } = useGetBasteNamaQuery()
  const {data:dataMehvar , isLoading:loadingMehvar } = useGetMehvarNamaQuery()
  const {data:dataRevayat , isLoading : loadingRevayat , isSuccess : successRevayat} = useGetRevayatQuery()
  const {data:dataAfkar , isLoading : loadingAfkar , isSuccess : successAfkar} = useGetAfkarQuery()
  
if(!loadingBaste && !loadingRasad && !loadingMehvar && !loadingAfkar)
{
   const lastData = dataBaste[0]
       
  return (
    <>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} >
          {!loadingRevayat && successRevayat ? (dataRevayat.map((dataAfkar , index)=>(
            <Accordion title={dataAfkar.title} des={dataAfkar.description} type={dataAfkar.type_packet} doc={dataAfkar.documents}/>
          ))) : (<>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          </>)}
        </Col>
      </Row>


      

      <Row className='m-3 gap-12 mt-3 h-auto   items-center  ' justify={'center'} align={'middle'}  >
       
      <Col lg={24} md={24} xl={18}>
          
           
          <CardKhabar 
            // title={item.title}
            // dec={item.description} 
            // important={item.important_level}
            // tag={item.subjecimport { Skeleton } from '@mui/material';

            // time={item.date_time_upload}
            />
        
        </Col>
        
     
       
      </Row>


      <div className=' ml-20 mr-20'>
      <Divider style={{color : 'gray'}} >
        <div className='text-xl'>
        بوم انتخاباتی 
        </div>
      </Divider>
      </div>

      <Row className='m-3 gap-5  mt-3   rounded-lg items-center h-auto flex flex-row justify-center '>
      {dataBaste?.map((item , index)=>(
      <Col lg={4} xl={5} md={24} key={index}>
        <BasteNama title={item.title} dec={item.description} time={item.date_time_upload} image={item.images} download={item.documents}/>
      </Col>
      ))}
      </Row>

      <div className=' ml-20 mr-20'>
      <Divider style={{color : 'gray'}} >
        <div className='text-xl'>
        شایعات
        </div>
      </Divider>
      </div>
      
      <Row  className='m-3 p-4   mt-1  flex flex-row h-96  rounded-lg   '>
        <Col xl={16}>
            <CardT/>
           
        </Col>
        <Col  xl={8}>
            <BubbleChat/>
            
        </Col>
      </Row>
   
    <Row >
    </Row>

    
    <div className=' ml-20 mr-20'>
      <Divider style={{color : 'gray'}} >
        <div className='text-xl'>
        افکار سنجی
        </div>
      </Divider>
      </div>

    <Col sm={5} lg={4} md={24} xl={24} className='m-3 mt-3 h-auto  rounded-lg    py-2'>
     <Row className='justify-items-center justify-center w-full gap-4 items-center text-center' >
     
       {!loadingAfkar && successAfkar ? (dataAfkar.map((dataAfkar , index)=>(
            <AfkarSanji title={dataAfkar.title} des={dataAfkar.description} type={dataAfkar.type_packet} doc={dataAfkar.documents} img={dataAfkar.images}/>
          ))) : (<>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          </>)}  
     
           
    </Row>  

       
       
    </Col>
    
        
    
    </>
    
  )
}
}

export default RasadPage