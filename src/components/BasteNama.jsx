import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdDownloadForOffline } from "react-icons/md";
function BasteNama({image,title , dec , time ,download}) {
  return ( 
     <>
      <div className="max-w-sm  w-72 h-96 my-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className=''>
        <img class="rounded-t-lg flex flex-row justify-center h-52 my-auto mx-auto w-full object-cover " src={image} alt="بنر" />
        </div>
    <div className="p-5">       
        <p className="mb-3  flex flex-row w-full  h-12 text-gray-700 dark:text-gray-400 justify-center text-md font-bold">{title}</p>    
    </div>
    <div className="p-5">
    <Link to={download} className="flex flex-row justify-start w-20 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            دانلود
             <MdDownloadForOffline style={{fontSize : 25 , marginRight : 2}}/>
    </Link>
    </div>
    
   </div>
     </>
  )
}

export default BasteNama