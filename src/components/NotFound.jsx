import { Button, Flex } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom/dist'

function NotFound() {
  return (
    <>
     <Flex justify='center' align='center' className='h-full w-full mt-5'>
        <h4 className='font-semibold text-red-600'>صفحه مورد نظر پیدا نشد</h4>
     </Flex>
     <Link to={'/dashboard/homepage'}>
     <Button className='mx-auto w-screen mt-5'>
      برگشت
     </Button>
     </Link>
    </>
  )
}

export default NotFound


const item = [
  {
      name : 'زیست بوم',
      id : 1,
      sub : [{name : 'بازی' , id : 1} , {name : 'من' , id:2}],
      
  } ,

  {
      name : 'زیست احسان',
      id : 3,
      sub : [],
      
  } , 

  {
      name : 'من و شما',
      id : 10,
      sub : [{name : 'من' , id : 1}],
      
  } ,
]
