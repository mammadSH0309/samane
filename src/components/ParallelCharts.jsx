import React from 'react'
import {ResponsiveParallelCoordinates } from '@nivo/parallel-coordinates'
function ParallelCharts({data , isLoading}) {
    if(!isLoading){
        return (
            <ResponsiveParallelCoordinates
                data={data}

                motionConfig="stiff"
                
                variables={[
                    {
                        id: 'count',
                        label: 'بازدید',
                        value: 'count',
                        min: 0,
                        max: 'auto',
                        ticksPosition: 'before',
                        legendPosition: 'start',
                        legendOffset: 20
                    },
                    {
                        id: 'sum_reaction',
                        label: 'ری اکشن',
                        value: 'sum_reaction',
                        min: 0,
                        max: 'auto',
                        ticksPosition: 'before',
                        legendPosition: 'start',
                        legendOffset: 20
                    },
                    {
                        id: 'sum_view_post',
                        label: 'تعداد بازدید',
                        value: 'sum_view_post',
                        min: 0,
                        max: 'auto',
                        ticksPosition: 'before',
                        legendPosition: 'start',
                        legendOffset: 20
                    },
                  
                ]}
                margin={{ top: 50, right: 120, bottom: 100, left: 60 }}
                lineWidth={3}
                // legends={[
                //     {
                //         anchor: 'right',
                //         direction: 'column',
                //         justify: false,
                //         translateX: 100,
                //         translateY: 0,
                //         itemsSpacing: 2,
                //         itemWidth: 60,
                //         itemHeight: 20,
                //         itemDirection: 'left-to-right',
                //         itemOpacity: 0.85,
                //         symbolSize: 20,
                //         effects: [
                //             {
                //                 on: 'hover',
                //                 style: {
                //                     itemOpacity: 1
                //                 }
                //             }
                //         ]
                //     }
                // ]}
            />
          )
    }
  }


export default ParallelCharts