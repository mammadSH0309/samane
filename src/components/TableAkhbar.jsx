import React, { useState } from 'react'

import { DataGrid } from '@mui/x-data-grid';
import Skeleton from '@mui/material/Skeleton';
import { Box } from '@mui/material';
import { useGetTelegramNewsOstanAllQuery } from '../query/Charts';

import { PiHashFill } from "react-icons/pi";
function TableAkhbar({data , isLoading , isSuccess , params, setParams}) {



  


    
  return (
  <>
  
<div>
{!isLoading && isSuccess? (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                  نسبت به 
                </th>
                <th scope="col" class="px-6 py-3">
                    تعداد خبر
                </th>
                <th scope="col" class="px-6 py-3">
                تعداد بازدید
                </th>
                <th scope="col" class="px-6 py-3">
                تعداد واکنش
                </th>
                <th scope="col" class="px-6 py-3">
                تعداد رسانه
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    تعداد خبر
                </th>
                <td class="px-6 py-4">
                    <PiHashFill fontSize={18}/>
                </td>
                <td class="px-6 py-4">
                    {data?.ratio_views_post_news}
                </td>
                <td class="px-6 py-4">
                    {data?.ratio_reaction_views_post}
                </td>
                <td class="px-6 py-4">
                    {data?.ratio_reference_news}
                </td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    تعداد بازدید
                </th>
                <td class="px-6 py-4">
                    {data?.ratio_news_views_post}
                </td>
                <td class="px-6 py-4">
                <PiHashFill fontSize={18}/>
                </td>
                <td class="px-6 py-4">
                    {data?.ratio_reaction_views_post}
                </td>
                <td class="px-6 py-4">
                    {data?.ratio_reference_views_post}
                </td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    تعداد واکنش 
                </th>
                <td class="px-6 py-4">
                    {data?.ratio_news_reaction}
                </td>
                <td class="px-6 py-4">
                    {data?.ratio_views_post_reaction}
                </td>
                <td class="px-6 py-4">
                <PiHashFill fontSize={18}/>
                </td>
                <td class="px-6 py-4">
                    {data?.ratio_reference_reaction}
                </td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  تعداد رسانه 
                </th>
                <td class="px-6 py-4">
                    {data?.ratio_news_reference}
                </td>
                <td class="px-6 py-4">
                    {data?.ratio_views_post_reference}
                </td>
                <td class="px-6 py-4">
                    {data?.ratio_reaction_reference}
                </td>
                <td class="px-6 py-4">
                <PiHashFill fontSize={18}/>
                </td>
            </tr>
            
        </tbody>
    </table>
</div>
)
: <>
<div class="relative overflow-x-auto p-2 shadow-md h-32 sm:rounded-lg ">
<Skeleton animation="wave" />
<Skeleton animation="wave" />
<Skeleton animation="wave" />
<Skeleton animation="wave" />
<Skeleton animation="wave" />
</div>

</>
}
</div>
  
  </>
  )
}

export default TableAkhbar





{/* <Box sx={{ height:370, width: '100%' }}>
     
     <DataGrid
        rows={rows}
        columns={columns}
        pagination='false'
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
       
       
      />
  </Box> */}









// <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
//     <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//         <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//             <tr>
//                 <th scope="col" class="px-6 py-3">
//                     Product name
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     Color
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     Category
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     Price
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     Action
//                 </th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
//                 <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     Apple MacBook Pro 17"
//                 </th>
//                 <td class="px-6 py-4">
//                     Silver
//                 </td>
//                 <td class="px-6 py-4">
//                     Laptop
//                 </td>
//                 <td class="px-6 py-4">
//                     $2999
//                 </td>
//                 <td class="px-6 py-4">
//                     <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//                 </td>
//             </tr>
//             <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
//                 <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     Microsoft Surface Pro
//                 </th>
//                 <td class="px-6 py-4">
//                     White
//                 </td>
//                 <td class="px-6 py-4">
//                     Laptop PC
//                 </td>
//                 <td class="px-6 py-4">
//                     $1999
//                 </td>
//                 <td class="px-6 py-4">
//                     <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//                 </td>
//             </tr>
//             <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
//                 <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     Magic Mouse 2
//                 </th>
//                 <td class="px-6 py-4">
//                     Black
//                 </td>
//                 <td class="px-6 py-4">
//                     Accessories
//                 </td>
//                 <td class="px-6 py-4">
//                     $99
//                 </td>
//                 <td class="px-6 py-4">
//                     <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//                 </td>
//             </tr>
//             <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
//                 <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     Google Pixel Phone
//                 </th>
//                 <td class="px-6 py-4">
//                     Gray
//                 </td>
//                 <td class="px-6 py-4">
//                     Phone
//                 </td>
//                 <td class="px-6 py-4">
//                     $799
//                 </td>
//                 <td class="px-6 py-4">
//                     <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//                 </td>
//             </tr>
//             <tr>
//                 <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     Apple Watch 5
//                 </th>
//                 <td class="px-6 py-4">
//                     Red
//                 </td>
//                 <td class="px-6 py-4">
//                     Wearables
//                 </td>
//                 <td class="px-6 py-4">
//                     $999
//                 </td>
//                 <td class="px-6 py-4">
//                     <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//                 </td>
//             </tr>
//         </tbody>
//     </table>
// </div>