import React from 'react'
import { Link, Route, Switch } from "react-router-dom";

import { Layout, Menu } from 'antd';

import {
    BarsOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    InboxOutlined
} from '@ant-design/icons';

import Inform from '../inform/inform'
import Category from '../category/category'
import News from '../news/news'
import Upload from '../upload/upload'
import InformDetail from '../inform/detail/detail'
import './home.less'

const { Header, Sider, Content } = Layout;

export default class Home extends React.Component {
    state = {
        collapsed: false,

    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <div>
                <Layout>
                    <Sider 
                       style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                      }}
                       >
                        <div className="logo" />
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1" icon={<VideoCameraOutlined />}>
                                <Link to='/main/home/inform'>
                                    电影信息
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<BarsOutlined />}>
                                <Link to='/main/home/category'>
                                    电影类别
                            </Link>
                            </Menu.Item>
                            <Menu.Item key="3" icon={<UploadOutlined />}>
                                <Link to='/main/home/upload'>
                                    电影上传
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="4" icon={<InboxOutlined />}>
                                <Link to='/main/home/news'>
                                    新闻信息管理
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout" style={{ marginLeft: 200 }}>
                        <Header className="site-layout-background" style={{ padding: 0 }}>
                            <span style={{ fontSize: 22,marginLeft:40    }}>电影后台管理系统</span>
                            <span style={{float: "right", marginRight:20}} >
                                 <Link to="/login">退出登录</Link>
                                 </span>
                        </Header>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                minHeight: window.innerHeight - 110,
                                margin: '24px 16px 0',
                                 overflow: 'initial'
                            }}
                        >
                            <Switch>
                                <Route path={'/main/home/category'} component={Category} />
                                <Route path={'/main/home/inform'} component={Inform} />
                                <Route path={'/main/home/news'} component={News} />
                                <Route path={'/main/home/upload'} component={Upload} />
                                <Route path={'/main/home/informdetail'} component={InformDetail} />
                                <Route path="/" component={Category} />
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }

}