import React from 'react'
import ApexCharts from 'apexcharts'
import { Col, Divider, Row, id } from 'antd';
import Chart from 'react-apexcharts'
import { useGetTelegramNewsOstanAllQuery } from '../query/Charts';
import Skeleton from '@mui/material/Skeleton';

function BarChartApex() {

    const {data , isLoading , isSuccess, isError , error} = useGetTelegramNewsOstanAllQuery()

     console.log(data)
      return(
        <>
        <div className="app">

                <Row>
                <Col sm={24}  md={24} lg={12} xl={12}>
                <Divider >مثبت ترین</Divider>
                <div className="mixed-chart ml-1 p-5   border shadow-md sm:rounded-lg  sm:flex sm:flex-row sm:justify-center  ">
                {!isLoading && isSuccess ? (
                    <Chart
            
                    options={{
                        responsive : [
                            {
                                breakpoint : 1450,
                                options : {
                                    plotOptions: {
                                     
                                        bar: {
                                        
                                          width : 0
                                        }, 
                                      },
                                      chart: {
                                        width : 250
                                      }, 
                                      xaxis : {
                                        show : false , 
                                        lables : {
                                            show : false,
                                        }
                                      }
                                    
                                }
                            },
                        ],
                    chart: {
                        height : '100%',
                        id: "basic-bar"
                      },
                      
                      xaxis: {
                        categories: data?.top_five_ostan_npo.map((item)=>[item.ostan]),
                        offsetY : 10,
                        offsetX : -5 , 
                        labels : {
                            rotate : 45,   /// farsi = -45
                            maxHeight : 80
                        }
                      },
                      yaxis : {
                        labels: {
                            offsetX : -10,
                            maxWidth : 15
                        }
                      },
                     
                     colors : ['#32cd32' , '#32cd32']
                    }}
                    
                      series={[
                        {
                          name: "تعداد",
                          data: data?.top_five_ostan_npo.map((item)=>item.top_five_ostan_npo)
                        }
                      ]}
                    
                      type="bar"
                      width="330"
                    />
                ) : (
                    <Skeleton animation="wave" />
                )}
                
              </div>
                </Col>
                <Col sm={24}  md={24} lg={12} xl={12}>
                <Divider> پربازدید ترین
                </Divider>
                <div className="mixed-chart  p-5 border border-white shadow-md sm:rounded-lg sm:flex sm:flex-row sm:justify-center">
                {!isLoading && isSuccess ? (
                  <Chart
                  
                  options={{
                    responsive : [
                        {
                            breakpoint : 1450,
                            options : {
                                plotOptions: {
                                 
                                    bar: {
                                    
                                      width : 0
                                    }, 
                                  },
                                  chart: {
                                    width : 250
                                  }
                                
                            }
                        },
                    ],
                    dataLabels : {
                        enabled : false,
                        
                    },
                    
                    chart: {
                        id: "basic-bar"
                      },
                      xaxis: {
                        categories: data?.top_five_ostan_views_post.map((item)=>[item.ostan]),
                        offsetY : 10,
                        offsetX : -5 , 
                        labels : {
                        rotate : 45,   /// farsi = -45
                        maxHeight : 80
                    }
                      },
                      yaxis : {
                        labels : {
                            maxWidth :50,
                            rotate : 0,
                            offsetX : -40
                        }
                      },
                      
                  colors : ['#FF0000' , '#fa8072']
                  }}
                  series={[
                    {
                      name: "تعداد",
                      data: data?.top_five_ostan_views_post.map((item)=>item.top_file_ostan_views_post)
                    }
                  ]}
                  type="bar"
                  width="330"
                />

                ) : (
                    <Skeleton animation="wave" />
                )}
              </div>
                </Col>
            </Row>
            
            
          </div>
        </>
    )
   }
   




export default BarChartApex










/* <>
<Row>
   <Col md={24} lg={12} xl={12}>
   <Divider >مثبت ترین</Divider>
   <div className="mixed-chart ml-1 p-5 border border-gray-200 shadow-md sm:rounded-lg">
   <Skeleton animation="wave" />
   
 </div>
   </Col>
   <Col  md={24} lg={12} xl={12}>
   <Divider>استان پربازدید
   </Divider>
   <div className="mixed-chart  p-5 border border-gray-200 shadow-md sm:rounded-lg">
   <Skeleton animation="wave" />
 </div>
   </Col>
</Row>
</> */