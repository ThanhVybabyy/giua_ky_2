"use client";
import { Typography, Button } from 'antd';
const { Title, Text } = Typography;

export default function AppBanner() {
  return (
    <div style={{ 
      background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://picsum.photos/1200/400?flowers")',
      height: '400px', backgroundSize: 'cover', backgroundPosition: 'center',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      borderRadius: '15px', margin: '20px 0', color: '#fff'
    }}>
      <Title style={{ color: '#fff' }}>Trao Gửi Yêu Thương</Title>
      <Text style={{ color: '#fff', fontSize: '18px' }}>Giảm ngay 10% cho đơn hàng đầu tiên</Text>
      <Button type="primary" danger size="large" style={{ marginTop: '20px' }}>Mua Ngay</Button>
    </div>
  );
}