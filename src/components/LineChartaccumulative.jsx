import React from 'react'
import { ResponsiveLine } from '@nivo/line'


const data = [
    {
      "id": "japan",
      "color": "hsl(11, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 256
        },
        {
          "x": "helicopter",
          "y": 88
        },
        {
          "x": "boat",
          "y": 235
        },
        {
          "x": "train",
          "y": 35
        },
        {
          "x": "subway",
          "y": 17
        },
        {
          "x": "bus",
          "y": 295
        },
        {
          "x": "car",
          "y": 282
        },
        {
          "x": "moto",
          "y": 198
        },
        {
          "x": "bicycle",
          "y": 251
        },
        {
          "x": "horse",
          "y": 239
        },
        {
          "x": "skateboard",
          "y": 55
        },
        {
          "x": "others",
          "y": 45
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(255, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 238
        },
        {
          "x": "helicopter",
          "y": 229
        },
        {
          "x": "boat",
          "y": 18
        },
        {
          "x": "train",
          "y": 93
        },
        {
          "x": "subway",
          "y": 299
        },
        {
          "x": "bus",
          "y": 69
        },
        {
          "x": "car",
          "y": 176
        },
        {
          "x": "moto",
          "y": 21
        },
        {
          "x": "bicycle",
          "y": 121
        },
        {
          "x": "horse",
          "y": 119
        },
        {
          "x": "skateboard",
          "y": 273
        },
        {
          "x": "others",
          "y": 92
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(22, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 275
        },
        {
          "x": "helicopter",
          "y": 158
        },
        {
          "x": "boat",
          "y": 122
        },
        {
          "x": "train",
          "y": 71
        },
        {
          "x": "subway",
          "y": 256
        },
        {
          "x": "bus",
          "y": 151
        },
        {
          "x": "car",
          "y": 73
        },
        {
          "x": "moto",
          "y": 168
        },
        {
          "x": "bicycle",
          "y": 82
        },
        {
          "x": "horse",
          "y": 248
        },
        {
          "x": "skateboard",
          "y": 226
        },
        {
          "x": "others",
          "y": 16
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(92, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 299
        },
        {
          "x": "helicopter",
          "y": 90
        },
        {
          "x": "boat",
          "y": 126
        },
        {
          "x": "train",
          "y": 34
        },
        {
          "x": "subway",
          "y": 219
        },
        {
          "x": "bus",
          "y": 210
        },
        {
          "x": "car",
          "y": 95
        },
        {
          "x": "moto",
          "y": 233
        },
        {
          "x": "bicycle",
          "y": 22
        },
        {
          "x": "horse",
          "y": 221
        },
        {
          "x": "skateboard",
          "y": 110
        },
        {
          "x": "others",
          "y": 168
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(150, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 272
        },
        {
          "x": "helicopter",
          "y": 4
        },
        {
          "x": "boat",
          "y": 284
        },
        {
          "x": "train",
          "y": 19
        },
        {
          "x": "subway",
          "y": 49
        },
        {
          "x": "bus",
          "y": 250
        },
        {
          "x": "car",
          "y": 155
        },
        {
          "x": "moto",
          "y": 24
        },
        {
          "x": "bicycle",
          "y": 298
        },
        {
          "x": "horse",
          "y": 161
        },
        {
          "x": "skateboard",
          "y": 7
        },
        {
          "x": "others",
          "y": 211
        }
      ]
    }
  ]
    
   


function LineChartaccumulative() {

  return (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 150, bottom: 50, left: 80 }}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: true,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 30,
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
  )
}

export default LineChartaccumulative