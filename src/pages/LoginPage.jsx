import React, { useEffect, useState } from 'react'
import {Col , Row , Flex , Form , Input , Button, Spin, message, ConfigProvider} from 'antd'
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import FormItem from 'antd/es/form/FormItem'
import { useLoginUserMutation } from '../query/Charts';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../slices/accountSlice';
import {Link} from 'react-router-dom'
import data from '../assets/images/data.png'


function LoginPage() {

  const [loginUser , {data , isSuccess ,  isLoading , error  }] = useLoginUserMutation('loginUser');
  const [username , setUsername] = useState('')
  const [password , setPassword] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [isAuth ] =useState(JSON.parse(localStorage.getItem('user')))
  

  useEffect(()=> {
    if(isAuth){
      navigate('/dashboard')
    }
  }, [isAuth ])

  useEffect(()=> {
    if(isSuccess) {
      dispatch(login({ 
        token: data.access
       }))
      
      navigate('/dashboard' , {replace :true})
    }
  }, [isSuccess , ])


  const handleLogin = async (e)=>{
    e.preventDefault()
    if(username && password) {
      await loginUser({username , password});
      if(error){
        message.error('خطا در برقراری اتصال')
      }
      
    }if (!username && !password){
      message.error("لطفا نام کاربری و رمز عبور خود را وارد کنید")
    }
    else if (!username){
      message.error("لطفا نام کاربری را وارد کنید")
    }else if (!password) { 
      message.error("لطفا رمز عبور را وارد کنید")
    }
  }
  
  
  return (
    <ConfigProvider
    theme={{
      components : {
        Form : {
          itemMarginBottom : 1,
          borderRadius : 0,
          labelHeight : 50, 
          
          
          
        },
        Button : {
          borderRadius : 0 ,
          fontSize : 18
          
        },
       
      }
    }}
    >
      
      <Row>
      {/* https://demo.sadafdashboard.ir/images/logo_half.png */}
      
      <Col xs={24} sm={24} lg={10} className='bg-yellow-400 h-screen '>
        <div className='flex flex-row justify-center items-center pt-10 align-middle  '>
          <img 
          className='h-52 w-52'
          src="https://static.telewebion.com/channelsLogo/ZWE1OWZhYTEwODJhNjRlNDkzMmZhODM1MWU4NTEyN2FiMGM3NTk1MzFjY2I2ZTY0ZmMzNDQxZTMwNzc0NTI4Nw/default" alt="" /> 
        </div>
        <Flex justify='center' className='text-white mt-36' >
          
          <Form 
          name='normal-login'
          className='login-form rounded-none '
          labelCol={{span: 2}}
          wrapperCol={{
            span: 28,
          }}
          style={{
            width : 400,
            maxWidth: 500,
          }}
          autoComplete='off'
          >
            <FormItem
           
            
            name="نام کاربری" 
            rules={[
              {
                required : true,
                message : 'لطفا نام کاربری خود را وارد کنید'
              }
            ]}
            >
              <Input 
              prefix={<FaUser className='site-form-item-icon'/>}
               placeholder='نام کاربری'
               value={username}
               onChange={(e) => {
                setUsername(e.target.value)
                // console.log(formValue.username)
               }}
               />
            </FormItem>

            <FormItem 
            name="رمزعبور"
            
            rules={[
              {
                required : true , 
                message : "لطفا رمز عبور را وارد کنید"
              }
            ]}
            >
              <Input.Password 
              prefix={<RiLockPasswordFill 
              className='site-form-item-icon'/>} 
              placeholder='رمز عبور'
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
                // console.log(formValue.password)
              }}
              />
            </FormItem>

            <FormItem className='mt-10'>
              <Spin
              spinning={isLoading}
              >
              <Button 
              type='primary' 
              htmlType='submit'
              className='login-form-button w-full bg-black  '
              onClick={handleLogin}
              >
                ورود
              </Button>
              </Spin>
              <div className='flex flex-row justify-start mt-3'>
                <Link>
                  فراموشی رمز عبور
                </Link>
              </div>
              <div className='flex flex-row mt-28 gap-1'>
                <div>
                نسخه : ۱۰.۹.۲۷ |
                </div>
                <div>
                نسخه پایگاه داده: ۱۵۹ |
                </div>
                <div>
                  <Link>
                  لیست تغییرات 
                  </Link>
                </div>
                |
                <div>
                  <Link>
                  راهنمای ورود 
                  </Link>
                </div>

              </div>
            </FormItem>
          </Form>
        </Flex>
        
       
      </Col>
      <Col xs={0} sm={0}  lg={14} className='bg-white'>
        <div >
           <img 
           src={data}
           />   
        </div>
      </Col>
    </Row>
    </ConfigProvider>
  )
}

export default LoginPage
