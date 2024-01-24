import React from 'react'
import { LiaTelegramPlane } from "react-icons/lia";
import { FaXTwitter } from 'react-icons/fa6'
import { LiaInstagram } from "react-icons/lia";
import ListIconTable from './ListIconTable';
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import InputIcon from "react-multi-date-picker/components/input_icon"

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';



import { IoIosSearch } from 'react-icons/io';

import { Button, Select } from 'antd';




function AsliPage() {



  return (
    
    <>
    
    <div className='flex flex-row justify-center  mx-52 text-3xl'>
    
    </div>
   
    <div className='flex flex-col h-64 mx-52 animate-fade-up  animate-ease-linear transition duration-100  bg-white mb-3 shadow-md  mt-5 rounded-lg '>
    <div className=' flex flex-row justify-center border-b   border-b-gray-200 '>
            <ListIconTable />
    </div>

    <div>
    <div className='m-2 p-2 flex flex-row gap-2 '>
        <div>
        <Button>
            همه مطالب
        </Button>
        </div>
        <div>
        <Button>
            مطالب استان
        </Button>
        </div>
    </div>
    <div className='flex flex-row gap-x-6    justify-center mx-36 items-center align-middle my-4 '>
        
            <div style={{height : 45}} className='flex flex-row items-center justify-start gap-4 w-[400px] h-8   border bg-white  rounded-md'>
                <div className="flex items-center ps-3 ">
                  <span class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  >
                    <IoIosSearch/>
                  </span>
                </div>
                <input type="search" placeholder='اطلاعات خود را وارد کنید' className='w-full h-full' />
            </div>
            
           <div>
            
           </div>
            
            <div className=''>
            <Select
            placeholder = "رکورد"
       
          style={{
            width: 120,
          }}
      size='large'
      options={[
        {
          value: '1',
          label: '1',
        },
        {
          value: '5',
          label: '5',
        },
        {
          value: '10',
          label: '10',
        },
       
      ]}
    />
            </div>
            <div>
                <Button size='large' className='bg-yellow-400 w-24' style={{height : 45 , width : 90}}> 
                    جستجو
                </Button>
            </div>
          </div>
    </div>
   
    </div>
    <div>
    
    </div>
    
    </>
  )
}

export default AsliPage







// <ul className='flex flex-row gap-3'>
//         <li>
//             <div className='flex flex-col justify-center align-middle'>
//                 <span>
//                     <LiaTelegramPlane fontSize={40}/>
//                     </span>
//                 <span  className='mr-1'
//                 >
//                     تلگرام
//                 </span>
//             </div>
//         </li>
//         <li>
//             <div className='flex flex-col justify-center align-middle'>
//                 <span>
//                     <FaXTwitter fontSize={40}/>
//                     </span>
//                 <span  className='mr-1 '
//                 >
//                     توییتر
//                 </span>
//             </div>
//         </li>
//         <li>
//             <div className='flex flex-col justify-center align-middle'>
//                 <span>
//                     <LiaInstagram fontSize={40}/>
//                     </span>
//                 <span  className='mr-1'
//                 >
//                     تلگرام
//                 </span>
//             </div>
//         </li>
//         <li>
//             <div className='flex flex-col justify-center align-middle'>
//                 <span>
//                     <LiaInstagram fontSize={40}/>
//                     </span>
//                 <span  className='mr-1'
//                 >
//                     تلگرام
//                 </span>
//             </div>
//         </li>
//         <li>
//             <div className='flex flex-col justify-center align-middle'>
//                 <span>
//                     <LiaInstagram fontSize={40}/>
//                     </span>
//                 <span  className='mr-1'
//                 >
//                     تلگرام
//                 </span>
//             </div>
//         </li>
//         <li>
//             <div className='flex flex-col justify-center align-middle'>
//                 <span>
//                     <LiaInstagram fontSize={40}/>
//                     </span>
//                 <span  className='mr-1'
//                 >
//                     تلگرام
//                 </span>
//             </div>
//         </li>
//         <li>
//             <div className='flex flex-col justify-center align-middle'>
//                 <span>
//                     <LiaInstagram fontSize={40}/>
//                     </span>
//                 <span  className='mr-1'
//                 >
//                     تلگرام
//                 </span>
//             </div>
//         </li>
//     </ul>