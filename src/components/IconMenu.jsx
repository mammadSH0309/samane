import React, { useState } from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Dropdown,} from 'antd';

import {  useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../slices/AccountSlice';


const items = [
    {
        key: '1',
        label : 'خروج'
    }
]
function IconMenu() {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    

  return (
    <Dropdown
    placement="bottomLeft"
    arrow = {{
        pointAtCenter : true 
    }}
    
    menu={{
        items,
        triggerSubMenuAction : 'click',

        onClick : ()=> {
            dispatch(logout())
            navigate('/login')
        }
    }}
    >
        <UserOutlined style={{fontSize : 20 , marginTop : 25 , marginLeft : 20}}/>
    </Dropdown>
  )
}

export default IconMenu
