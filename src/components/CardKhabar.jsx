import React, { useState } from 'react'
import { IoCopy } from "react-icons/io5";
import {message} from 'antd'
import {Swiper , SwiperSlide} from 'swiper/react'
import {Pagination} from 'swiper/modules'
import { EffectCoverflow} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';
import { useGetRasadNamaQuery } from '../query/Charts';
function CardKhabar({title  ,dec , important , tag , time}) {
  const {data:dataRasad , isLoading:loadingRasad } = useGetRasadNamaQuery()

  const Stitle = dec?.slice(0,100)
  const [visible , setVisible] = useState(true)
  
  return (
   <>
    <Swiper
    loop={true}
    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={3}
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
    }}
    pagination={true}
    modules={[EffectCoverflow, Pagination]}
    className="mySwiper"
      >
        {dataRasad.map((item , index)=>(
                <SwiperSlide>
                          <div className="  rounded  shadow-lg my-3   h-full w-full  rounded-tl-lg rounded-br-lg  border border-black ">
                    <div className=" px-3 py-6   font-bold  mb-1 text-justify h-20 ">{item.title}</div>
                    <div className="px-3 pt-4 ">
                    <div className=' h-20 border-white drop-shadow-xl overscroll-y-contain overflow-scroll bg-scroll text-sm  font-khameneiiRegular  '>
                    <p className="text-gray-700 text-justify drop-shadow-xl  ">
                      {visible ? item.description.slice(0,100) : item.description}
                      <button className='text-blue-700' onClick={()=>setVisible(!visible)}>
                        {visible? "ادامه" : "بستن"}
                
                      </button>
                    </p>
                    </div>
                  </div>
                  <div className="px-4 py-5 pb-2    ">
                  <span className={`inline-block shadow-sm  bg-gray-200 ${item.important_level === "مهم"? 'text-red-500' : "text-orange-300"} rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2`}>
                    {item.important_level}
                  </span>
                    {item.subject_tag?.map((item , index)=>(
                      <span key={index} className="inline-block shadow-sm   bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold  mr-2 mb-2">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className='flex flex-row  w-full justify-end pl-4'>
                    <button>
                    <IoCopy  fontSize={17} 
                     onClick={()=>{
                      const jam = `${item.title}\n\n` + `${item.dec}\n\n` + `اهمیت : ${item.important}\n\n ` + `تگ ها : ${item.tag}` 
                      navigator.clipboard.writeText(jam)
                      message.success('کپی شد')
                    }}
                    />
                    </button>
                  </div>
                  <div className=" flex flex-row px-6 py-5 pb-1 "> 
                  
                  <span className="shadow-sm  text-center  rounded-full px-2 py-1 mb-3 text-sm font-semibold ">
                    {item.date_time_upload}
                  </span>
                  </div>
                  
                    </div> 
                
                        </SwiperSlide>
        ))}
      
      </Swiper>
   </>
  )
}

export default CardKhabar




// <div className="rounded  shadow-lg my-5  transition  h-94 transform animate-fade-right rounded-tl-lg rounded-br-lg  border border-black ">
//     <div className=" px-3 py-6  font-bold  mb-1 text-justify h-20 ">{title}</div>
//     <div className="px-3 pt-4 ">
//     <div className=' h-20 border-white drop-shadow-xl overscroll-y-contain overflow-scroll bg-scroll text-sm  font-khameneiiRegular  '>
//     <p className="text-gray-700 text-justify drop-shadow-xl  ">
//       {visible ? Stitle : dec}
//       <button className='text-blue-700' onClick={()=>setVisible(!visible)}>
//         {visible? "ادامه" : "بستن"}

//       </button>
//     </p>
//     </div>
//   </div>
//   <div className="px-4 py-5 pb-2    ">
//   <span className={`inline-block shadow-sm  bg-gray-200 ${important === "مهم"? 'text-red-500' : "text-orange-300"} rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2`}>
//     {important}
//   </span>
//     {tag?.map((item , index)=>(
//       <span key={index} className="inline-block shadow-sm   bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold  mr-2 mb-2">
//         {item}
//       </span>
//     ))}
//   </div>
//   <div className='flex flex-row  w-full justify-end pl-4'>
//     <button>
//     <IoCopy  fontSize={17} 
//      onClick={()=>{
//       const jam = `${title}\n\n` + `${dec}\n\n` + `اهمیت : ${important}\n\n ` + `تگ ها : ${tag}` 
//       navigator.clipboard.writeText(jam)
//       message.success('کپی شد')
//     }}
//     />
//     </button>
//   </div>
//   <div className=" flex flex-row px-6 py-5 pb-1 "> 
  
//   <span className="shadow-sm  text-center  rounded-full px-2 py-1 mb-3 text-sm font-semibold text-gray-700 ">
//     {time}
//   </span>
//   </div>
  
//     </div> 




 