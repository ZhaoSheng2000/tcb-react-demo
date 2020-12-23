import React from 'react'
import { PageHeader, Button, Descriptions, Image, Modal, Input } from 'antd';

import './detail.less'
export default class detail extends React.Component {
    state = {
        visible: false,
        confirmLoading: false,
        type:''
    }
    onEdit = () => {
        this.setState({ visible: true });
    }

    handleOk = () => {
        this.setState({confirmLoading: true})
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false
            });
        }, 2000);
    };

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({visible : false});
    };
    onChange = (e) => {
        this.setState({type:e.target.value})
    }
    render() {
        const { visible, confirmLoading,type } = this.state
        return (
            <div className="site-page-header-ghost-wrapper">
                <PageHeader
                    ghost={false}
                    onBack={() => window.history.back()}
                    title="棒！少年"
                    subTitle="（2020）"
                    extra={
                        <Button key="1" type="primary" onClick={this.onEdit}>
                            编辑
                </Button>
                    }
                >
                    <Modal
                        title="修改类别"
                        visible={visible}
                        onOk={this.handleOk}
                        confirmLoading={confirmLoading}
                        onCancel={this.handleCancel}
                    >
                    <Input  placeholder="请修改电影类别" onChange={(e)=>this.onChange(e)}/>
                    </Modal>
                    <Image
                        style={{ marginBottom: 20 }}
                        width={200}
                        src="https://s3.ax1x.com/2020/12/21/rdgSWn.jpg"
                    />

                    <Descriptions size="default" column={1}>
                        <Descriptions.Item label="导演">许慧晶</Descriptions.Item>
                        <Descriptions.Item label="主演">
                        马虎 / 梁正双 / 张锦新 / 孙岭峰 / 郭忠健                        
                        </Descriptions.Item>
                        <Descriptions.Item label="上映日期">2020-12-11(中国大陆) / 2020-07-28(FIRST青年影展)</Descriptions.Item>
                        <Descriptions.Item label="片长">108分钟</Descriptions.Item>
                        <Descriptions.Item label="制片地区">
                            中国大陆
                        </Descriptions.Item>
                        <Descriptions.Item label="影片简介">
                        一群来自全国各地的困境少年，被选进北京市郊一个爱心棒球基地，组成了一支特殊的棒球队，跟着70岁传奇教练“师爷”从零开始学习打棒球。 少年马虎以“刺头”状态闯进了基地，天天打架干仗；而“元老球员”小双心思细腻敏感，对未来满是怀疑和不确定。不同家庭背景和心性习惯的少年在一起训练、生活，一支棒球棍，把他们带进无尽的冲突和欢乐，也带给他们久违的热血与梦想。 几个月后，他们将飞往美国，代表中国登上世界少棒的顶级赛场，但基地的球场和宿舍却面临拆迁…… 少年们能否逆风挥棒，叫板自己的命运？
                        </Descriptions.Item>
                    </Descriptions>
                </PageHeader>
            </div>
        )
    }
}