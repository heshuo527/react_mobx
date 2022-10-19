import { Button, Checkbox,message, Form, Input } from 'antd';
import React from 'react';
import './Login.css'
import {useNavigate} from 'react-router-dom'
import {inject,observer} from 'mobx-react'
function Login(props) {
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('Success:', values);
        // 将用户名和密码发送到后台，进行验证
        // 发起请求的操作，mobx中的action中进行
        props.user.login(values).then((data)=>{
            if(data.returnCode===200){
              message.success("登录成功");
              navigate("/index");
            }else{
              message.warning("登录失败");
            }
        }).catch((err)=>{
          message.error("登录出错");
        })
        // 验证通过后，跳到首页
        //navigate("/index");
        // 验证失败，提示错误
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    
      return (
         <div className='loginContainer'>
            <h2>登录</h2>
             <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="用户名"
            name="userName"
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
            ]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="密码"
            name="userPwd"
            rules={[
              {
                required: true,
                message: '请输入密码!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
    
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>记住密码</Checkbox>
          </Form.Item>
    
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
         </div>
      );
}

export default inject('user')(observer(Login))