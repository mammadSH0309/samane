import React, { useEffect, useState } from 'react'
import {Col , Row , Flex , Form , Input , Button} from 'antd'
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import FormItem from 'antd/es/form/FormItem'
import { useLoginUserMutation } from '../query/Charts';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../slices/accountSlice';
import { ToastContainer } from 'react-toastify';
import Toastify from '../components/Toastify';

function LoginPage() {

  const [loginUser , {data , isSuccess , isError , error , isLoading ,  }] = useLoginUserMutation();

  
  const [username , setUsername] = useState('')
  const [password , setPassword] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch();
  
  const [isAuth , setIsAuth] =useState(JSON.parse(localStorage.getItem('user')) || "")
  



  // console.log(token)
  
  useEffect(()=> {
    if(isAuth){
      navigate('/dashboard')
    }
  }, [isAuth])

  useEffect(()=> {
    if(isSuccess) {
      console.log(data)
      dispatch(setUser({ token: data.access  }))
      navigate('/dashboard')
    }
  }, [isSuccess])

  
  
  return (
    <Row>
      <Col xs={24} sm={24} lg={10} className='bg-neutral-500 h-screen'>
        <Toastify/>
        <Flex justify='center' className='text-white mt-72' >
          <Form 
          name='normal-login'
          className='login-form'
          labelCol={{span: 9}}
          wrapperCol={{
            span: 22,
          }}
          style={{
            width : 500,
            maxWidth: 600,
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

            <FormItem>
              <Button 
              type='primary' 
              htmlType='submit'
              className='login-form-button w-full bg-blue-600'
              
              onClick={async (e)=> {
                e.preventDefault();
                // console.log(username)
                // console.log(password)
                if(username && password) {
                  try {
                    let {error} = await loginUser({username , password});
                    let {status} = error
                    if(status === 401){
                      
                    
                    }
                  } catch (error) {
                    console.log()
                  }
                  
                  
                }else {
                  console.log('error')
                }
              }}
              >
                ورود
              </Button>
            </FormItem>

          </Form>
        </Flex>
      </Col>
      <Col xs={0} sm={0}  lg={14}>
        <img 
        src='https://static.vecteezy.com/system/resources/previews/005/879/539/non_2x/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg'
        /> 
      </Col>
    </Row>
  )
}

export default LoginPage
