import React, { useState } from 'react'
import { AppstoreOutlined, MailOutlined} from '@ant-design/icons';
import {Divider, Layout} from 'antd';
import { ConfigProvider, Flex, Menu } from 'antd';
import { IoHomeOutline } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { RiTelegramLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom'
import { MdLiveTv } from "react-icons/md";
import {Link , animateScroll , scroller } from 'react-scroll'

const { Sider } = Layout;
function SideBar({collapsed , setCollapsed}) {

    const styleText = {
        color : 'black'
    }


    const handleItemClick = (p)=> {
        if ( p === 'top') {
            animateScroll.scrollToTop();

        }else if (p === 'shayeat') {
            animateScroll.scrollTo('shayeat')
        }else if (p === 'afkar') {
            animateScroll.scrollTo('afkar')
        }
    }







    return (
        <ConfigProvider 
            theme={{
                components : {
                    Menu : {
                        
                        itemHoverBg : '#ffd666',                
                        itemColor : '#F0A500',
                        darkSubMenuItemBg : '#838786',
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
    style={{ position: 'sticky' , top : 0 ,  bottom : 0 , backgroundColor : 'black', height:'100vh'}}
    >
      <Flex justify='center' align='center' className='h-32 w-full text-white'  >
          <img className='h-32'
          src="https://static.telewebion.com/channelsLogo/ZWE1OWZhYTEwODJhNjRlNDkzMmZhODM1MWU4NTEyN2FiMGM3NTk1MzFjY2I2ZTY0ZmMzNDQxZTMwNzc0NTI4Nw/default" 
          alt="" />
      </Flex>
      <Divider className='text-yellow-500 bg-yellow-400'/>
      <Menu  
        theme='dark'
        style={{ backgroundColor : "black" }}
        defaultActiveFirst={['/dashboard']}
        activeKey=''
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
             icon : <MdLiveTv/>,
             
             
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
                children: [
                    {
                        label : <Link to={'revayat'}  onClick={()=> handleItemClick('top')}
                               
                               >
                                روایت اول  
                               </Link>,
                        key : '/revayat' , 
                        icon : <IoNewspaperOutline/>,
                        
                        
                    },
                    {
                        label : <Link    to={'shayeat'} 
                                 
                               >
                                    شایعات و اخبار جعلی
                               </Link>,
                        key : '/shayeat' , 
                        icon : <IoNewspaperOutline/>,
                        
                        
                    },
                    {
                        label : <Link   to={'afkar'}  
                               
                               >
                                افکار سنجی   
                               </Link>,
                        key : '/afkar' , 
                        icon : <IoNewspaperOutline/>,
                        
                        
                    }
                  
                ]
                
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







