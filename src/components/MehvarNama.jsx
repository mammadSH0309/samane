import { Avatar, Col, Row } from 'antd'
import React from 'react'

function MehvarNama() {
  return (
    <>
       <div className='flex flex-row'>
       <div className='flex flex-row justify-start ml-52 font-bold text-lg'>
            تایتل
       </div>
       <div className='h-full w-full'>
        <div className='flex flex-col'>
            
            <div className='flex flex-col ml-12'>
            
            <div className='flex flex-row h-16 items-center'>
                
                <div><Avatar className='bg-blue-200'>
                    ۱
                    </Avatar>
                </div>
                <div className='ml-2  px-1 w-96 h-10 overflow-scroll justify-center text-wrap  break-words  items-center align-middle shadow-md'>asdfasasdasdasdfasdfdasfasdfadsfasdfasfadsfasf</div>
            </div>

            <div className='flex ml-12 flex-row h-16 items-center'>
                <div>
                    <Avatar className='bg-blue-300'>
                    ۲
                    </Avatar>
                </div>
                <div className='ml-2  px-1  w-96 h-10 overflow-scroll justify-center text-wrap  break-words  items-center align-middle shadow-md'>
                    asdfasfasdfdasfasdfadsfasdfasfadsfasf
                </div>
            </div>

            <div className='flex ml-24 flex-row h-16  items-center'>
                <div>
                <Avatar className='bg-blue-300'>
                    ۳
                </Avatar>
                </div>
                
                <p className='ml-2  px-1  w-96 h-10 overflow-scroll  justify-center text-wrap  break-words  items-center align-middle shadow-md '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus totam neque rerum error modi perspiciatis adipisci ipsam libero sapiente enim laborum, suscipit veniam minima!
                </p>
                
            </div>

            <div className='flex ml-12 flex-row h-16 items-center'>
                <div className=''>
                    <Avatar className='bg-blue-400'>
                    ۴
                    </Avatar>
                    </div>
                <div className='ml-2  px-1   w-96 h-10  overflow-scroll  justify-center text-wrap  break-words  items-center align-middle shadow-md'>
                    asdfasfasdfdasfasdfadsfasdfasfadsfasfadadadadasdasdkjaskflsjdafjdasklfajsklfjaskfljasflk
                </div>
            </div>

            <div className='flex flex-row  h-16 items-center'>
                <div>
                    <Avatar className='bg-blue-500'>
                        ۵
                    </Avatar>
                </div>
                <div className='ml-2  px-1  w-96 h-10 overflow-scroll justify-center text-wrap  break-words  items-center align-middle shadow-md'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi tenetur aspernatur harum, laborum nihil nostrum provident veritatis, mollitia error aut quos molestias cum consequuntur et perferendis alias quo aliquam in.
                </div>
            </div>

            </div>
        
        </div>
       </div>
       </div>
    </>
  )
}

export default MehvarNama