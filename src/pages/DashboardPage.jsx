import { Col, Flex, Layout, Row} from 'antd';
import SideBar from '../components/SideBar';
import HeaderItem from '../components/HeaderItem';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Cards from '../components/Cards';
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
const { Header, Sider, Content } = Layout;


function DashboardPage() {
  
  const [isAuth , setIsAuth] =useState(localStorage.getItem('user')) 
  console.log(isAuth)
  const navigate = useNavigate()
  const location = useLocation() 
  console.log(location.pathname)
  const [selectLocation , setSelectLocation] = useState()
  useEffect(()=> {
    if(!isAuth){
      navigate('/login')
    }
  }, [isAuth])

  const styleCard = {
    width: 30 , height : 30 , color : '#5389ec'  , fontSize : '34px'
   } 

  

  

  return (
    <Layout>
      <Sider 
      breakpoint='md' 
      className='h-screen ' 
      theme='light'
      style={{ position: 'sticky' , top : 0 , right: 0 , bottom : 0 , backgroundColor : 'black'}}
      >
        <Flex justify='center' align='center' className='h-20 w-full text-white'  >
            نام کاربری
        </Flex>
        <SideBar/>
      </Sider>
      <Layout style={{maxWidth: "100vw"} }>
        <Header className='bg-yellow-500 shadow-xl h-10'><HeaderItem/></Header>
        <Content style={{backgroundColor : '#fafafa'}} >
          <Row className='p-5' >
            <Col lg={4} xl={4} md={8} > 
              <Cards to={'twitter'} icon={<FaTelegramPlane style={styleCard}/>}/> 
            </Col>
            <Col lg={4} xl={4} md={8}> 
              <Cards  to={'telegram'} icon={<FaXTwitter style={styleCard}/>} />  
            </Col>
            <Col lg={4} xl={4} md={8}>
            <Cards/>   
            </Col>
            <Col lg={4} xl={4}  md={8}> 
            <Cards/>   
            </Col>
            <Col lg={4} xl={4} md={8}>
            <Cards/>   
            </Col>
            <Col lg={4} xl={4} md={8}>
            <Cards/>   
            </Col>
          </Row>
          <Outlet/>
        </Content>
      </Layout>   
    </Layout>
  )
}

export default DashboardPage




{/* <Row  >
<Col span={9} className='pr-2'>
  <Row className='mr-1 font-bold text-xl  '>داده نما</Row>
  <Row gutter={[10,10]}  className='p-3 shadow-2xl  '   >
      <Col span={12}><Cards/></Col>
      <Col span={12}><Cards/></Col>
      <Col span={12}><Cards/></Col>
      <Col span={12}><Cards/></Col>
  </Row>
</Col>

<Col span={14} className='  mr-10 mt-2 shadow-2xl p-2  '>
  <div className='flex flex-row justify-center items-center h-96 m-1 shadow-xl rounded-lg bg-green-200 mt-5 '  >
    <LineChartaccumulative/>
  </div>  
 
</Col>
</Row> */}