import { ResponsiveSwarmPlot } from '@nivo/swarmplot'
import React from 'react'


const data = [
    {
      "id": "0.0",
      "group": "group A",
      "price": 422,
      "volume": 4
    },
    {
      "id": "0.1",
      "group": "group A",
      "price": 359,
      "volume": 7
    },
    {
      "id": "0.2",
      "group": "group A",
      "price": 439,
      "volume": 9
    },
    {
      "id": "0.3",
      "group": "group A",
      "price": 261,
      "volume": 9
    },
    {
      "id": "0.4",
      "group": "group A",
      "price": 291,
      "volume": 14
    },
    {
      "id": "0.5",
      "group": "group A",
      "price": 272,
      "volume": 5
    },
    {
      "id": "0.6",
      "group": "group A",
      "price": 435,
      "volume": 16
    },
    {
      "id": "0.7",
      "group": "group A",
      "price": 259,
      "volume": 20
    },
    {
      "id": "0.8",
      "group": "group A",
      "price": 168,
      "volume": 15
    },
    {
      "id": "0.9",
      "group": "group A",
      "price": 200,
      "volume": 9
    },
    {
      "id": "0.10",
      "group": "group A",
      "price": 262,
      "volume": 7
    },
    {
      "id": "0.11",
      "group": "group A",
      "price": 26,
      "volume": 20
    },
    {
      "id": "0.12",
      "group": "group A",
      "price": 198,
      "volume": 5
    },
    {
      "id": "0.13",
      "group": "group A",
      "price": 249,
      "volume": 5
    },
    {
      "id": "0.14",
      "group": "group A",
      "price": 269,
      "volume": 17
    },
    {
      "id": "0.15",
      "group": "group A",
      "price": 189,
      "volume": 4
    },
    {
      "id": "0.16",
      "group": "group A",
      "price": 457,
      "volume": 14
    },
    {
      "id": "0.17",
      "group": "group A",
      "price": 177,
      "volume": 12
    },
    {
      "id": "0.18",
      "group": "group A",
      "price": 468,
      "volume": 10
    },
    {
      "id": "0.19",
      "group": "group A",
      "price": 208,
      "volume": 6
    },
    {
      "id": "0.20",
      "group": "group A",
      "price": 487,
      "volume": 20
    },
    {
      "id": "0.21",
      "group": "group A",
      "price": 8,
      "volume": 8
    },
    {
      "id": "0.22",
      "group": "group A",
      "price": 26,
      "volume": 19
    },
    {
      "id": "0.23",
      "group": "group A",
      "price": 104,
      "volume": 12
    },
    {
      "id": "0.24",
      "group": "group A",
      "price": 257,
      "volume": 14
    },
    {
      "id": "0.25",
      "group": "group A",
      "price": 188,
      "volume": 14
    },
    {
      "id": "0.26",
      "group": "group A",
      "price": 317,
      "volume": 4
    },
    {
      "id": "0.27",
      "group": "group A",
      "price": 300,
      "volume": 20
    },
    {
      "id": "0.28",
      "group": "group A",
      "price": 485,
      "volume": 10
    },
    {
      "id": "0.29",
      "group": "group A",
      "price": 147,
      "volume": 11
    },
    {
      "id": "0.30",
      "group": "group A",
      "price": 165,
      "volume": 12
    },
    {
      "id": "0.31",
      "group": "group A",
      "price": 275,
      "volume": 12
    },
    {
      "id": "0.32",
      "group": "group A",
      "price": 374,
      "volume": 17
    },
    {
      "id": "0.33",
      "group": "group A",
      "price": 498,
      "volume": 13
    },
    {
      "id": "0.34",
      "group": "group A",
      "price": 243,
      "volume": 6
    },
    {
      "id": "0.35",
      "group": "group A",
      "price": 241,
      "volume": 19
    },
    {
      "id": "0.36",
      "group": "group A",
      "price": 132,
      "volume": 17
    },
    {
      "id": "0.37",
      "group": "group A",
      "price": 210,
      "volume": 10
    },
    {
      "id": "0.38",
      "group": "group A",
      "price": 200,
      "volume": 5
    },
    {
      "id": "0.39",
      "group": "group A",
      "price": 92,
      "volume": 13
    },
    {
      "id": "0.40",
      "group": "group A",
      "price": 448,
      "volume": 10
    },
    {
      "id": "0.41",
      "group": "group A",
      "price": 185,
      "volume": 18
    },
    {
      "id": "0.42",
      "group": "group A",
      "price": 488,
      "volume": 11
    },
    {
      "id": "0.43",
      "group": "group A",
      "price": 479,
      "volume": 18
    },
    {
      "id": "0.44",
      "group": "group A",
      "price": 346,
      "volume": 11
    },
    {
      "id": "0.45",
      "group": "group A",
      "price": 123,
      "volume": 18
    },
    {
      "id": "0.46",
      "group": "group A",
      "price": 98,
      "volume": 6
    },
    {
      "id": "0.47",
      "group": "group A",
      "price": 391,
      "volume": 7
    },
    {
      "id": "0.48",
      "group": "group A",
      "price": 172,
      "volume": 8
    },
    {
      "id": "0.49",
      "group": "group A",
      "price": 399,
      "volume": 4
    },
    {
      "id": "0.50",
      "group": "group A",
      "price": 312,
      "volume": 13
    },
    {
      "id": "0.51",
      "group": "group A",
      "price": 75,
      "volume": 12
    },
    {
      "id": "0.52",
      "group": "group A",
      "price": 63,
      "volume": 10
    },
    {
      "id": "0.53",
      "group": "group A",
      "price": 207,
      "volume": 11
    },
    {
      "id": "0.54",
      "group": "group A",
      "price": 377,
      "volume": 5
    },
    {
      "id": "0.55",
      "group": "group A",
      "price": 489,
      "volume": 4
    },
    {
      "id": "0.56",
      "group": "group A",
      "price": 441,
      "volume": 15
    },
    {
      "id": "0.57",
      "group": "group A",
      "price": 300,
      "volume": 4
    },
    {
      "id": "0.58",
      "group": "group A",
      "price": 132,
      "volume": 5
    },
    {
      "id": "0.59",
      "group": "group A",
      "price": 163,
      "volume": 14
    },
    {
      "id": "0.60",
      "group": "group A",
      "price": 183,
      "volume": 10
    },
    {
      "id": "0.61",
      "group": "group A",
      "price": 464,
      "volume": 8
    },
    {
      "id": "0.62",
      "group": "group A",
      "price": 404,
      "volume": 11
    },
    {
      "id": "0.63",
      "group": "group A",
      "price": 394,
      "volume": 5
    },
    {
      "id": "0.64",
      "group": "group A",
      "price": 148,
      "volume": 7
    },
    {
      "id": "0.65",
      "group": "group A",
      "price": 127,
      "volume": 14
    },
    {
      "id": "0.66",
      "group": "group A",
      "price": 478,
      "volume": 19
    },
    {
      "id": "0.67",
      "group": "group A",
      "price": 341,
      "volume": 16
    },
    {
      "id": "0.68",
      "group": "group A",
      "price": 29,
      "volume": 17
    },
    {
      "id": "0.69",
      "group": "group A",
      "price": 245,
      "volume": 11
    },
    {
      "id": "0.70",
      "group": "group A",
      "price": 155,
      "volume": 4
    },
    {
      "id": "0.71",
      "group": "group A",
      "price": 286,
      "volume": 12
    },
    {
      "id": "0.72",
      "group": "group A",
      "price": 333,
      "volume": 11
    },
    {
      "id": "0.73",
      "group": "group A",
      "price": 417,
      "volume": 8
    },
    {
      "id": "0.74",
      "group": "group A",
      "price": 342,
      "volume": 7
    },
    {
      "id": "0.75",
      "group": "group A",
      "price": 445,
      "volume": 4
    },
    {
      "id": "1.0",
      "group": "group B",
      "price": 279,
      "volume": 5
    },
    {
      "id": "1.1",
      "group": "group B",
      "price": 439,
      "volume": 14
    },
    {
      "id": "1.2",
      "group": "group B",
      "price": 8,
      "volume": 5
    },
    {
      "id": "1.3",
      "group": "group B",
      "price": 15,
      "volume": 4
    },
    {
      "id": "1.4",
      "group": "group B",
      "price": 21,
      "volume": 16
    },
    {
      "id": "1.5",
      "group": "group B",
      "price": 455,
      "volume": 15
    },
    {
      "id": "1.6",
      "group": "group B",
      "price": 391,
      "volume": 7
    },
    {
      "id": "1.7",
      "group": "group B",
      "price": 237,
      "volume": 13
    },
    {
      "id": "1.8",
      "group": "group B",
      "price": 494,
      "volume": 18
    },
    {
      "id": "1.9",
      "group": "group B",
      "price": 487,
      "volume": 7
    },
    {
      "id": "1.10",
      "group": "group B",
      "price": 387,
      "volume": 18
    },
    {
      "id": "1.11",
      "group": "group B",
      "price": 321,
      "volume": 9
    },
    {
      "id": "1.12",
      "group": "group B",
      "price": 234,
      "volume": 11
    },
    {
      "id": "1.13",
      "group": "group B",
      "price": 371,
      "volume": 11
    },
    {
      "id": "1.14",
      "group": "group B",
      "price": 444,
      "volume": 17
    },
    {
      "id": "1.15",
      "group": "group B",
      "price": 10,
      "volume": 16
    },
    {
      "id": "1.16",
      "group": "group B",
      "price": 305,
      "volume": 8
    },
    {
      "id": "1.17",
      "group": "group B",
      "price": 3,
      "volume": 6
    },
    {
      "id": "1.18",
      "group": "group B",
      "price": 161,
      "volume": 14
    },
    {
      "id": "1.19",
      "group": "group B",
      "price": 64,
      "volume": 4
    },
    {
      "id": "1.20",
      "group": "group B",
      "price": 162,
      "volume": 5
    },
    {
      "id": "1.21",
      "group": "group B",
      "price": 321,
      "volume": 4
    },
    {
      "id": "1.22",
      "group": "group B",
      "price": 262,
      "volume": 13
    },
    {
      "id": "1.23",
      "group": "group B",
      "price": 89,
      "volume": 19
    },
    {
      "id": "1.24",
      "group": "group B",
      "price": 282,
      "volume": 19
    },
    {
      "id": "1.25",
      "group": "group B",
      "price": 142,
      "volume": 17
    },
    {
      "id": "1.26",
      "group": "group B",
      "price": 199,
      "volume": 10
    },
    {
      "id": "1.27",
      "group": "group B",
      "price": 371,
      "volume": 4
    },
    {
      "id": "1.28",
      "group": "group B",
      "price": 15,
      "volume": 4
    },
    {
      "id": "1.29",
      "group": "group B",
      "price": 219,
      "volume": 16
    },
    {
      "id": "1.30",
      "group": "group B",
      "price": 204,
      "volume": 15
    },
    {
      "id": "1.31",
      "group": "group B",
      "price": 437,
      "volume": 11
    },
    {
      "id": "1.32",
      "group": "group B",
      "price": 106,
      "volume": 6
    },
    {
      "id": "1.33",
      "group": "group B",
      "price": 271,
      "volume": 17
    },
    {
      "id": "1.34",
      "group": "group B",
      "price": 463,
      "volume": 18
    },
    {
      "id": "1.35",
      "group": "group B",
      "price": 6,
      "volume": 12
    },
    {
      "id": "1.36",
      "group": "group B",
      "price": 461,
      "volume": 12
    },
    {
      "id": "1.37",
      "group": "group B",
      "price": 222,
      "volume": 19
    },
    {
      "id": "1.38",
      "group": "group B",
      "price": 54,
      "volume": 19
    },
    {
      "id": "1.39",
      "group": "group B",
      "price": 487,
      "volume": 17
    },
    {
      "id": "1.40",
      "group": "group B",
      "price": 220,
      "volume": 17
    },
    {
      "id": "1.41",
      "group": "group B",
      "price": 485,
      "volume": 12
    },
    {
      "id": "1.42",
      "group": "group B",
      "price": 379,
      "volume": 20
    },
    {
      "id": "1.43",
      "group": "group B",
      "price": 463,
      "volume": 15
    },
    {
      "id": "1.44",
      "group": "group B",
      "price": 63,
      "volume": 18
    },
    {
      "id": "1.45",
      "group": "group B",
      "price": 468,
      "volume": 15
    },
    {
      "id": "1.46",
      "group": "group B",
      "price": 412,
      "volume": 9
    },
    {
      "id": "1.47",
      "group": "group B",
      "price": 304,
      "volume": 10
    },
    {
      "id": "1.48",
      "group": "group B",
      "price": 199,
      "volume": 9
    },
    {
      "id": "1.49",
      "group": "group B",
      "price": 55,
      "volume": 10
    },
    {
      "id": "1.50",
      "group": "group B",
      "price": 100,
      "volume": 20
    },
    {
      "id": "1.51",
      "group": "group B",
      "price": 439,
      "volume": 6
    },
    {
      "id": "1.52",
      "group": "group B",
      "price": 260,
      "volume": 11
    },
    {
      "id": "1.53",
      "group": "group B",
      "price": 454,
      "volume": 10
    },
    {
      "id": "1.54",
      "group": "group B",
      "price": 191,
      "volume": 9
    },
    {
      "id": "1.55",
      "group": "group B",
      "price": 377,
      "volume": 11
    },
    {
      "id": "1.56",
      "group": "group B",
      "price": 446,
      "volume": 19
    },
    {
      "id": "1.57",
      "group": "group B",
      "price": 440,
      "volume": 13
    },
    {
      "id": "1.58",
      "group": "group B",
      "price": 379,
      "volume": 12
    },
    {
      "id": "1.59",
      "group": "group B",
      "price": 391,
      "volume": 15
    },
    {
      "id": "1.60",
      "group": "group B",
      "price": 278,
      "volume": 18
    },
    {
      "id": "1.61",
      "group": "group B",
      "price": 293,
      "volume": 10
    },
    {
      "id": "1.62",
      "group": "group B",
      "price": 185,
      "volume": 10
    },
    {
      "id": "1.63",
      "group": "group B",
      "price": 408,
      "volume": 8
    },
    {
      "id": "1.64",
      "group": "group B",
      "price": 450,
      "volume": 9
    },
    {
      "id": "1.65",
      "group": "group B",
      "price": 432,
      "volume": 17
    },
    {
      "id": "1.66",
      "group": "group B",
      "price": 218,
      "volume": 15
    },
    {
      "id": "1.67",
      "group": "group B",
      "price": 129,
      "volume": 17
    },
    {
      "id": "1.68",
      "group": "group B",
      "price": 154,
      "volume": 4
    },
    {
      "id": "1.69",
      "group": "group B",
      "price": 143,
      "volume": 19
    },
    {
      "id": "1.70",
      "group": "group B",
      "price": 40,
      "volume": 14
    },
    {
      "id": "1.71",
      "group": "group B",
      "price": 327,
      "volume": 16
    },
    {
      "id": "2.0",
      "group": "group C",
      "price": 153,
      "volume": 19
    },
    {
      "id": "2.1",
      "group": "group C",
      "price": 180,
      "volume": 14
    },
    {
      "id": "2.2",
      "group": "group C",
      "price": 49,
      "volume": 12
    },
    {
      "id": "2.3",
      "group": "group C",
      "price": 268,
      "volume": 13
    },
    {
      "id": "2.4",
      "group": "group C",
      "price": 24,
      "volume": 12
    },
    {
      "id": "2.5",
      "group": "group C",
      "price": 424,
      "volume": 4
    },
    {
      "id": "2.6",
      "group": "group C",
      "price": 386,
      "volume": 11
    },
    {
      "id": "2.7",
      "group": "group C",
      "price": 218,
      "volume": 10
    },
    {
      "id": "2.8",
      "group": "group C",
      "price": 499,
      "volume": 14
    },
    {
      "id": "2.9",
      "group": "group C",
      "price": 195,
      "volume": 4
    },
]

function SwarmCharts() {
  return (
    <ResponsiveSwarmPlot
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
        groups={[ 'group A', 'group B', 'group C' ]}
        identity="id"
        value="price"
        valueFormat="$.2f"
        valueScale={{ type: 'linear', min: 0, max: 500, reverse: false }}
        size={{
            key: 'volume',
            values: [
                4,
                20
            ],
            sizes: [
                6,
                20
            ]
        }}
        forceStrength={4}
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
        margin={{ top: 80, right: 100, bottom: 80, left: 100 }}
        axisTop={{
            orient: 'top',
            tickSize: 10,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'group if vertical, price if horizontal',
            legendPosition: 'middle',
            legendOffset: -46
        }}
        axisRight={{
            orient: 'right',
            tickSize: 10,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'price if vertical, group if horizontal',
            legendPosition: 'middle',
            legendOffset: 76
        }}
        axisBottom={{
            orient: 'bottom',
            tickSize: 10,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'group if vertical, price if horizontal',
            legendPosition: 'middle',
            legendOffset: 46
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 10,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'price if vertical, group if horizontal',
            legendPosition: 'middle',
            legendOffset: -76
        }}
    />
  )
}

export default SwarmCharts