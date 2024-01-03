import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdDownloadForOffline } from "react-icons/md";
function BasteNama({image,title , dec , time ,download}) {
  return ( 
     <>
      <div className='flex flex-row justify-center'>
      <div className="max-w-sm  w-72 h-full my-3 bg-white border border-gray-300 rounded-lg  ">
        <div className=''>
        <img class="rounded-t-lg flex flex-row justify-center h-52 my-auto mx-auto w-full object-cover " src={image} alt="بنر" />
        </div>
    <div className="p-5">       
        <p className="mb-1  flex flex-row w-full  h-6 text-gray-700 dark:text-gray-400 justify-center text-md font-bold">{title}</p>    
    </div>
    <div className="p-2">
    <Link to={download} className="flex flex-row justify-center w-full items-center px-3 py-2 text-sm font-medium text-center bg-yellow-500 rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            دانلود

    </Link>
    </div>
    
   </div>
      </div>
     </>
  )
}

export default BasteNama