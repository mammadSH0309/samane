import {ResponsiveHeatMap} from "@nivo/heatmap"
import React from 'react'

function HeatCharts({data  , min , max}) {


  return (
    <ResponsiveHeatMap
    theme={{
        text : {
            fontFamily : 'khameneiiRegular'
        },
        axis : {
            legend : {
                text : {
                    fontSize : 15 ,
                    fill: "black",
                }
            }
        }
    }}
    data={data}
    margin={{ top: 35, right: 30, bottom: 80, left: 80 }}
   
    xOuterPadding={0.10}
    yOuterPadding={0.10}
    
    
    axisLeft={{
        tickSize: 2,
        tickPadding: 50,
        tickRotation: 0,
        legend: 'نهاد',
        legendPosition: 'middle',
        legendOffset: -70
    }}
    colors={{
        type: 'diverging',
        scheme: 'oranges',
        divergeAt: 0.5,
        minValue: min,
        maxValue: max
    }}
    emptyColor="#555555"
    legends={[
        {
            anchor: 'bottom',
            translateX: 0,
            translateY: 30,
            length: 400,
            thickness: 8,
            direction: 'row',
            tickPosition: 'after',
            tickSize: 5,
            tickSpacing: 4,
            tickOverlap: false,
            title: 'بازه',
            titleAlign: 'start',
            titleOffset: 4
        }
    ]}
/>
  )
}

export default HeatCharts