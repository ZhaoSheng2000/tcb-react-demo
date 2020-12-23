import React from 'react'
import { PageHeader, Tabs, Card, Col, Row ,Rate } from 'antd';

import './category.less'

const { TabPane } = Tabs;
const { Meta } = Card;

function callback(key) {
    console.log(key);
}
export default class category extends React.Component {
    state = {}

    render() {
        return (
            <div>
                <PageHeader
                    title="影视类别"
                />
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="剧情" key="1">
                        <Row gutter={[16,16]}>
                            <Col span={6}>
                            <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://s3.ax1x.com/2020/12/21/rdgSWn.jpg" />}
                            >
                            <Meta title="" description={<span> 评分：<Rate disabled allowHalf defaultValue={4.5} /></span>} />
                            </Card>
                            </Col>
                            <Col span={6}>
                            <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://s3.ax1x.com/2020/12/21/rdgSWn.jpg" />}
                            >
                            <Meta title="棒！少年" description={<span> 评分：<Rate disabled allowHalf defaultValue={4.5} /></span>}/>
                            </Card>
                            </Col>
                            <Col span={6}>
                            <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://s3.ax1x.com/2020/12/21/rdgSWn.jpg" />}
                            >
                            <Meta title="棒！少年" description={<span> 评分：<Rate disabled allowHalf defaultValue={4.5} /></span>} />
                            </Card>
                            </Col>
                            <Col span={6}>
                            <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://s3.ax1x.com/2020/12/21/rdgSWn.jpg" />}
                            >
                            <Meta title="棒！少年" description={<span> 评分：<Rate disabled allowHalf defaultValue={4.5} /></span>} />
                            </Card>
                            </Col>
                            <Col span={6}>
                            <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://s3.ax1x.com/2020/12/21/rdgSWn.jpg" />}
                            >
                            <Meta title="棒！少年" description={<span> 评分：<Rate disabled allowHalf defaultValue={4.5} /></span>} />
                            </Card>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab="喜剧" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="动作" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                    <TabPane tab="爱情" key="4">
                        Content of Tab Pane 4
                    </TabPane>
                    <TabPane tab="科幻" key="5">
                        Content of Tab Pane 5
                    </TabPane>
                    <TabPane tab="动画" key="6">
                        Content of Tab Pane 6
                    </TabPane>
                    <TabPane tab="悬疑" key="7">
                        Content of Tab Pane 7
                    </TabPane>
                    <TabPane tab="惊悚" key="8">
                        Content of Tab Pane 8
                    </TabPane>
                    <TabPane tab="恐怖" key="9">
                        Content of Tab Pane 9
                    </TabPane>
                    <TabPane tab="犯罪" key="10">
                        Content of Tab Pane 10
                    </TabPane>
                    <TabPane tab="音乐" key="11">
                        Content of Tab Pane 11
                    </TabPane>
                    <TabPane tab="歌舞" key="12">
                        Content of Tab Pane 12
                    </TabPane>
                    <TabPane tab="传记" key="13">
                        Content of Tab Pane 13
                    </TabPane>
                    <TabPane tab="历史" key="15">
                        Content of Tab Pane
                    </TabPane>
                    <TabPane tab="战争" key="16">
                        Content of Tab Pane
                    </TabPane>
                </Tabs>
            </div>
        )
    }

}
