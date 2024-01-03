import React from 'react'
import Chart from 'react-apexcharts'





function StackedChart({data , params}) {




    const  state = {
       
        series: [{
            name: '   غم  ',
            data: data?.غم
          }, {
            name: '   خشم  ',
            data: data?.خشم
          },  {
            name: '   تعجب  '  ,
            data: data?.تعجب
          }, {
            name: '   شادی  ',
            data: data?.شادی
          },
          {
            name: '   ترس  ',
            data: data?.ترس
          },
          {
            name: '   امید    ',
            data: data?.امید
          },
        ],
          options: {
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
                            width : 460
                          }, 
                          yaxis:{
                            show:true ,
                              labels:{
                                offsetX :-50,
                                maxWidth : 90,
                                rotate:0
                                                          
                            }
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
              type: 'bar',
              height: 400,
              stacked: true,
              
            },
            plotOptions: {
              bar: {
                horizontal: true,
    
              },
            },
            stroke: {
              width: 1,
              colors: ['#fff']
            },
            xaxis: {
              categories: data?.date_time,
            },
            yaxis: {
              
              labels : {
                maxWidth : 100,
                rotate : 0,
                offsetX : -50 , 
                fontFamily : 'Arial'
            }
              
            },
           
            fill: {
              opacity: 1
            },
            legend: {
              position: 'top',
              horizontalAlign: 'right',
              offsetX: 20,
              fontWeight: 500,
              fontFamily : 'khameneiiBold',
              
              markers : {
                offseX : -10
              },
              itemMargin: {
                horizontal: 15,
                vertical: 0
            },
              
            }
          },
        
        
        };


  return (
    <div className="mixed-chart mt-1 p-5  border border-black bg-white shadow-md sm:rounded-lg  ">
        
    <Chart
    height={350}
                  
                  options={state.options} 
                  series={state.series}
                  type="bar"
                  width="680"
                />
                </div>
  )
}

export default StackedChart