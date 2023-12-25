import { ResponsiveLine } from '@nivo/line'
import React from 'react'
import { useGetEhsasTelegramNewsQuery } from '../query/Charts'
import RadioSelect from './RadioSelect'








function LineCharts({data , isLoading , value , setValue}) {


if(!isLoading){
  return (
    <>
    <ResponsiveLine
    theme={{
      axis : {
          legend : {
              text : {
                  fontFamily : "khameneiiRegular",
                  fontSize : 15 ,
                  fill: "black",
              }
          }
      }
      
  }}
  animate={true}
  data={data}
  curve='natural'
    margin={{ top: 20, right: 120, bottom: 150, left: 90 }}
   
    axisTop={null}
    axisRight={null}
    axisBottom={{
        tickSize: 5,
        tickPadding: 8,
        tickRotation: -40,
        legend: 'تاریخ',
        legendOffset: 70,
        legendPosition: 'middle'
    }}
    enableSlices={'x'}
    axisLeft={{
        tickSize: 5,
        tickPadding:25,
        tickRotation: 0,
        legend: 'تعداد',
        legendOffset: -60,
        legendPosition: 'middle'
    }}

    lineWidth={0} 
    pointSize={8}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={5}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
        {
            anchor: 'top-right',
            direction: 'column',
            justify: true,
            translateX:50,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 20,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemBackground: 'rgba(0, 0, 0, .03)',
                        itemOpacity: 1
                    }
                }
            ]
        }
    ]}
/>
</>
  )
}
  }

export default LineCharts