import { Avatar, Button, Col, Row } from 'antd'
import React, { useState } from 'react'
import { DownloadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function BasteDownload({title , dec , time , download , images}) {

    const Stitle = dec?.slice(0,100)
    const [visible , setVisible] = useState(true) 
  return (
    <>
    <Row className='h-96 overflow-y-scroll overscroll-contain rounded-lg  font-khameneiiRegular '>
        {/* <Col className=' justify-center p-2 overflow-hidden  '
        xl={12} 
        >
        <div className='overflow-hidden  border-white  shadow-md  text-sm  font-khameneiiRegular '>
        <p className="text-gray-700 text-justify drop-shadow-md  h-full ">
        {visible ? Stitle : dec}
        <button className='text-blue-700' onClick={()=>setVisible(!visible)}>
        {visible? "ادامه" : "بستن"}

        </button>
        </p>
        </div>
        </Col> */}
        <Row className=' bg-slate-200 h-96 w-full  '
        xl={24}
        >
            <div className=' sticky top-0 w-full right-0 left-0'>

            <div className='bg-yellow-400  shadow-sm   '>
            {/* <div className='flex flex-row justify-center  py-2'>
            <img  className=' object-cover' src={images} />
            </div> */}
            <div className='flex flex-row justify-center py-1 px-4 text-lg  '>
                {title}
            </div>
            </div>
            <div>
            </div>
            <div className='flex flex-row justify-between ml-8 align-middle px-10 mb-5  w-full   shadow-md   '>
                <div className='mt-3 mr-2 text-md font-bold flex flex-row justify-start items-center w-full  '>
                    {time}
                </div>
                <div>
                <Link to={download}>
                   
                <Button type="primary" shape="round"   icon={<DownloadOutlined />}  />
                </Link>
                </div>
            </div> 
            <div className='p-2 m-2 text-justify'>
               {dec}
           </div>  
           </div>
          
        </Row>
        
    </Row>
    
    </>
  )
}

export default BasteDownload