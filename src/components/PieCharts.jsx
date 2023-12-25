import { ResponsivePie } from '@nivo/pie'
import React from 'react'

function PieCharts({data}){
    
    
    return (
       
        <ResponsivePie
            theme={{
                text : {
                    fontFamily : 'khameneiiRegular',
                    
                },
               
                
            }}
                data={data}
                enableArcLabels = {true}
                activeInnerRadiusOffset={15}
                activeOuterRadiusOffset={15}
                motionConfig={'wobbly'}
                animate
                id={'trend'}
                value={'tweets_number'}
                innerRadius={0.15}
                padAngle={3} 
                arcLinkLabelsTextOffset={50}
                arcLinkLabelsDiagonalLength={20}
                arcLinkLabelsStraightLength={10}
                margin={{ top: 80, right: 100, bottom: 100, left: 100 }}
                
            />
        
    )
    }


export default PieCharts




