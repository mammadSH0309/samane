import React, { useEffect, useState } from 'react'
import {useKeenSlider} from 'keen-slider/react'
import { LiaTelegramPlane } from "react-icons/lia";
import "keen-slider/keen-slider.min.css"
import { FaXTwitter } from 'react-icons/fa6'
import { LiaInstagram } from "react-icons/lia";
import { GrFormView } from "react-icons/gr";
import { useGetPopularNewsQuery } from '../query/Charts/KhabarApi'
function CardKhabarSlider() {
    const [sliderRef , slider] = useKeenSlider({loop : true},
         [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 3000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
        )

        useEffect(()=> {
          slider.current?.update({
            ...sliderRef
          })
        } , [sliderRef, slider])

    const [visible , setVisible] = useState(true)
    const{data , isLoading , isSuccess} = useGetPopularNewsQuery();
  return (
    <div ref={sliderRef} className="keen-slider">


    {!isLoading && isSuccess ? data?.telegram_online_news.map((item , index)=> (
        <div className="keen-slider__slide number-slide1 border border-black rounded-md h-40  ">
        <div className='flex flex-row justify-between px-2  '>
        <span className='font-bold mt-2 '>{item.channel_name !== null ? item.channel_name : item.channel_id}</span>
        <span className='font-bold mt-2 ml-1'>
            <LiaTelegramPlane/>
        </span>  
        </div>
    
        <div className=' h-[95px] border-white drop-shadow-xl overscroll-y-contain overflow-scroll bg-scroll text-sm   '>
        <p className=" text-justify drop-shadow-xl mx-2 mt-1 text-black  ">     
        {visible ? item.text_clean.slice(0,200) : item.text_clean}
        <button className='' onClick={()=>setVisible(!visible)}>
        {visible? "..." : "بستن"}

        </button>
        </p>
        </div> 

        <div className='flex flex-row justify-end pl-6 mb-3 items-center'>
    
        <div>
        <GrFormView fontSize={20} style={{marginBottom: 3}}/>
        </div>
        <div>{item.views_post}</div>
       
        </div>
       
    </div>
    )) : (
        <></>
    )}
    {!isLoading && isSuccess ? 
        data.twitter_online_news.map((item , index)=>(
           <>
           <div key={index} className="keen-slider__slide number-slide1 border border-black rounded-md h-40  w-full ">
    <div className='flex flex-row justify-between px-2  '>
    <span className='font-bold mt-1 '>{item.title !== null ? item.title : item.extracted_hashtag} </span>
    <span className='font-bold mt-2 ml-1'>
    <FaXTwitter/>
    </span>  
    </div>

    <div className=' h-[95px] border-white drop-shadow-xl overscroll-y-contain overflow-scroll bg-scroll text-sm   '>
    <p className=" text-justify drop-shadow-xl mx-2 mt-1 text-black  ">     
    {visible ? item.description.slice(0,200) : item.description}
    <button className='' onClick={()=>setVisible(!visible)}>
    {visible? "..." : "بستن"}

    </button>
    </p>
    </div> 

        <div className='flex flex-row justify-end pl-6 mb-3 items-center'>

        <div>
            <GrFormView fontSize={20} style={{marginBottom: 3}}/>
            </div>
            <div>{item.like_count}</div>

            </div>

            </div> 
           
           </> 
        ))
     : (
        <></>
    )}

{!isLoading && isSuccess ? 
        data.instagram_online_news.map((item , index)=>(
           <>
           <div key={index} className="keen-slider__slide number-slide1 border border-black rounded-md h-40  w-full ">
    <div className='flex flex-row justify-between px-2  '>
    <span className='font-bold mt-1 '>{item.title }</span>
    <span className='font-bold mt-2 ml-1'>
    <LiaInstagram/>
    </span>  
    </div>
    <div className=' h-[95px] border-white drop-shadow-xl overscroll-y-contain overflow-scroll bg-scroll text-sm   '>
    <p className=" text-justify drop-shadow-xl mx-2 mt-1 text-black  ">     
    {visible ? item.description.slice(0,200) : item.description}
    <button className='' onClick={()=>setVisible(!visible)}>
    {visible? "..." : "بستن"}

    </button>
    </p>
    </div> 

        <div className='flex flex-row justify-end pl-6 mb-3 items-center'>

        <div>
            <GrFormView fontSize={20} style={{marginBottom: 3}}/>
            </div>
            <div>{item.comment_count}</div>

            </div>

            </div> 
           
           </> 
        ))
     : (
        <></>
    )}
    
  </div>
  )
}

export default CardKhabarSlider






// <div className='text-justify  px-3 pt-2 h-20 overflow-clip'>
// {item.text_clean}
// </div>