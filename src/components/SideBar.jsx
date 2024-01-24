import React from 'react'
import {Divider, Layout} from 'antd';
import { ConfigProvider, Flex, Menu } from 'antd';
import { IoHomeOutline } from "react-icons/io5";

import { IoNewspaperOutline } from "react-icons/io5";

import { NavLink, useNavigate } from 'react-router-dom'
import { MdLiveTv } from "react-icons/md";
import {Link , animateScroll} from 'react-scroll'

import namad from '../assets/images/namad.png'
const { Sider } = Layout;
function SideBar({collapsed , setCollapsed}) {

    const styleText = {
        color : 'black'
    }


const navigate = useNavigate()






    return (
        <ConfigProvider 
            theme={{
                components : {
                    Menu : {
                        
                        itemHoverBg : '#4c71a1',                
                        itemColor : '#4c71a1',
                        darkSubMenuItemBg : 'white',
                        backgroundColor : '#4c71a1',
                        horizontalItemSelectedColor : '#4c71a1',
                        horizontalItemHoverColor : '#F0A500', 
                        darkItemSelectedBg : '#4c71a1',
                        itemSelectedBg : '#4c71a1',
                        margin : 2 , 
                        padding : 10,
                        zIndexBase:100,
                        itemSelectedColor : "#4c71a1", 
                       
                        
                    }
                }
            }}
        >
    <Sider collapsed={collapsed} onCollapse={(v)=> setCollapsed(v)} 
    breakpoint='md' 
    className='h-screen ' 
    theme='light'
    style={{ position: 'sticky' , top : 0 ,  bottom : 0 , backgroundColor : '#41535a', height:'100vh'}}
    >
      <Flex justify='center' align='center' className='h-28 w-full text-white pt-5'  >
          <img className='h-32'
          src={namad}
          alt="" />
         {/* <span className='font-khameneiiRegular text-xl'>سامانه اتاق وضعیت</span>  */}
      </Flex>
      <Divider className='text-black'/>
      <Menu  
        theme='light'
       
        defaultActiveFirst={['/dashboard']}
        style={{backgroundColor :'#41535a'}}
        mode='inline'
        items={[
            {
                label : <NavLink  style={({isActivte}) =>{
                    return {color : isActivte ? 'yellow' : 'white'}
                }} to={'/dashboard/homepage'}>
                    صفحه اصلی 
                </NavLink>,
                key : '/dashboard' , 
                icon : <IoHomeOutline/>,   
            }, 
            {
             label : <NavLink style={({isActivte}) =>{
                return {color : isActivte ? 'red' : 'white'}
            }} 
            to={'/dashboard/khabar'} 
                    
                    >
                        لحظه نگار
                    </NavLink>,
             key : '/khabarnegar' , 
             icon : <MdLiveTv/>,
             
             
            },
            {
                label : <NavLink 
                style={({isActivte}) =>{
                    return {color : isActivte ? 'red' : 'white'}
                }}
                 to={'/dashboard/ostanNama'} 
                       
                       >
                        استان نما
                       </NavLink>,
                key : '/ostan' , 
                icon : <IoNewspaperOutline/>,
                
                
            },
            {
                label : <NavLink 
                style={({isActivte}) =>{
                    return {color : isActivte ? 'red' : 'white'}
                }}
                to={'/dashboard/rasad'} 
               
                       >
                        رصد نگار 
                       </NavLink>,
                key : '/rasad' , 
                icon : <IoNewspaperOutline/>,
                
            },
           
            // {
            //     label : <Link to={'/dashboard/rasad'}>رصدنگار</Link>,
            //     key :'/rasad',
            //     children : [
            //         {
            //             label :'روایت'
            //         }
            //     ]
            // },
            
            {
                label : <NavLink 
                style={({isActivte}) =>{
                    return {color : isActivte ? 'red' : 'white'}
                }}
                to={'cards'} 
                       
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










// {
//     label : <NavLink 
    
//     to={'/dashboard/rasad'} 
   
//            >
//             رصد نگار 
//            </NavLink>,
//     key : '/rasad' , 
//     icon : <IoNewspaperOutline/>,
//     children: [
//         {
//             label : <Link to={'revayat'}  onClick={()=> handleItemClick('top')}
           
//                    >
//                     روایت اول  
//                    </Link>,
//             key : '/revayat' , 
//             icon : <IoNewspaperOutline/>,
            
            
//         },
//         {
//             label : <Link    to={'shayeat'} 
                     
//                    >
//                         شایعات و اخبار جعلی
//                    </Link>,
//             key : '/shayeat' , 
//             icon : <IoNewspaperOutline/>,
            
            
//         },
//         {
//             label : <Link   to={'afkar'}  
                   
//                    >
//                     افکار سنجی   
//                    </Link>,
//             key : '/afkar' , 
//             icon : <IoNewspaperOutline/>,
            
            
//         }
      
//     ]
    
// },