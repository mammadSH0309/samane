import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { GiWorld } from "react-icons/gi";
import { useGetFakeNewsQuery } from '../query/Charts';
import { BiLogoTelegram } from "react-icons/bi";
import { IoLogoTwitter } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { Element } from 'react-scroll';
function CardT({title , target , platform , level  , id}) {

    const {data , isLoading} = useGetFakeNewsQuery()
    
if(!isLoading){
    const Sdata = data.slice(0,5)
    return (
    
         
        <Element name='shayeat' id='shayeat' dir='rtl' class="w-[100%] h-[100%]  flex flex-col        dark:bg-gray-800 dark:border-gray-700">
            
           <div class="">
                <ul role="list"  >
                {Sdata.map((item, index)=>(
                    <li key={index} class=" my-2 h-[62px]  sm:py-4  shadow-md rounded-md">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <div class="w-8 h-8 mr-2 rounded-full"
                            style={{color : 'gray'}}         
                            >     
                             {item.platform === "telegram" && (<BiLogoTelegram fontSize={30}/>)}
                             {item.platform === "instagram" && (<RiInstagramFill fontSize={30}/>)}
                             {item.platform === "twitter" && (<IoLogoTwitter fontSize={30}/>)}
                            </div>
                        </div>
                        <div class="flex-1 min-w-0  ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {item.title}
                            </p>
                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            {item.target}
                            </p>
                        </div>
                        <div class="inline-flex ml-2 items-center text-base font-semibold  "
                         style={{color : 'gray'}}
                        >
                        {item.level === 'ملی' ? (<FaLocationDot fontSize={30}/>) : (<GiWorld fontSize={30}/>)}
                        </div>
                    </div>
                </li>
                
                ))}
                </ul>
           </div>
        </Element >
        
          )
}
}

export default CardT