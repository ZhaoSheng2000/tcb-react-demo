import React from 'react'
import {Link} from 'react-router-dom'

import { Form, Input, Button, Card, } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Backdground from './bg.jpg';

import { reqRegister } from '../api/reqregister'

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
export default class Register extends React.Component {
    state = {
    };
    onFinish = (e) => {
        console.log(e);
        reqRegister({
            email: e.email,
            password: e.password
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
                    title='账号注册'
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
                            rules={[{ required: true, min:'9', message: '至少为九位数且包含数字和字母' }]}
                        >
                            <Input
                                prefix={<LockOutlined />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                注 册
                            </Button>
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Link to='/login'>已有账号？去登陆</Link>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}

