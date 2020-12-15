import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Card,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Backdground from './login.jpg';

import { reqLogin } from '../api/reqLogin'

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
export default class Login extends React.Component {
    state = {
    };
    onFinish = (e) => {
        console.log(e);
        reqLogin({
            email: e.email,
            password: e.password
        }).then(r => {
            console.log(r)
            if(r.code===200)
            {
                this.props.history.push('/main/home')
            }
            else{
                message.error('帐号或密码错误')
            }
        });
    };

    render() {
        return (
            <div style={{
                backgroundSize: 'cover',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: window.innerHeight,
                background: `url(${Backdground})`,
            }}
            >
                <Card
                    title='账号登陆'
                    style={{
                        width: 380,
                    }}>
                    <Form
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="email"
                            rules={[{ required: true, type: 'email', message: '请输入正确的邮箱！' }]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="Email" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, type: 'string', min: '9', message: '请输入密码' }]}
                        >
                            <Input
                                prefix={<LockOutlined />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                登 录
                            </Button>
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Link to='/register'>没有账号？去注册</Link>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}

