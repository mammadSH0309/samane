import {  Layout } from 'antd';
import SideBar from '../components/SideBar';
import HeaderItem from '../components/HeaderItem';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useDispatch} from 'react-redux';

import { useGetEhsasTelegramNewsQuery } from '../query/Charts';
import { useLocation } from 'react-router-dom/dist';

const { Header,  Content } = Layout;


function DashboardPage() {
  
  const [collapsed , setCollapsed] = useState(false);
  const {data , isLoading} = useGetEhsasTelegramNewsQuery('ehsasTelegram')
  const navigate = useNavigate()
  const dispatch = useDispatch();
  


 

  const styleCard = {
    width: 30 , height : 30 , color : '#5389ec'  , fontSize : '34px'
   } 

  const [value , setValue] = useState(1)

  const path = useLocation()


  useEffect(()=>{
    if(path.pathname.split('/')[2]==''){
      navigate('telegram')
      console.log('adsadasdasdasd')
      console.log(path.pathname.split('/')[2])
    }
  })
 
 
  return (
    <Layout>
      <SideBar collapsed={collapsed} setCollapsed={setCollapsed}/>
      <Layout style={{maxWidth: "100vw"} }>
        <Header className='bg-yellow-500 shadow-xl h-10'><HeaderItem collapsed={collapsed} setCollapsed={setCollapsed} /></Header>
        <Content style={{backgroundColor : '#fafafa'}} >
          
          <Outlet/>
        </Content>
      </Layout>   
    </Layout>
  )
}

export default DashboardPage