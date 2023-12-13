import React, { useEffect, useState } from 'react'
import { Button, DatePicker, Select, Switch  } from 'antd';
import { useLocation , useSearchParams } from 'react-router-dom';
import { useGetChartsDayQuery, useGetChartsWithParamsQuery } from '../query/Charts';
const { RangePicker } = DatePicker;

function FilterSelect() {
 
  const [params , setParams] = useSearchParams({
    year : "",
    start_month : "",
    end_month : "",
    order_by : "",
    reverse : "", 
    number : "",
  });

  // const {data , isLoading} = useGetChartsWithParamsQuery()
    const {data:chartsDay , isLoading} = useGetChartsDayQuery('charts', {pollingInterval : 50000})
  

  console.log(chartsDay)



    
  return (
    <>
    <Select
    labelInValue
    defaultValue={{
      value: 'lucy',
      label: 'دیفالت',
    }}
    style={{
      width: 120,
    }}
   
    onChange={(e)=>{
      let orderby = e.value
      if(orderby){
        params.set('order_by' , orderby)
        
      }else {
        setParams({})
      }
    }}
  
    options={[
      {
        value: 'trend',
        label: 'ترند',
      },
      {
        value: 'tweets_number',
        label: 'تعداد توییت',
      },
    ]}
  />
  <Select
    labelInValue
     defaultValue={{
       value: '10',
       label: 'تعداد',
     }}
     style={{
       width: 120,
     }}
     
     onChange={(e)=> {
      let tedad = e.value 
      if (tedad){
        params.set('number' , tedad)
        
      }else {
        setParams({})
      }
     }}
     options={[
      {
        value : '10',
        label : '10'
      },
      {
        value : '15',
        label : '15'
      },
      {
        value : '20',
        label : '20'
      },
      {
        value : '25',
        label : '25'
      }
     ]}
   
  />
  <DatePicker 
   
   onChange={(date , dateString)=>{
      // orderParams.set('year' , dateString)
     params.set('year' , dateString)

   }}
  placeholder='انتخاب سال'
  picker="year" />

  <RangePicker 
  picker="month" 
  bordered={false}
  placeholder={["شروع ماه" , "اتمام ماه"]}
  onChange={(date , dateString)=> {
    // console.log(dateString[0])  // شروع ماه 
    // console.log(dateString[1])  // اتمام ماه
    console.log(dateString[0].split('-')[1])
    console.log(dateString[1].split('-')[1])
    params.set('start_month' , dateString[0].split('-')[1])
    params.set('end_month' , dateString[1].split('-')[1])

    
  }}
  />

   <Switch
   
    onChange={(checked ,e) => {
    
    
    // orderParams.set('reverse' , checked)
    params.set('reverse' , checked)
    
    
   }}  />
  <Button type='primary' className='bg-teal-950' htmlType='submit' onClick={()=>{
    // setOrderParams(orderParams)
    // console.log(data)
    setParams(params)
    // let year = params.get('year')
    // let start_month = params.get('start_month')
    // let end_month = params.get('end_month')
    // let order_by = params.get('order_by')
    // let reverse = params.get('revese')
    // let number = params.get('number')

    console.log(params)
    
    
    

    
  }}>
    اعمال فیلتر
  </Button>
    </>
  )
}

export default FilterSelect
