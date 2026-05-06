"use client";
import { Layout, Menu, Input, Badge, Button } from 'antd';
import { ShoppingCartOutlined, SearchOutlined } from '@ant-design/icons';

const { Header } = Layout;

export default function AppHeader({ cartCount }: { cartCount: number }) {
  return (
    <Header style={{ 
      position: 'sticky', top: 0, zIndex: 1, width: '100%', 
      display: 'flex', alignItems: 'center', background: '#fff',
      padding: '0 50px', boxShadow: '0 2px 8px #f0f1f2'
    }}>
      <div style={{ color: '#eb2f96', fontSize: '24px', fontWeight: 'bold', marginRight: '40px' }}>
        FLOWER GARDEN
      </div>
      <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{ flex: 1, borderBottom: 'none' }}>
        <Menu.Item key="1">Trang Chủ</Menu.Item>
        <Menu.Item key="2">Loại Hoa</Menu.Item>
        <Menu.Item key="3">Dịch Vụ</Menu.Item>
      </Menu>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Input suffix={<SearchOutlined />} placeholder="Tìm hoa..." style={{ width: 200 }} />
        <Badge count={cartCount}>
          <Button type="text" icon={<ShoppingCartOutlined style={{ fontSize: '20px' }} />} />
        </Badge>
      </div>
    </Header>
  );
}