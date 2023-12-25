import {ResponsiveHeatMap} from "@nivo/heatmap"
import React from 'react'

function HeatCharts({data , isLoading}) {
if(!isLoading){
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
    margin={{ top: 75, right: 80, bottom: 150, left: 80 }}
   
    xOuterPadding={0.10}
    yOuterPadding={0.10}
    axisTop={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -90,
        legend: '',
        legendOffset: 46
    }}
    
    axisLeft={{
        tickSize: 5,
        tickPadding: 35,
        tickRotation: 0,
        legend: 'جریان',
        legendPosition: 'middle',
        legendOffset: -65
    }}
    colors={{
        type: 'diverging',
        scheme: 'red_yellow_blue',
        divergeAt: 0.5,
        minValue: -200,
        maxValue: 1000
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
}

export default HeatCharts