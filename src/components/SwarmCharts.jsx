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
        groups={[ 'negative' ,'neutral',  'positive']}
        groupBy={'npo'}
        identity="id"
        value="count"
       
        colors={{ scheme: 'brown_blueGreen' }}
        forceStrength={9}
        valueScale={{ type: 'linear', min : -1 ,  reverse: false }}
        size={{
          key: 'sum',
          values: [
            10,
            100000
          ],
          sizes: [
              10,
              50
          ]
      }}
        spacing={2}
        animate={false}
        simulationIterations={200}
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
        margin={{ top: 30, right: 70, bottom: 55, left: 80 }}
        
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
            legendOffset: -75
        }}
        axisTop={null}
        axisRight={null}
    />
  )
}
}

export default SwarmCharts