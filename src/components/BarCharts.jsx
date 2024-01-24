import { ResponsiveBar } from '@nivo/bar'
import React, { useState } from 'react'
import { useGetEhsasTelegramNewsQuery } from '../query/Charts'
import RadioSelect from './RadioSelect'
import { useLocation } from 'react-router-dom'

function BarCharts({data , isLoading, title , valueLayout    }) {
const [value , setValue ]  = useState(1)
const location = useLocation()
const {pathname} = location
const path = pathname.split("/")[2]
if(!isLoading){
return (
    <>
    <div className='flex flex-row justify-between ml-5'>   
            <div className='text-lg mr-5'>{title}</div>
            <div><RadioSelect value={value} setValue={setValue} title1={'عمودی'} title2={'افقی'} /></div>
    </div>
    <ResponsiveBar
    groupMode='stacked'
    layout={value === 1 ? "vertical" : "horizontal"}
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
                borderWidth={2}
                indexBy='channel_name'
                keys={[
                    'دختر',
                    "کارگر",
                    "قالی",
                    "تهران",
                    "ایران"
                ]}
                margin={{ top: 30, right: 100, bottom: 180, left: 120 }}
                padding={0.15}
                borderRadius={'0'}
                axisLeft={{
                    tickPadding : value === 1 ? 23 : 75,
                    legend : value === 1 ? "تعداد توییت" : "ترند",
                    legendPosition : 'middle' , 
                    tickRotation : -0,
                    legendOffset : -90,
                    tickSize : 5, 
                    
                }}
                axisBottom={{
                    tickPadding : 15 , 
                    tickRotation : -50, 
                    legend : value === 1 ? "ترند" : "تعداد توییت",
                    legendOffset : 90,
                    legendPosition : 'middle'
                }}
            />
         </>
  )
}
}

export default BarCharts