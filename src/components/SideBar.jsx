import React, { useState } from 'react'
import { AppstoreOutlined, MailOutlined} from '@ant-design/icons';
import {Layout} from 'antd';
import { ConfigProvider, Flex, Menu } from 'antd';
import { IoHomeOutline } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { RiTelegramLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
const { Sider } = Layout;
function SideBar({collapsed , setCollapsed}) {

    const styleText = {
        color : 'black'
    }


    return (
        <ConfigProvider 
            theme={{
                components : {
                    Menu : {
                        
                        itemHoverBg : '#ffd666',                
                        itemColor : '#F0A500',
                        darkSubMenuItemBg : '#F0A500',
                        backgroundColor : '#000000',
                        horizontalItemSelectedColor : '#F0A500',
                        horizontalItemHoverColor : '#F0A500', 
                        margin : 2 , 
                        padding : 10,
                        zIndexBase:100,
                        itemSelectedColor : "F0A500"
                        
                    }
                }
            }}
        >
    <Sider collapsed={collapsed} onCollapse={(v)=> setCollapsed(v)} 
    breakpoint='md' 
    className='h-screen ' 
    theme='light'
    style={{ position: 'sticky' , top : 0 , right: 0 , bottom : 0 , backgroundColor : 'black'}}
    >
      <Flex justify='center' align='center' className='h-20 w-full text-white'  >
          نام کاربری
      </Flex>
      <Menu  
        theme='dark'
        style={{ backgroundColor : "black" }}
        defaultActiveFirst={['/dashboard']}
        defaultSelectedKeys={['/dashboard']}
        mode='inline'
        items={[
            {
                label : <NavLink to={''} 
                       
                       >
                           صفحه اصلی
                       </NavLink>,
                key : '/dashboard' , 
                icon : <IoHomeOutline/>,   
            },
            {
             label : <NavLink to={'khabar'} 
                    
                    >
                        لحظه نگار
                    </NavLink>,
             key : '/khabarnegar' , 
             icon : <IoNewspaperOutline/>,
             
             
            },
            {
                label : <NavLink to={'ostanNama'} 
                       
                       >
                        استان نما
                       </NavLink>,
                key : '/ostan' , 
                icon : <IoNewspaperOutline/>,
                
                
            },
            {
                label : <NavLink to={'rasad'} 
                       
                       >
                        رصد نگار 
                       </NavLink>,
                key : '/rasad' , 
                icon : <IoNewspaperOutline/>,
                
                
            },
            {
                label : <NavLink to={'revayat'} 
                       
                       >
                        روایت اول  
                       </NavLink>,
                key : '/revayat' , 
                icon : <IoNewspaperOutline/>,
                
                
            },
            {
                label : <NavLink to={'cards'} 
                       
                       >
                            شایعات و اخبار جعلی
                       </NavLink>,
                key : '/shayeat' , 
                icon : <IoNewspaperOutline/>,
                
                
            },
            {
                label : <NavLink to={'cards'} 
                       
                       >
                        افکار سنجی   
                       </NavLink>,
                key : '/afkar' , 
                icon : <IoNewspaperOutline/>,
                
                
            },
            {
                label : <NavLink to={'cards'} 
                       
                       >
                        هوش نگار    
                       </NavLink>,
                key : '/hosh' , 
                icon : <IoNewspaperOutline/>,
                
                
            },

            // {
            
            //  label :    'سکونما' ,
            //  icon : <MailOutlined/>,
            //  children : [
            //     {   
            //         icon : <FaXTwitter style={{fontSize : 15}}/>,
            //         label : 'توییتر',
            //         style : styleText,
            //     },
            //     {   
            //         icon : <FaTelegramPlane  style={{fontSize : 15}}/>,
            //         label : 'تلگرام',
            //         style : styleText
            //     }
            //  ]
             
            // }
        ]}
        
        ///lable = name , id = key , childern == sub 
        
        onSelect={()=>{
        
        }}
        >
        </Menu>
    </Sider> 
 </ConfigProvider>
)
     
     


   

 
}

export default SideBar







