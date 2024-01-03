import { Button, Divider, Image, Tooltip  } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { Element } from 'react-scroll'
function AfkarSanji({id , title , des , type_packet , doc , img }) {

  const text = <div className='text-justify '>
  {des}
  </div>
  return ( 
    <>
     <Element name='afkar' id='afkar' className=' w-[220px]   bg-white border border-gray-300 rounded-md' >
      <div className=''>
        <Image className='flex flex-row justify-center text-center  rounded-tl-lg rounded-tr-lg'
        width={219}
        height={200}
        src = {img}
        />
      </div >
      <div className='flex w-[220px] flex-row justify-center text-md  '>
        <Tooltip placement='bottom' title={text}>
        <p className='overflow-hidden text-justify mx-2 '>
         {title}
        </p>
        </Tooltip>
      </div>
      <div className='flex flex-row justify-center pt-4'>
        <Link to={doc} className='w-full mx-2 bg-yellow-500 mb-2 text-white '>
        دانلود
        </Link>
      </div>

    </Element >



    
    </>


  )
}

export default AfkarSanji