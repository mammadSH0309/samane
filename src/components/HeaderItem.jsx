import React from 'react'
import IconMenu from './IconMenu'
import {Link} from 'react-router-dom'
import { IoHelpCircleOutline } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { Tooltip } from 'antd';

function HeaderItem({collapsed , setCollapsed}) {
  return (
    <div className='flex flex-row  h-full  justify-between align-middle items-center p-0 '>
      <div className='flex flex-row  gap-3 '>
        <MdOutlineMenu  style={{fontSize : 20  }} onClick={()=> setCollapsed(!collapsed)}  />
        <Link to={'/help'}>
          <Tooltip>
            <IoHelpCircleOutline style={{fontSize : 20 }}/>
          </Tooltip>
        </Link>
        <Link to={'/help'}>
          <MdLocalPhone style={{fontSize : 20 }}/>
        </Link>
      </div>
      <div>
        <IconMenu/>
      </div>
    </div>
  )
}

export default HeaderItem
