import React from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { grey } from '@ant-design/colors';
import { ConfigProvider, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import MenuItem from 'antd/es/menu/MenuItem';
function SideBar() {

    
   

     
     


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
                icon : <AppstoreOutlined/>,   
            },
            {
             label : <NavLink to={'cards'} 
                    
                    >
                        خبرنگار
                    </NavLink>,
             key : '/khabarnegar' , 
             icon : <AppstoreOutlined/>,
             
             
            },
            {
            
             label : <NavLink to={'search'}
             > 
                سکو نما
             </NavLink>, 
             icon : <MailOutlined/>,
             children : [
                {
                    label : 'توییتر',
                    style : styleText,
                },
                {   
                    label : 'تلگرام',
                    style : styleText
                }
             ]
             
            }
        ]}
        
        ///lable = name , id = key , childern == sub 
        
        onSelect={()=>{
        
        }}
        >
        </Menu>
    </ConfigProvider>
  )
}

export default SideBar







