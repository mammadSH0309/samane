import React from 'react'
import IconMenu from './IconMenu'
import {Link} from 'react-router-dom'
import { IoHelpCircleOutline } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { Tooltip } from 'antd';

function HeaderItem() {
  return (
    <div className='flex flex-row h-full justify-between align-middle items-center'>
      <div className='flex flex-row gap-5'>
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
