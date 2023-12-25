import { Col, Layout, Row } from 'antd';
import SideBar from '../components/SideBar';
import HeaderItem from '../components/HeaderItem';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Cards from '../components/Cards';
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useDispatch} from 'react-redux';
import { login } from '../slices/accountSlice';
import { useGetEhsasTelegramNewsQuery } from '../query/Charts';
import LineCharts from '../components/LineCharts';
import { FaInstagram } from "react-icons/fa";
import Map from '../components/Map';
const { Header,  Content } = Layout;


function DashboardPage() {
  
  const [collapsed , setCollapsed] = useState(false);
  const {data , isLoading} = useGetEhsasTelegramNewsQuery('ehsasTelegram')
  
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user') || "{}");
  useEffect(()=>{
  dispatch(login(user))
  }, [user])



 

  const styleCard = {
    width: 30 , height : 30 , color : '#5389ec'  , fontSize : '34px'
   } 

  const [value , setValue] = useState(1)
  
  

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