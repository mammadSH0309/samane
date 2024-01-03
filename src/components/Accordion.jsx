import React from 'react'
import { Collapse, theme } from 'antd';
import { CaretRightFilled, DownloadOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'

function Accordion({title , des , type , doc}) {

  

const getItems = (panelStyle) => [
  {
    label: <div className=' justify-between flex flex-row   w-full  animate-pulse   rounded-lg'>
        <div className='text-black'>{`${type} | ${title}`}</div>
         <div className='animate-none text-black'>
            <Link to={doc}>
            <DownloadOutlined style={{color : 'gray'}} className='text-xl'/>
            </Link>
            </div>
        </div>,
        
    children: <p className='text-justify mx-4 my-2'>{des}</p>,
    style: panelStyle,
  },

];

    const { token } = theme.useToken();
    const panelStyle = {
      marginBottom: 24,
      background: token.colorFillAlter,
      borderRadius: token.borderRadiusLG,
      border: 'none',
    };
    return (
      <>
      
       
       <div id='revayat' className='border  border-black   rounded-lg mx-2 my-2 pt-5'>
       <Collapse
        bordered={false}
        expandIcon={({ isActive }) => <CaretRightFilled style={{color : 'gray'}} rotate={isActive ? 90 : 180} />}
        style={{
          background: token.colorBgContainer,
        }}
        items={getItems(panelStyle)} />
       </div>
       
      

      
      </>
    );
}

export default Accordion