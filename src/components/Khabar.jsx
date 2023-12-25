import React from 'react'

function Khabar() {
  return (
    <div className='h-96 shadow-xl  m-2 p-5 gap-y-2 rounded-lg flex flex-col items-center bg-white '>
    <div className='w-[98%] h-[33%]  shadow-lg  border border-collapse border-black '>
        <div className=' flex-row justify-start p-2 m-1 rounded-t-lg rounded-r-lg bg-red-600 inline-flex'>
            خبر داغ
        </div>
    </div>
    <div className='w-[98%] h-[33%]   shadow-lg border border-black '>
        <div className=' flex-row justify-start p-2 m-1 rounded-t-lg rounded-r-lg bg-red-600 inline-flex'>
                خبر لحظه ای 
            </div>
        </div>
    <div className='w-[98%] h-[32%]  shadow-lg border border-black '>
        <div className=' flex-row justify-start p-2 m-1 rounded-t-lg rounded-r-lg bg-red-600 inline-flex'>
                خبر داغ
            </div>
        </div>
</div>
  )
}

export default Khabar