import React from 'react'

import { Form, Input, Button, Upload, message} from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

const tcb = require("tcb-js-sdk");
const app = tcb.init({
  env: "movie-0g7l5naq8b967325"
});

  
  function beforeUpload(file) {
    console.log(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader)
    app.uploadFile({
      cloudPath:reader,
      filePath:file,
      onUploadProgress: function (progressEvent) {
        console.log(progressEvent);
      }
    }).then(res =>{
      app.getTempFileURL({
        fileList: [res.fileID]
      }).then(res =>{
        console.log(res.fileList[0].tempFileURL)
      })  
    })
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }


const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 8,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 4,
      span: 8,
    },
  };

  

export default class upload extends React.Component {
    state = {
        loading: false,
      };
      
      handleChange = info => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
          app.uploadFile({
          cloudPath:'',
          filePath:info.file,
          onUploadProgress: function (progressEvent) {
            console.log(progressEvent);
          }
        }).then(res =>{
          app.getTempFileURL({
            fileList: [res.fileID]
          }).then(res =>{
            console.log(res.fileList[0].tempFileURL)
          })  
        })
      
      };
 
    onFinish = (values) => {
        console.log('Success:', values);
      };
    
     onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
       render() {
        const { loading, imageUrl } = this.state;
        const uploadButton = (
            <div>
              {loading ? <LoadingOutlined /> : <PlusOutlined />}
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          );

        return(
            <Form
            {...layout}
            name="basic"
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            >
                <Form.Item
                label="封面图"
                mane="picture"
                rules={[
                    {
                    required: true,
                    message: 'Please input your username!',

                    }
                    ]}
                >
                <Upload
                name="movie"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
                >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                </Upload>
                </Form.Item>
            <Form.Item
            label="电影名"
            name="moviename"
            rules={[
            {
            required: true,
            message: 'Please input your username!',
            },
            ]}
            >
            <Input />
            </Form.Item>
      <Form.Item
            label="导演"
            name="daoyan"
            rules={[
            {
            required: true,
            message: 'Please input your username!',
            },
            ]}
            >
        <Input />
      </Form.Item>
      <Form.Item
            label="主演"
            name="moviename"
            rules={[
            {
            required: true,
            message: 'Please input your username!',
            },
            ]}
            >
        <Input />
      </Form.Item>
      <Form.Item
            label="类型"
            name="moviename"
            rules={[
            {
            required: true,
            message: 'Please input your username!',
            },
            ]}
            >
        <Input />
      </Form.Item>
      <Form.Item
            label="地区"
            name="moviename"
            rules={[
            {
            required: true,
            message: 'Please input your username!',
            },
            ]}
            >
        <Input />
      </Form.Item>
      <Form.Item
            label="片长"
            name="moviename"
            rules={[
            {
            required: true,
            message: 'Please input your username!',
            },
            ]}
            >
        <Input />
      </Form.Item>
      <Form.Item
            label="剧情简介"
            name="moviename"
            rules={[
            {
            required: true,
            message: 'Please input your username!',
            },
            ]}
            >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
           )
       }
   
}
