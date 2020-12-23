import React from 'react'

import { Table, Tag, Space,Carousel } from 'antd';

const { Column } = Table;

const contentStyle = {
    height: '260px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

const data = [
    {
      key: '1',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      firstName: 'Jim',
      lastName: 'Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      firstName: 'Joe',
      lastName: 'Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
export default class news extends React.Component {
    state = {}

    render() {
        return (
            <div>
                <Carousel autoplay>
                    <div>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>
            <Table dataSource={data}>
                <Column title="新闻标题" dataIndex="address" key="address" />
                <Column title="作者" dataIndex="lastName" key="lastName" />
                <Column title="上传时间" dataIndex="age" key="age" />
                <Column
                title="关键词"
                dataIndex="tags"
                key="tags"
                render={tags => (
                    <>
                    {tags.map(tag => (
                        <Tag color="blue" key={tag}>
                        {tag}
                        </Tag>
                    ))}
                    </>
                )}
                />
                <Column
                title="操作"
                key="action"
                render={(text, record) => (
                    <Space size="middle">
                    <a>编辑</a>
                    <a>删除</a>
                    </Space>
                )}
                />
            </Table>




            </div>


        )
    }

}
