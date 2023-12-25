import { Col, Row } from 'antd'
import React from 'react'
import CardKhabar from '../components/CardKhabar'
import BasteNama from '../components/BasteNama'
import { useGetBasteNamaQuery, useGetFakeNewsQuery, useGetMehvarNamaQuery, useGetRasadNamaQuery } from '../query/Charts'
import { Skeleton } from 'antd';
import BasteDownload from '../components/BasteDownload'
import MehvarNama from '../components/MehvarNama'
import CardT from '../components/CardT'


function RasadPage() {
    // dataRasad
    // dataMehvar
    // dataBaste
  const {data:dataRasad , isLoading:loadingRasad } = useGetRasadNamaQuery()
  const {data:dataBaste, isLoading:loadingBaste } = useGetBasteNamaQuery()
  const {data:dataMehvar , isLoading:loadingMehvar } = useGetMehvarNamaQuery()
  
if(!loadingBaste && !loadingRasad && !loadingMehvar)
{
   const lastData = dataBaste[0]
   console.log(lastData)
       
  return (
    <>
      <Row className='m-3 gap-5  mt-3 bg-slate-100 shadow-lg rounded-lg h-auto items-center  ' justify={'center'} align={'middle'}  >
        {dataRasad?.map((item , index)=>(
          <Col lg={5} md={24} xl={5}>
           
          <CardKhabar 
            title={item.title}
            dec={item.description} 
            important={item.important_level}
            tag={item.subject_tag}
            time={item.date_time_upload}
            />
        </Col>
        ))}
      </Row>
      <Row className='m-3 gap-5  mt-3 bg-slate-100 shadow-lg rounded-lg items-center h-auto flex flex-row justify-center '>
      {dataBaste?.map((item , index)=>(
      <Col lg={5} md={24} key={index}>
        <BasteNama title={item.title} dec={item.description} time={item.date_time_upload} image={item.images} download={item.documents}/>
      </Col>
      ))}
      </Row>
      
      <Row  className=' bg-slate-100  h-auto px-5 py-5 pl-96  gap-5  m-3 mt-3 shadow-lg rounded-lg  ' >
     <Col span={12}  >
       <CardT/>
     </Col>
    
    </Row>
    <Row className='shadow-xl rounded-lg  gap-5  m-3 mt-3    h-96'>
        <Col  xl={24} >
          <BasteDownload title={lastData.title} dec={lastData.description} time={lastData.date_time_upload} download={lastData.documents} images={lastData.images} />
        </Col>
        
        
    </Row>
    
        
    
    </>
    
  )
}
}

export default RasadPage