import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { GiWorld } from "react-icons/gi";
import { useGetFakeNewsQuery } from '../query/Charts';
import { BiLogoTelegram } from "react-icons/bi";
import { IoLogoTwitter } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

function CardT({title , target , platform , level }) {

    const {data , isLoading} = useGetFakeNewsQuery()

if(!isLoading){
    return (
    

        <div dir='rtl' class="w-[40rem] h-full   p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex items-center justify-between mb-4">
                <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">شایعات</h5>
           </div>
           <div class="">
                <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                {data.map((item, index)=>(
                    <li key={index} class="py-3 sm:py-4">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <div class="w-8 h-8 rounded-full" >
                             {item.platform === "telegram" && (<BiLogoTelegram fontSize={30}/>)}
                             {item.platform === "instagram" && (<RiInstagramFill fontSize={30}/>)}
                             {item.platform === "twitter" && (<IoLogoTwitter fontSize={30}/>)}
                            </div>
                        </div>
                        <div class="flex-1 min-w-0 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {item.title}
                            </p>
                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            {item.target}
                            </p>
                        </div>
                        <div class="inline-flex items-center text-base font-semibold  text-gray-900 dark:text-white">
                        {item.level === 'ملی' ? (<FaLocationDot fontSize={30}/>) : (<GiWorld fontSize={30}/>)}
                        </div>
                    </div>
                </li>
                
                ))}
                </ul>
           </div>
        </div>
        
          )
}
}

export default CardT