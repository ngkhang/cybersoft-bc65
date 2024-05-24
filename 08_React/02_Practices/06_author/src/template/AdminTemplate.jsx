import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import HeaderHome from '../components/HeaderHome/HeaderHome';
import FooterHome from '../components/FooterHome/FooterHome';
const { Header, Sider, Content } = Layout;

const AdminTemplate = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div className="min-vh-100 d-flex flex-column">
      <div className="container mb-2 shadow-lg">
        <HeaderHome/>
      </div>

      <Layout className="container-lg">
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "User management",
                onClick: () => navigate("/admin/users"),
              },
              {
                key: "2",
                icon: <UserAddOutlined />,
                label: "Create User",
                onClick: () => navigate("/admin/user-create"),
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 300,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>

      <FooterHome/>
    </div>
  );
};
export default AdminTemplate;
