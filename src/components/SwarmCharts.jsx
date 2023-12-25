import { ResponsiveSwarmPlot } from '@nivo/swarmplot'
import React from 'react'






function SwarmCharts({data , isLoading}) {


if(!isLoading){
  return (
    <ResponsiveSwarmPlot
    theme={{
        text : {
          fontFamily : 'khameneiiRegular'
        },
        axis : {
            legend : {
                text : {
                    fontFamily : 'khameneiiRegular',
                    fontSize : 15 ,
                    fill: "black",
                }
            }
        }
        
    }}
        data={data}
        groups={[  'منفی' , 'بدون واکنش', 'مثبت'   ]}
        groupBy={'npo'}
        identity="id"
        value="count"
       
        colors={{ scheme: 'category10' }}
        forceStrength={9}
        valueScale={{ type: 'linear', min: 0, max: 4000, reverse: false }}
        size={{
          key: 'sum',
          values: [
            0,
            2000000
          ],
          sizes: [
              4,
              8
          ]
      }}
        spacing={11}
        
        simulationIterations={100}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.6
                ],
                [
                    'opacity',
                    0.5
                ]
            ]
        }}
        margin={{ top: 50, right: 120, bottom: 140, left: 120 }}
  
        axisBottom={{
            orient: 'bottom',
            tickSize: 10,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'انگاره',
            legendPosition: 'middle',
            legendOffset: 46
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 30,
            tickRotation: 0,
            legend: 'تعداد',
            legendPosition: 'middle',
            legendOffset: -76
        }}
    />
  )
}
}

export default SwarmCharts