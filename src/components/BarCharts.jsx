import { ResponsiveBar } from '@nivo/bar'
import React from 'react'

function BarCharts({data}) {


const currentData = data.map((item)=>{
    // console.log(item.trend)
    let test = item.trend
    console.log(test)
    return test
})
console.log(currentData)

return (
    <ResponsiveBar
                enableLabel={false}
                groupMode='grouped'
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
                key={'trend'}
                keys={['tweets_number']}
                indexBy='datetime'
                margin={{ top: 60, right: 100, bottom: 80, left: 120 }}
                padding={0.12}
                borderRadius={'4'}
                axisLeft={{
                    tickPadding : 18,
                    legend : 'تعداد توییت',
                    legendPosition : 'middle' , 
                    legendOffset : -50,
                    tickSize : 20, 
                    
                }}
                axisBottom={{
                    tickRotation : -40, 
                    legend : 'ترند',
                    legendOffset : 50,
                    legendPosition : 'middle'
                }}
            />
  )
}

export default BarCharts