import { Col, Row } from 'antd'
import React, { useState } from 'react'
import {IranMap } from "react-iran-map"
import { useNavigate, useSearchParams  } from 'react-router-dom'
function Map({data ,params, setParams}) {

    const selectProvinceHandler = (e) => {
        console.log(e)
        navigate(`${e.name}`)
        params.set('ostan' , e.name)
    }

    const navigate = useNavigate()
  
 
  return (
    <>
    
    <div className={`font-khameneiiRegular  justify-center items-center `}>
    <IranMap 
        data={data?.all_ostan_number_news}
        colorRange='0, 70, 200'
        width={630}
        textColor='#000'
       defaultSelectedProvince={params.get('ostan')}
        deactiveProvinceColor='#eee'
        selectedProvinceColor='#edbd2b'
        tooltipTitle='تعداد'
        selectProvinceHandler={selectProvinceHandler}
      /> 
    </div>
    </>
        
       
  )
}

export default Map