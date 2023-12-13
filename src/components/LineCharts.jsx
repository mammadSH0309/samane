import { ResponsiveLine } from '@nivo/line'
import React from 'react'

const data = 
[
  {
    "id": "japan",
    "color": "hsl(43, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 202
      },
      {
        "x": "helicopter",
        "y": 52
      },
      {
        "x": "boat",
        "y": 44
      },
      {
        "x": "train",
        "y": 87
      },
      {
        "x": "subway",
        "y": 233
      },
      {
        "x": "bus",
        "y": 105
      },
      {
        "x": "car",
        "y": 234
      },
      {
        "x": "moto",
        "y": 199
      },
      {
        "x": "bicycle",
        "y": 68
      },
      {
        "x": "horse",
        "y": 251
      },
      {
        "x": "skateboard",
        "y": 248
      },
      {
        "x": "others",
        "y": 223
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(133, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 216
      },
      {
        "x": "helicopter",
        "y": 114
      },
      {
        "x": "boat",
        "y": 200
      },
      {
        "x": "train",
        "y": 280
      },
      {
        "x": "subway",
        "y": 54
      },
      {
        "x": "bus",
        "y": 119
      },
      {
        "x": "car",
        "y": 251
      },
      {
        "x": "moto",
        "y": 149
      },
      {
        "x": "bicycle",
        "y": 56
      },
      {
        "x": "horse",
        "y": 133
      },
      {
        "x": "skateboard",
        "y": 135
      },
      {
        "x": "others",
        "y": 283
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(319, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 118
      },
      {
        "x": "helicopter",
        "y": 109
      },
      {
        "x": "boat",
        "y": 161
      },
      {
        "x": "train",
        "y": 88
      },
      {
        "x": "subway",
        "y": 4
      },
      {
        "x": "bus",
        "y": 100
      },
      {
        "x": "car",
        "y": 290
      },
      {
        "x": "moto",
        "y": 122
      },
      {
        "x": "bicycle",
        "y": 135
      },
      {
        "x": "horse",
        "y": 141
      },
      {
        "x": "skateboard",
        "y": 177
      },
      {
        "x": "others",
        "y": 232
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(246, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 258
      },
      {
        "x": "helicopter",
        "y": 273
      },
      {
        "x": "boat",
        "y": 299
      },
      {
        "x": "train",
        "y": 239
      },
      {
        "x": "subway",
        "y": 90
      },
      {
        "x": "bus",
        "y": 136
      },
      {
        "x": "car",
        "y": 239
      },
      {
        "x": "moto",
        "y": 234
      },
      {
        "x": "bicycle",
        "y": 232
      },
      {
        "x": "horse",
        "y": 102
      },
      {
        "x": "skateboard",
        "y": 139
      },
      {
        "x": "others",
        "y": 206
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(165, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 115
      },
      {
        "x": "helicopter",
        "y": 49
      },
      {
        "x": "boat",
        "y": 240
      },
      {
        "x": "train",
        "y": 57
      },
      {
        "x": "subway",
        "y": 69
      },
      {
        "x": "bus",
        "y": 29
      },
      {
        "x": "car",
        "y": 289
      },
      {
        "x": "moto",
        "y": 72
      },
      {
        "x": "bicycle",
        "y": 124
      },
      {
        "x": "horse",
        "y": 135
      },
      {
        "x": "skateboard",
        "y": 250
      },
      {
        "x": "others",
        "y": 64
      }
    ]
  }
]

function LineCharts() {
  return (
    <ResponsiveLine
    theme={{
      text : {
          fontFamily : 'sahelBold'
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
    margin={{ top: 70, right: 110, bottom: 80, left: 80 }}
    xScale={{ type: 'point' }}
    yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'transportation',
        legendOffset: 50,
        legendPosition: 'middle'
    }}
    axisLeft={{
        tickSize: 5,
        tickPadding:25,
        tickRotation: 0,
        legend: 'count',
        legendOffset: -60,
        legendPosition: 'middle'
    }}
    lineWidth={0}
    pointSize={8}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
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
  )
}

export default LineCharts