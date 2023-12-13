import React from 'react'
import { ResponsiveCirclePacking } from '@nivo/circle-packing'

const data = {
    "name": "nivo",
    "color": "hsl(111, 70%, 50%)",
    "children": [
      {
        "name": "viz",
        "color": "hsl(231, 70%, 50%)",
        "children": [
          {
            "name": "stack",
            "color": "hsl(307, 70%, 50%)",
            "children": [
              {
                "name": "cchart",
                "color": "hsl(81, 70%, 50%)",
                "loc": 140174
              },
              {
                "name": "xAxis",
                "color": "hsl(22, 70%, 50%)",
                "loc": 40656
              },
              {
                "name": "yAxis",
                "color": "hsl(288, 70%, 50%)",
                "loc": 24699
              },
              {
                "name": "layers",
                "color": "hsl(161, 70%, 50%)",
                "loc": 34090
              }
            ]
          },
          {
            "name": "ppie",
            "color": "hsl(348, 70%, 50%)",
            "children": [
              {
                "name": "chart",
                "color": "hsl(166, 70%, 50%)",
                "children": [
                  {
                    "name": "pie",
                    "color": "hsl(211, 70%, 50%)",
                    "children": [
                      {
                        "name": "outline",
                        "color": "hsl(187, 70%, 50%)",
                        "loc": 9512
                      },
                      {
                        "name": "slices",
                        "color": "hsl(200, 70%, 50%)",
                        "loc": 29916
                      },
                      {
                        "name": "bbox",
                        "color": "hsl(343, 70%, 50%)",
                        "loc": 114195
                      }
                    ]
                  },
                  {
                    "name": "donut",
                    "color": "hsl(339, 70%, 50%)",
                    "loc": 25645
                  },
                  {
                    "name": "gauge",
                    "color": "hsl(164, 70%, 50%)",
                    "loc": 139431
                  }
                ]
              },
              {
                "name": "legends",
                "color": "hsl(233, 70%, 50%)",
                "loc": 191322
              }
            ]
          }
        ]
      },
      {
        "name": "colors",
        "color": "hsl(32, 70%, 50%)",
        "children": [
          {
            "name": "rgb",
            "color": "hsl(140, 70%, 50%)",
            "loc": 135444
          },
          {
            "name": "hsl",
            "color": "hsl(113, 70%, 50%)",
            "loc": 73828
          }
        ]
      },
      {
        "name": "utils",
        "color": "hsl(143, 70%, 50%)",
        "children": [
          {
            "name": "randomize",
            "color": "hsl(118, 70%, 50%)",
            "loc": 155960
          },
          {
            "name": "resetClock",
            "color": "hsl(156, 70%, 50%)",
            "loc": 104187
          },
          {
            "name": "noop",
            "color": "hsl(218, 70%, 50%)",
            "loc": 133467
          },
          {
            "name": "tick",
            "color": "hsl(255, 70%, 50%)",
            "loc": 180789
          },
          {
            "name": "forceGC",
            "color": "hsl(208, 70%, 50%)",
            "loc": 163419
          },
          {
            "name": "stackTrace",
            "color": "hsl(323, 70%, 50%)",
            "loc": 128344
          },
          {
            "name": "dbg",
            "color": "hsl(20, 70%, 50%)",
            "loc": 77667
          }
        ]
      },
      {
        "name": "generators",
        "color": "hsl(27, 70%, 50%)",
        "children": [
          {
            "name": "address",
            "color": "hsl(150, 70%, 50%)",
            "loc": 104826
          },
          {
            "name": "city",
            "color": "hsl(50, 70%, 50%)",
            "loc": 29665
          },
          {
            "name": "animal",
            "color": "hsl(204, 70%, 50%)",
            "loc": 185292
          },
          {
            "name": "movie",
            "color": "hsl(327, 70%, 50%)",
            "loc": 52645
          },
          {
            "name": "user",
            "color": "hsl(103, 70%, 50%)",
            "loc": 176776
          }
        ]
      },
      {
        "name": "set",
        "color": "hsl(11, 70%, 50%)",
        "children": [
          {
            "name": "clone",
            "color": "hsl(136, 70%, 50%)",
            "loc": 28743
          },
          {
            "name": "intersect",
            "color": "hsl(318, 70%, 50%)",
            "loc": 85665
          },
          {
            "name": "merge",
            "color": "hsl(208, 70%, 50%)",
            "loc": 9523
          },
          {
            "name": "reverse",
            "color": "hsl(279, 70%, 50%)",
            "loc": 145708
          },
          {
            "name": "toArray",
            "color": "hsl(291, 70%, 50%)",
            "loc": 183744
          },
          {
            "name": "toObject",
            "color": "hsl(39, 70%, 50%)",
            "loc": 161992
          },
          {
            "name": "fromCSV",
            "color": "hsl(171, 70%, 50%)",
            "loc": 144452
          },
          {
            "name": "slice",
            "color": "hsl(341, 70%, 50%)",
            "loc": 118364
          },
          {
            "name": "append",
            "color": "hsl(33, 70%, 50%)",
            "loc": 80491
          },
          {
            "name": "prepend",
            "color": "hsl(137, 70%, 50%)",
            "loc": 198634
          },
          {
            "name": "shuffle",
            "color": "hsl(339, 70%, 50%)",
            "loc": 92584
          },
          {
            "name": "pick",
            "color": "hsl(251, 70%, 50%)",
            "loc": 64814
          },
          {
            "name": "plouc",
            "color": "hsl(257, 70%, 50%)",
            "loc": 1371
          }
        ]
      },
      {
        "name": "text",
        "color": "hsl(124, 70%, 50%)",
        "children": [
          {
            "name": "trim",
            "color": "hsl(223, 70%, 50%)",
            "loc": 139750
          },
          {
            "name": "slugify",
            "color": "hsl(240, 70%, 50%)",
            "loc": 83149
          },
          {
            "name": "snakeCase",
            "color": "hsl(177, 70%, 50%)",
            "loc": 96156
          },
          {
            "name": "camelCase",
            "color": "hsl(192, 70%, 50%)",
            "loc": 139493
          },
          {
            "name": "repeat",
            "color": "hsl(271, 70%, 50%)",
            "loc": 92204
          },
          {
            "name": "padLeft",
            "color": "hsl(10, 70%, 50%)",
            "loc": 3277
          },
          {
            "name": "padRight",
            "color": "hsl(15, 70%, 50%)",
            "loc": 22107
          },
          {
            "name": "sanitize",
            "color": "hsl(179, 70%, 50%)",
            "loc": 82882
          },
          {
            "name": "ploucify",
            "color": "hsl(47, 70%, 50%)",
            "loc": 92651
          }
        ]
      },
      {
        "name": "misc",
        "color": "hsl(229, 70%, 50%)",
        "children": [
          {
            "name": "greetings",
            "color": "hsl(354, 70%, 50%)",
            "children": [
              {
                "name": "hey",
                "color": "hsl(187, 70%, 50%)",
                "loc": 194697
              },
              {
                "name": "HOWDY",
                "color": "hsl(15, 70%, 50%)",
                "loc": 190438
              },
              {
                "name": "aloha",
                "color": "hsl(264, 70%, 50%)",
                "loc": 25311
              },
              {
                "name": "AHOY",
                "color": "hsl(154, 70%, 50%)",
                "loc": 173572
              }
            ]
          },
          {
            "name": "other",
            "color": "hsl(55, 70%, 50%)",
            "loc": 3410
          },
          {
            "name": "path",
            "color": "hsl(70, 70%, 50%)",
            "children": [
              {
                "name": "pathA",
                "color": "hsl(50, 70%, 50%)",
                "loc": 155123
              },
              {
                "name": "pathB",
                "color": "hsl(134, 70%, 50%)",
                "children": [
                  {
                    "name": "pathB1",
                    "color": "hsl(90, 70%, 50%)",
                    "loc": 114790
                  },
                  {
                    "name": "pathB2",
                    "color": "hsl(223, 70%, 50%)",
                    "loc": 143460
                  },
                  {
                    "name": "pathB3",
                    "color": "hsl(62, 70%, 50%)",
                    "loc": 26392
                  },
                  {
                    "name": "pathB4",
                    "color": "hsl(199, 70%, 50%)",
                    "loc": 23299
                  }
                ]
              },
              {
                "name": "pathC",
                "color": "hsl(275, 70%, 50%)",
                "children": [
                  {
                    "name": "pathC1",
                    "color": "hsl(326, 70%, 50%)",
                    "loc": 12981
                  },
                  {
                    "name": "pathC2",
                    "color": "hsl(29, 70%, 50%)",
                    "loc": 37185
                  },
                  {
                    "name": "pathC3",
                    "color": "hsl(1, 70%, 50%)",
                    "loc": 95837
                  },
                  {
                    "name": "pathC4",
                    "color": "hsl(148, 70%, 50%)",
                    "loc": 85839
                  },
                  {
                    "name": "pathC5",
                    "color": "hsl(236, 70%, 50%)",
                    "loc": 122334
                  },
                  {
                    "name": "pathC6",
                    "color": "hsl(12, 70%, 50%)",
                    "loc": 194221
                  },
                  {
                    "name": "pathC7",
                    "color": "hsl(320, 70%, 50%)",
                    "loc": 81348
                  },
                  {
                    "name": "pathC8",
                    "color": "hsl(236, 70%, 50%)",
                    "loc": 94463
                  },
                  {
                    "name": "pathC9",
                    "color": "hsl(29, 70%, 50%)",
                    "loc": 96076
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }

  

function CircleCharts() {
  return (
    <ResponsiveCirclePacking
    data={data}
    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    id="name"
    value="loc"
    colors={{ scheme: 'nivo' }}
    childColor={{
        from: 'color',
        modifiers: [
            [
                'brighter',
                '0.4'
            ]
        ]
    }}
    enableLabels={true}
    labelsFilter={n=>2===n.node.depth}
    labelsSkipRadius={15}
    labelTextColor={{ theme: 'labels.text.fill' }}
    borderWidth={1}
    borderColor={{ theme: 'background' }}
    defs={[
        {
            id: 'lines',
            type: 'patternLines',
            background: 'none',
            color: 'inherit',
            rotation: -45,
            lineWidth: 5,
            spacing: 8
        }
    ]}
    fill={[
        {
            match: {
                depth: 1
            },
            id: 'lines'
        }
    ]}
  />
  )
}

export default CircleCharts