import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import "./styles.css"

const { Header, Sider, Content } = Layout;

const AdminLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className='cra-main-layout'>
      <Sider color='#42a5f5'  trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Dashboard',
              className: 'customclass'
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'User',
              className: 'customclass'
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'Products',
              className: 'customclass'
            },
            {
              key: '4',
              icon: <UploadOutlined />,
              label: 'Posts',
              className: 'customclass'
            },
            {
              key: '5',
              icon: <UploadOutlined />,
              label: 'Funs',
              className: 'customclass'
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;