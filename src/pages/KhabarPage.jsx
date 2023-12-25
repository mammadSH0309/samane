import { Col, Row } from 'antd'
import React from 'react'
import CardKhabar from '../components/CardKhabar'
import BasteNama from '../components/BasteNama'
import BasteDownload from '../components/BasteDownload'
import { useGetBasteNamaQuery, useGetMehvarNamaQuery, useGetRasadNamaQuery } from '../query/Charts'



function KhabarPage() {

  const {data:dataRasad , isloading:loadingRasad} = useGetRasadNamaQuery();
  const {data:dataMehvar, isloading:loadingMehvar} = useGetMehvarNamaQuery();
  const {data:dataBaste , isloading:loadingBaste} = useGetBasteNamaQuery();
  console.log(dataRasad)
if(!loadingRasad || !loadingMehvar || !loadingBaste){
  return (
    <>
      {/* <Row className='m-3 gap-5  mt-3 bg-slate-100 shadow-lg rounded-lg h-auto items-center  ' justify={'center'} align={'middle'}  >
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
      <Row className='m-3 gap-5  mt-3 bg-slate-100 shadow-lg rounded-lg items-center h-52 flex flex-row justify-center '>
      {dataBaste?.map((item , index)=>(
      <Col lg={5} md={24} key={index}>
        <BasteNama title={item.title} dec={item.description} time={item.date_time_upload} image={item.images}/>
      </Col>
      ))}
      </Row>
      
        <Col  className='shadow-xl rounded-lg m-3 gap-5  mt-3 h-60' lg={12}>
          <BasteDownload/>
        </Col>
       */}
    
    </>
    
  )
}
}

export default KhabarPage