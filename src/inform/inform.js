import React from 'react'
import { PageHeader, Card, Col, Row ,Rate } from 'antd';
const { Meta } = Card;

export default class inform extends React.Component{
    state = {}
    cardClick=(e)=>{
        console.log(e)
        this.props.history.push('/main/home/informdetail')
        }
       render() {
           const data = 213546
           return(
               <div>    
                   <PageHeader
                   title="全部影片"
                   />
                   <Row gutter={[16,16]}>
                            <Col span={6}>
                            <Card
                            onClick={(e)=>this.cardClick(e)}
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
               </div>
           )
       }
   
}
